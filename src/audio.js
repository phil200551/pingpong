// All sound is synthesised live with the Web Audio API: no audio files.
// Three buses (effects, music, crowd), each with its own volume and its own
// share of the arena reverb, feed a master gain (used for mute) and a limiter.

const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const rnd = (a, b) => a + Math.random() * (b - a);

// The music: an 8-bar synthwave loop in A minor (Am F C G Am F Dm E).
const BARS = [
  { chord: [57, 60, 64], bass: 45 },
  { chord: [57, 60, 65], bass: 41 },
  { chord: [55, 60, 64], bass: 48 },
  { chord: [55, 59, 62], bass: 43 },
  { chord: [57, 60, 64], bass: 45 },
  { chord: [57, 60, 65], bass: 41 },
  { chord: [57, 62, 65], bass: 38 },
  { chord: [56, 59, 64], bass: 40 },
];
// Lead hook: [bar, 16th step, MIDI note, length in 16ths]
const LEAD = [
  [0, 0, 76, 4], [0, 6, 72, 2], [0, 8, 74, 2], [0, 10, 76, 6],
  [1, 0, 77, 6], [1, 8, 76, 2], [1, 10, 72, 6],
  [2, 0, 79, 4], [2, 4, 76, 4], [2, 8, 72, 4], [2, 12, 76, 4],
  [3, 0, 74, 8], [3, 8, 71, 4], [3, 12, 74, 4],
  [4, 0, 76, 4], [4, 4, 81, 4], [4, 8, 79, 2], [4, 10, 76, 6],
  [5, 0, 77, 4], [5, 4, 81, 4], [5, 8, 84, 8],
  [6, 0, 86, 6], [6, 6, 84, 2], [6, 8, 81, 8],
  [7, 0, 80, 4], [7, 4, 83, 4], [7, 8, 76, 8],
];
const LEAD_AT = new Map(LEAD.map(([bar, step, m, len]) => [bar * 16 + step, { m, len }]));
const ARP = [0, 1, 2, 3, 2, 1, 2, 3]; // chord tone index; 3 = root an octave up
const LOOP = BARS.length * 16;

// How loud each bus is at 100% on its slider.
const BUS_GAIN = { sfx: 1, music: 0.5, crowd: 0.9 };

export class Audio {
  constructor() {
    this.ctx = null;
    this.volumes = { master: 0.8, music: 0.5, sfx: 0.9, crowd: 0.7 };
    this.muted = false;
    this.intensity = 0;
    this.musicMode = 'menu'; // 'menu' | 'game' | 'off'
    this.step = 0;
    this.nextTime = 0;
    this.bpm = 0;
    this.roarBase = 0;
    this.announcer = true;
  }

  // Must be called from a user gesture.
  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC({ latencyHint: 'interactive' }));

    this.limiter = ctx.createDynamicsCompressor();
    this.limiter.threshold.value = -14;
    this.limiter.ratio.value = 4;
    this.limiter.attack.value = 0.003;
    this.limiter.release.value = 0.2;
    this.master = ctx.createGain();
    this.master.connect(this.limiter);
    this.limiter.connect(ctx.destination);

    // Arena reverb, shared by all buses through their own sends.
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this._impulse(2.2, 2.6);
    this.reverbIn = ctx.createGain();
    this.reverbIn.gain.value = 0.35;
    this.reverbIn.connect(this.reverb);
    this.reverb.connect(this.master);

    this.noiseBuf = this._noise(3);

    this.muffle = ctx.createBiquadFilter(); // music goes dull in pauses and replays
    this.muffle.type = 'lowpass';
    this.muffle.frequency.value = 20000;
    this.buses = {
      sfx: this._bus('sfx'),
      music: this._bus('music', this.muffle),
      crowd: this._bus('crowd'),
    };
    // The opponent's shots happen three metres away: a touch duller.
    const farLp = ctx.createBiquadFilter();
    farLp.type = 'lowpass';
    farLp.frequency.value = 4200;
    const farIn = ctx.createGain();
    farIn.connect(farLp).connect(this.buses.sfx.input);
    this.buses.far = { input: farIn, send: this.buses.sfx.send };

    this._buildMusic();
    this._buildCrowd();
    this.applyVolumes();
    this.nextTime = ctx.currentTime + 0.1;
  }

  _bus(key, insert = null) {
    const ctx = this.ctx;
    const input = ctx.createGain(), vol = ctx.createGain();
    const send = ctx.createGain(), sendVol = ctx.createGain();
    if (insert) input.connect(insert).connect(vol); else input.connect(vol);
    vol.connect(this.master);
    send.connect(sendVol).connect(this.reverbIn);
    return { key, input, vol, send, sendVol };
  }

  setVolumes(v) {
    Object.assign(this.volumes, v);
    this.applyVolumes();
  }

  setMuted(on) {
    this.muted = !!on;
    this.applyVolumes();
    if (this.muted && typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel();
  }

  applyVolumes() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(this.muted ? 0 : this.volumes.master, t, 0.03);
    for (const k of ['sfx', 'music', 'crowd']) {
      const b = this.buses[k];
      const v = this.volumes[k] * BUS_GAIN[k];
      b.vol.gain.setTargetAtTime(v, t, 0.03);
      b.sendVol.gain.setTargetAtTime(v, t, 0.03);
    }
  }

  // Music goes dull (as if heard through a wall) during pauses and replays.
  setMuffle(on) {
    if (!this.ctx) return;
    this.muffle.frequency.setTargetAtTime(on ? 650 : 20000, this.ctx.currentTime, on ? 0.08 : 0.25);
  }

  _noise(seconds) {
    const ctx = this.ctx;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * seconds), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  _impulse(seconds, decay) {
    const ctx = this.ctx;
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  _env(g, t, a, peak, d) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }

  // Route a voice to a bus, with an optional reverb share.
  _out(node, bus, wet) {
    node.connect(bus.input);
    if (wet) {
      const s = this.ctx.createGain();
      s.gain.value = wet;
      node.connect(s).connect(bus.send);
    }
  }

  _tone(type, f0, f1, t, dur, vol, bus = this.buses.sfx, wet = 0, attack = 0.002) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    this._env(g, t, attack, vol, dur);
    o.connect(g);
    this._out(g, bus, wet);
    o.start(t);
    o.stop(t + attack + dur + 0.05);
  }

  _noiseHit(t, dur, vol, type, freq, q, bus = this.buses.sfx, wet = 0, sweepTo = 0, attack = 0.002) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
    f.Q.value = q;
    const g = ctx.createGain();
    this._env(g, t, attack, vol, dur);
    src.connect(f).connect(g);
    this._out(g, bus, wet);
    src.start(t, Math.random() * Math.max(0, 2.8 - dur));
    src.stop(t + attack + dur + 0.05);
  }

  get ok() {
    return !!this.ctx && this.ctx.state === 'running';
  }

  // ---------------------------------------------------------------- effects
  // Paddle on ball: a crisp "tock". Harder hits are higher and louder; a smash
  // adds a deep thump and a crack. power 0..1, quality 0..1, far = the
  // opponent's hit (quieter, a little duller).
  hit(power, quality = 0.5, far = false, smash = false, chop = false) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const bus = far ? this.buses.far : this.buses.sfx;
    const p = clamp01(power);
    const v = (far ? 0.5 : 1) * (0.4 + 0.6 * p);
    const k = (0.82 + 0.45 * p) * (1 + (Math.random() - 0.5) * 0.04);
    // The click: barely there on a soft touch, sharp and bright on a hard hit.
    this._noiseHit(t, 0.008, (0.12 + 0.45 * p) * v, 'highpass', 2200 + 2600 * p, 0.7, bus, 0.15, 0, 0.0008);
    this._tone('sine', 1180 * k, 1020 * k, t, 0.05 + 0.02 * p, 0.55 * v, bus, 0.35, 0.001); // the tock
    this._tone('triangle', 2650 * k, 2500 * k, t, 0.022, 0.14 * v, bus, 0.2, 0.001);
    this._tone('sine', 430 * k, 320 * k, t, 0.045, 0.2 * v, bus, 0, 0.001); // the blade
    if (chop) this._noiseHit(t, 0.08, 0.1 * v, 'bandpass', 1800, 0.8, bus, 0.1, 700); // brushing under it
    if (smash) {
      const s = far ? 0.6 : 1;
      this._tone('sine', 170, 46, t, 0.26, 0.9 * s, bus, 0.3, 0.001);
      this._noiseHit(t, 0.1, 0.5 * s, 'bandpass', 2300, 0.9, bus, 0.6, 800, 0.001);
      this._noiseHit(t + 0.012, 0.32, 0.16 * s, 'bandpass', 5200, 0.8, bus, 0.7, 450);
    } else if (p > 0.6) {
      this._tone('sine', 150, 70, t, 0.12, 0.35 * ((p - 0.6) / 0.4) * v, bus);
    }
    if (quality > 0.88 && !far) {
      // A little sparkle for a perfectly timed hit.
      const base = 76 + Math.floor(this.intensity * 5);
      [0, 4, 7, 12].forEach((n, i) => {
        this._tone('sine', NOTE(base + n), NOTE(base + n), t + 0.03 + i * 0.035, 0.18, 0.1, this.buses.sfx, 0.8);
      });
    }
  }

  // Ball on table: a lighter, higher tick than the paddle.
  bounce(speed, far) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const bus = far ? this.buses.far : this.buses.sfx;
    const v = Math.min(1, 0.3 + speed / 9) * (far ? 0.5 : 0.85);
    const k = 1 + (Math.random() - 0.5) * 0.06;
    this._noiseHit(t, 0.005, 0.28 * v, 'highpass', 5500, 0.7, bus, 0.1, 0, 0.0005);
    this._tone('sine', 1950 * k, 1750 * k, t, 0.028, 0.3 * v, bus, 0.25, 0.0008);
    this._tone('sine', 270 * k, 210 * k, t, 0.03, 0.1 * v, bus, 0, 0.001);
  }

  // Ball into the net: a dull thud and a little rattle of the mesh.
  net(speed = 6) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const bus = this.buses.sfx;
    const v = Math.min(1, 0.45 + speed / 14);
    this._noiseHit(t, 0.12, 0.5 * v, 'lowpass', 480, 0.8, bus, 0.2, 0, 0.004);
    this._tone('sine', 140, 80, t, 0.13, 0.42 * v, bus, 0.1, 0.003);
    this._noiseHit(t + 0.015, 0.09, 0.07 * v, 'bandpass', 1300, 2.5, bus, 0.1);
  }

  floor() {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    this._tone('sine', 520, 380, t, 0.07, 0.15, this.buses.sfx, 0.5);
    this._noiseHit(t, 0.02, 0.05, 'lowpass', 1400, 0.7);
  }

  whoosh(strength = 1) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    this._noiseHit(t, 0.16, 0.16 * strength, 'bandpass', 500, 1.4, this.buses.sfx, 0.1, 2600);
  }

  toss() {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    this._tone('sine', 500, 900, t, 0.08, 0.06);
  }

  // The practice machine firing a ball: a pneumatic pop and a little hiss.
  machine() {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const bus = this.buses.far;
    this._noiseHit(t, 0.06, 0.35, 'bandpass', 900, 1.2, bus, 0.2, 300);
    this._tone('sine', 180, 70, t, 0.08, 0.3, bus, 0.1);
    this._noiseHit(t + 0.01, 0.12, 0.1, 'highpass', 3000, 0.7, bus, 0.15);
  }

  // Time slowing down for the replay: a falling sweep under a soft whoosh.
  slowmo() {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    this._tone('sine', 700, 90, t, 0.6, 0.16, this.buses.sfx, 0.5, 0.01);
    this._noiseHit(t, 0.7, 0.1, 'bandpass', 2400, 0.9, this.buses.sfx, 0.6, 300, 0.05);
  }

  ui(kind = 'move') {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    if (kind === 'select') {
      this._tone('square', NOTE(81), NOTE(81), t, 0.06, 0.06);
      this._tone('square', NOTE(88), NOTE(88), t + 0.06, 0.1, 0.06, this.buses.sfx, 0.4);
    } else {
      this._tone('triangle', NOTE(88), NOTE(86), t, 0.04, 0.07);
    }
  }

  // A point is over: a short jingle, then the crowd reacts (louder after a
  // long rally): cheers if you won it, a groan if you lost it.
  point(won, rallyLen = 0) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const seq = won ? [0, 4, 7, 12, 16] : [7, 3, 0, -5];
    const base = won ? 72 : 64;
    seq.forEach((n, i) => {
      const f = NOTE(base + n);
      this._tone(won ? 'square' : 'sawtooth', f, f, t + i * 0.075, 0.16, won ? 0.06 : 0.045, this.buses.sfx, 0.6);
    });
    const big = clamp01((rallyLen - 4) / 14);
    this.roarBase = 0;
    if (won) {
      this.cheer(0.45 + 0.55 * big);
    } else {
      this.aww(0.45 + 0.45 * big);
      if (rallyLen >= 8) this.applause(0.3 + 0.5 * big);
    }
  }

  fanfare(won) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const seq = won ? [0, 4, 7, 12, 7, 12, 16, 19, 24] : [12, 7, 3, 0, -5, -12];
    seq.forEach((n, i) => {
      const f = NOTE(64 + n);
      this._tone('square', f, f, t + i * 0.11, 0.24, 0.07, this.buses.sfx, 0.7);
      this._tone('sawtooth', f / 2, f / 2, t + i * 0.11, 0.24, 0.04);
    });
    if (won) this.cheer(1);
  }

  // ------------------------------------------------------------------ crowd
  _buildCrowd() {
    const ctx = this.ctx;
    const bus = this.buses.crowd;
    const buf = this._noise(4);
    // Murmur: a few "voice" bands of noise, each swelling slowly on its own.
    this.murmur = ctx.createGain();
    this.murmurLevel = 0.05;
    this.murmur.gain.value = this.murmurLevel;
    this._out(this.murmur, bus, 0.5);
    for (const [f, q, g, rate] of [[380, 1.1, 1, 0.13], [900, 1.3, 0.7, 0.21], [2100, 1.6, 0.25, 0.17]]) {
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = f;
      bp.Q.value = q;
      const gg = ctx.createGain();
      gg.gain.value = g * 0.75;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = rate;
      const depth = ctx.createGain();
      depth.gain.value = g * 0.25;
      lfo.connect(depth).connect(gg.gain);
      src.connect(bp).connect(gg).connect(this.murmur);
      src.start(0, Math.random() * 3);
      lfo.start();
    }
    // Roar: the crowd getting excited. Silent until a long rally or a big point.
    this.roar = ctx.createGain();
    this.roar.gain.value = 0;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 850;
    bp.Q.value = 0.55;
    const pk = ctx.createBiquadFilter();
    pk.type = 'peaking';
    pk.frequency.value = 2600;
    pk.Q.value = 0.8;
    pk.gain.value = 6;
    src.connect(bp).connect(pk).connect(this.roar);
    this._out(this.roar, bus, 0.6);
    src.start(0, Math.random() * 3);
  }

  _clap(t, vol) {
    this._noiseHit(t, rnd(0.018, 0.03), vol, 'bandpass', rnd(900, 2000), 1.3, this.buses.crowd, 0.5, 0, 0.001);
  }

  _whistle(t, vol) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const f0 = rnd(1900, 2400);
    o.frequency.setValueAtTime(f0, t);
    o.frequency.linearRampToValueAtTime(f0 * 1.3, t + 0.12);
    o.frequency.linearRampToValueAtTime(f0 * 1.15, t + 0.4);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.04);
    g.gain.setValueAtTime(vol, t + 0.32);
    g.gain.linearRampToValueAtTime(0.0001, t + 0.45);
    o.connect(g);
    this._out(g, this.buses.crowd, 0.6);
    o.start(t);
    o.stop(t + 0.5);
  }

  // The roar jumps up to `peak`, then settles back to the rally level.
  _swell(peak, rise, fall) {
    const t = this.ctx.currentTime;
    const g = this.roar.gain;
    g.cancelScheduledValues(t);
    g.setValueAtTime(g.value, t);
    g.linearRampToValueAtTime(peak, t + rise);
    g.setTargetAtTime(this.roarBase, t + rise + 0.3, fall / 3);
  }

  cheer(amount) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    this._swell(0.08 + 0.4 * amount, 0.25, 2.6);
    const n = Math.round(10 + 34 * amount);
    for (let i = 0; i < n; i++) this._clap(t + 0.12 + Math.random() * 2.2 * (0.6 + amount * 0.5), rnd(0.02, 0.05) * (0.6 + amount));
    const w = amount > 0.45 ? 1 + Math.floor(Math.random() * (1 + amount * 2.5)) : 0;
    for (let i = 0; i < w; i++) this._whistle(t + rnd(0.15, 1.2), rnd(0.025, 0.05));
  }

  applause(amount) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const n = Math.round(8 + 24 * amount);
    for (let i = 0; i < n; i++) this._clap(t + 0.3 + Math.random() * 1.8, rnd(0.015, 0.04) * (0.6 + amount));
  }

  // A disappointed "aww": a falling vocal formant.
  aww(amount) {
    if (!this.ok) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    for (const [f0, f1, q, g0] of [[620, 380, 3, 1], [1250, 900, 4, 0.45]]) {
      const src = ctx.createBufferSource();
      src.buffer = this.noiseBuf;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.Q.value = q;
      bp.frequency.setValueAtTime(f0, t);
      bp.frequency.linearRampToValueAtTime(f0 * 1.15, t + 0.25);
      bp.frequency.exponentialRampToValueAtTime(f1, t + 1.1);
      const g = ctx.createGain();
      const peak = (0.12 + 0.3 * amount) * g0;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(peak, t + 0.22);
      g.gain.linearRampToValueAtTime(peak * 0.7, t + 0.6);
      g.gain.linearRampToValueAtTime(0.0001, t + 1.25);
      src.connect(bp).connect(g);
      this._out(g, this.buses.crowd, 0.6);
      src.start(t, Math.random() * 1.5);
      src.stop(t + 1.3);
    }
  }

  // Called on every shot of a match rally. From the 10th shot on the crowd
  // leans in: the roar climbs, claps ripple round and the odd whistle goes up.
  rally(hits) {
    if (!this.ok || hits < 10) return;
    const t = this.ctx.currentTime;
    const k = clamp01((hits - 9) / 14);
    this.roarBase = 0.03 + 0.22 * k;
    const g = this.roar.gain;
    g.cancelScheduledValues(t);
    g.setValueAtTime(g.value, t);
    g.setTargetAtTime(this.roarBase, t, 0.35);
    const n = 2 + Math.round(k * 9);
    for (let i = 0; i < n; i++) this._clap(t + Math.random() * 0.45, rnd(0.02, 0.05));
    if (hits >= 14 && Math.random() < 0.25 + 0.3 * k) this._whistle(t + Math.random() * 0.3, 0.025 + 0.03 * k);
  }

  // Umpire calls for the big moments, using the browser's speech engine.
  say(text) {
    if (!this.announcer || this.muted || typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      const synth = window.speechSynthesis;
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 1.05;
      u.pitch = 0.9;
      u.volume = Math.min(1, this.volumes.master * Math.max(0.3, this.volumes.sfx));
      const v = this._voice();
      if (v) u.voice = v;
      synth.cancel();
      synth.speak(u);
    } catch (e) {
      /* speech unavailable */
    }
  }

  _voice() {
    if (this._v !== undefined && this._v) return this._v;
    const voices = window.speechSynthesis.getVoices() || [];
    const en = voices.filter((v) => /^en/i.test(v.lang));
    const pref = ['Google UK English Male', 'Daniel', 'Microsoft Guy', 'Microsoft David', 'Alex', 'Google US English'];
    this._v = pref.map((n) => en.find((v) => v.name.includes(n))).find(Boolean) || en[0] || null;
    return this._v;
  }

  // ------------------------------------------------------------------ music
  _buildMusic() {
    const ctx = this.ctx;
    const bus = this.buses.music;
    // Pads, bass and arpeggio "pump" with the kick drum (sidechain feel).
    this.pump = ctx.createGain();
    this.pump.connect(bus.input);
    const ps = ctx.createGain();
    ps.gain.value = 0.35;
    this.pump.connect(ps).connect(bus.send);
    // Dotted-eighth echo on the arpeggio and lead.
    this.delay = ctx.createDelay(1.5);
    this.delay.delayTime.value = 0.4;
    const fb = ctx.createGain();
    fb.gain.value = 0.32;
    const dlp = ctx.createBiquadFilter();
    dlp.type = 'lowpass';
    dlp.frequency.value = 2600;
    this.delayIn = ctx.createGain();
    this.delayIn.gain.value = 0.45;
    this.delayIn.connect(this.delay);
    this.delay.connect(dlp).connect(fb).connect(this.delay);
    dlp.connect(bus.input);
  }

  setMusic(mode) {
    this.musicMode = mode;
  }

  update(intensity) {
    this.intensity = intensity;
    if (!this.ok) return;
    const ctx = this.ctx;
    // The murmur breathes with the rally.
    const level = 0.05 + (this.musicMode === 'game' ? intensity * 0.05 : 0);
    if (Math.abs(level - this.murmurLevel) > 0.004) {
      this.murmurLevel = level;
      this.murmur.gain.setTargetAtTime(level, ctx.currentTime, 0.6);
    }
    if (this.musicMode === 'off') return;
    const menu = this.musicMode === 'menu';
    const bpm = menu ? 96 : 108 + intensity * 14;
    const sd = 60 / bpm / 4;
    if (Math.abs(bpm - this.bpm) > 0.5) {
      this.bpm = bpm;
      this.delay.delayTime.setTargetAtTime(sd * 3, ctx.currentTime, 0.2);
    }
    if (this.nextTime < ctx.currentTime - 0.2) this.nextTime = ctx.currentTime + 0.05;
    while (this.nextTime < ctx.currentTime + 0.12) {
      this._scheduleStep(this.step, this.nextTime, sd);
      this.nextTime += sd;
      this.step = (this.step + 1) % (LOOP * 2);
    }
  }

  _scheduleStep(step, t, sd) {
    const s16 = step % 16;
    const barIdx = Math.floor(step / 16) % BARS.length;
    const bar = BARS[barIdx];
    const menu = this.musicMode === 'menu';
    const I = menu ? 0 : this.intensity;
    if (!menu) {
      // Drums: four on the floor, snare on 2 and 4, offbeat hats.
      if (s16 % 4 === 0) {
        this._kick(t);
        this.pump.gain.setValueAtTime(0.45, t);
        this.pump.gain.linearRampToValueAtTime(1, t + sd * 2.5);
      }
      if (s16 === 4 || s16 === 12) this._snare(t, 0.15 + I * 0.1);
      if (s16 % 4 === 2) this._hat(t, 0.07, false);
      else if (I > 0.7 && s16 % 2 === 1) this._hat(t, 0.03, false);
      if (s16 === 14 && barIdx % 2 === 1) this._hat(t, 0.05, true);
      if (barIdx === 7 && s16 >= 12 && I > 0.3) this._snare(t, 0.06 + (s16 - 12) * 0.03);
    }
    // Bass: driving root-octave eighths in a match, slow quarters in the menu.
    if (menu ? s16 % 4 === 0 : s16 % 2 === 0) {
      const n = bar.bass + (!menu && s16 % 4 === 2 ? 12 : 0);
      this._bass(t, NOTE(n), sd * (menu ? 3.5 : 1.8), menu ? 0.1 : 0.15, 380 + I * 900);
    }
    if (s16 === 0) this._pad(t, bar.chord, sd * 16, (menu ? 900 : 750) + I * 1400);
    // Arpeggio: eighths in the menu, sixteenths once a rally gets going.
    if (menu ? s16 % 2 === 0 : I > 0.25) {
      const k = ARP[(menu ? s16 / 2 : s16) % 8];
      const n = (k === 3 ? bar.chord[0] + 12 : bar.chord[k]) + 12;
      this._arp(t, NOTE(n), sd * 0.85, menu ? 0.03 : 0.02 + 0.018 * I, menu);
    }
    // Lead hook: every other time round in the menu, in long rallies in a match.
    if (menu ? step >= LOOP : I > 0.55) {
      const note = LEAD_AT.get(barIdx * 16 + s16);
      if (note) this._lead(t, NOTE(note.m), sd * note.len, menu ? 0.035 : 0.05, menu);
    }
  }

  _kick(t) {
    const m = this.buses.music;
    this._tone('sine', 150, 42, t, 0.17, 0.55, m, 0, 0.001);
    this._noiseHit(t, 0.008, 0.07, 'highpass', 3000, 0.7, m);
  }

  _snare(t, vol) {
    const m = this.buses.music;
    this._noiseHit(t, 0.13, vol, 'bandpass', 1900, 0.8, m, 0.35);
    this._tone('triangle', 210, 160, t, 0.08, vol * 0.6, m);
  }

  _hat(t, vol, open) {
    this._noiseHit(t, open ? 0.14 : 0.03, vol, 'highpass', 8200, 0.7, this.buses.music);
  }

  _bass(t, f, len, vol, cutoff) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = 'sawtooth';
    o.frequency.value = f;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.Q.value = 5;
    lp.frequency.setValueAtTime(cutoff, t);
    lp.frequency.exponentialRampToValueAtTime(140, t + len);
    const g = ctx.createGain();
    this._env(g, t, 0.004, vol, len);
    o.connect(lp).connect(g).connect(this.pump);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  _pad(t, chord, len, cutoff) {
    const ctx = this.ctx;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = cutoff;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.03, t + len * 0.3);
    g.gain.linearRampToValueAtTime(0.022, t + len * 0.8);
    g.gain.linearRampToValueAtTime(0.0001, t + len * 1.02);
    lp.connect(g).connect(this.pump);
    for (const n of chord) {
      for (const det of [-7, 7]) {
        const o = ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = NOTE(n);
        o.detune.value = det + (Math.random() - 0.5) * 4;
        o.connect(lp);
        o.start(t);
        o.stop(t + len * 1.02 + 0.05);
      }
    }
  }

  _arp(t, f, len, vol, soft) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = soft ? 'triangle' : 'square';
    o.frequency.value = f;
    const g = ctx.createGain();
    this._env(g, t, 0.003, vol, len);
    o.connect(g);
    g.connect(this.pump);
    g.connect(this.delayIn);
    o.start(t);
    o.stop(t + len + 0.05);
  }

  _lead(t, f, len, vol, soft) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = soft ? 'triangle' : 'sawtooth';
    o.frequency.value = f;
    const vib = ctx.createOscillator();
    vib.frequency.value = 5.2;
    const vd = ctx.createGain();
    vd.gain.value = f * 0.004;
    vib.connect(vd).connect(o.frequency);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = soft ? 2400 : 3200;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.012);
    g.gain.setTargetAtTime(vol * 0.7, t + 0.012, 0.15);
    g.gain.setTargetAtTime(0.0001, t + len, 0.06);
    o.connect(lp).connect(g);
    this._out(g, this.buses.music, 0.5);
    g.connect(this.delayIn);
    o.start(t);
    vib.start(t);
    o.stop(t + len + 0.4);
    vib.stop(t + len + 0.4);
  }
}
