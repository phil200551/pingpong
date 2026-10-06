// All sound is synthesised live with the Web Audio API: no asset files needed.

const NOTE = (n) => 440 * Math.pow(2, (n - 69) / 12);

// Synthwave progression (A minor): Am - F - C - G, as MIDI roots.
const CHORDS = [
  [57, 60, 64], // Am
  [53, 57, 60], // F
  [48, 52, 55], // C
  [55, 59, 62], // G
];

export class Audio {
  constructor() {
    this.ctx = null;
    this.volumes = { master: 0.8, music: 0.5, sfx: 0.9 };
    this.intensity = 0;
    this.musicMode = 'menu'; // 'menu' | 'game' | 'off'
    this.step = 0;
    this.nextTime = 0;
    this.crowdLevel = 0.06;
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

    this.comp = ctx.createDynamicsCompressor();
    this.comp.threshold.value = -14;
    this.comp.ratio.value = 4;
    this.comp.attack.value = 0.003;
    this.comp.release.value = 0.2;
    this.master = ctx.createGain();
    this.master.connect(this.comp);
    this.comp.connect(ctx.destination);

    this.sfx = ctx.createGain();
    this.sfx.connect(this.master);
    this.music = ctx.createGain();
    this.music.connect(this.master);

    // Arena reverb send
    this.reverb = ctx.createConvolver();
    this.reverb.buffer = this._impulse(2.2, 2.6);
    this.reverbSend = ctx.createGain();
    this.reverbSend.gain.value = 0.35;
    this.reverbSend.connect(this.reverb);
    this.reverb.connect(this.master);

    this.noiseBuf = this._noise(2);

    // Crowd murmur: looping noise through a vocal-ish band, slowly wobbling.
    const crowd = ctx.createBufferSource();
    crowd.buffer = this._noise(4);
    crowd.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 900;
    bp.Q.value = 0.6;
    const bp2 = ctx.createBiquadFilter();
    bp2.type = 'lowpass';
    bp2.frequency.value = 2400;
    this.crowdGain = ctx.createGain();
    this.crowdGain.gain.value = this.crowdLevel;
    crowd.connect(bp).connect(bp2).connect(this.crowdGain).connect(this.sfx);
    this.crowdGain.connect(this.reverbSend);
    crowd.start();

    this.applyVolumes();
    this.nextTime = ctx.currentTime + 0.1;
  }

  setVolumes(v) {
    Object.assign(this.volumes, v);
    this.applyVolumes();
  }

  applyVolumes() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.setTargetAtTime(this.volumes.master, t, 0.03);
    this.sfx.gain.setTargetAtTime(this.volumes.sfx, t, 0.03);
    this.music.gain.setTargetAtTime(this.volumes.music * 0.55, t, 0.03);
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
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }

  _tone(type, f0, f1, t, dur, vol, dest, wet = 0) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    this._env(g, t, 0.002, vol, dur);
    o.connect(g).connect(dest || this.sfx);
    if (wet) {
      const s = ctx.createGain();
      s.gain.value = wet;
      g.connect(s).connect(this.reverbSend);
    }
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  _noiseHit(t, dur, vol, type, freq, q, dest, wet = 0, sweepTo = 0) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (sweepTo) f.frequency.exponentialRampToValueAtTime(sweepTo, t + dur);
    f.Q.value = q;
    const g = ctx.createGain();
    this._env(g, t, 0.002, vol, dur);
    src.connect(f).connect(g).connect(dest || this.sfx);
    if (wet) {
      const s = ctx.createGain();
      s.gain.value = wet;
      g.connect(s).connect(this.reverbSend);
    }
    src.start(t, Math.random() * 1.5);
    src.stop(t + dur + 0.05);
  }

  get ok() {
    return !!this.ctx && this.ctx.state === 'running';
  }

  // power 0..1, quality 0..1; far = hit by the opponent (quieter)
  hit(power, quality, far = false, smash = false) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const v = far ? 0.45 : 1;
    const pitch = 1 + (Math.random() - 0.5) * 0.08;
    this._noiseHit(t, 0.03, 0.5 * v, 'bandpass', 3200 * pitch, 1.2, null, 0.4);
    this._tone('sine', 1500 * pitch, 900 * pitch, t, 0.07, 0.45 * v, null, 0.5);
    this._tone('triangle', 720 * pitch, 520, t, 0.09, 0.25 * v, null, 0.3);
    if (power > 0.55 || smash) {
      const p = smash ? 1 : (power - 0.55) / 0.45;
      this._tone('sine', 150, 42, t, 0.22, 0.7 * p * v);
      this._noiseHit(t, 0.25, 0.25 * p * v, 'bandpass', 5000, 0.8, null, 0.6, 400);
      const o = this.ctx.createOscillator();
      const f = this.ctx.createBiquadFilter();
      const g = this.ctx.createGain();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(smash ? 1800 : 1100, t);
      o.frequency.exponentialRampToValueAtTime(80, t + 0.35);
      f.type = 'lowpass';
      f.frequency.setValueAtTime(5000, t);
      f.frequency.exponentialRampToValueAtTime(300, t + 0.35);
      this._env(g, t, 0.003, 0.22 * p * v, 0.35);
      o.connect(f).connect(g).connect(this.sfx);
      const s = this.ctx.createGain();
      s.gain.value = 0.5;
      g.connect(s).connect(this.reverbSend);
      o.start(t);
      o.stop(t + 0.45);
    }
    if (quality > 0.88 && !far) {
      const base = 76 + Math.floor(this.intensity * 5);
      [0, 4, 7, 12].forEach((n, i) => {
        this._tone('sine', NOTE(base + n), NOTE(base + n), t + 0.03 + i * 0.035, 0.18, 0.12, null, 0.8);
      });
    }
  }

  bounce(speed, far) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const v = Math.min(1, 0.35 + speed / 10) * (far ? 0.6 : 1);
    const p = 1 + (Math.random() - 0.5) * 0.1;
    this._tone('sine', 1050 * p, 720 * p, t, 0.05, 0.35 * v, null, 0.35);
    this._noiseHit(t, 0.02, 0.2 * v, 'bandpass', 2500, 1.5, null, 0.2);
  }

  net() {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    this._noiseHit(t, 0.12, 0.5, 'lowpass', 900, 0.7, null, 0.3);
    this._tone('sine', 220, 140, t, 0.1, 0.25);
  }

  floor() {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    this._tone('sine', 620, 420, t, 0.06, 0.18, null, 0.5);
  }

  whoosh(strength = 1) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    this._noiseHit(t, 0.16, 0.16 * strength, 'bandpass', 500, 1.4, null, 0.1, 2600);
  }

  toss() {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    this._tone('sine', 500, 900, t, 0.08, 0.06);
  }

  ui(kind = 'move') {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    if (kind === 'select') {
      this._tone('square', NOTE(81), NOTE(81), t, 0.06, 0.06);
      this._tone('square', NOTE(88), NOTE(88), t + 0.06, 0.1, 0.06, null, 0.4);
    } else {
      this._tone('triangle', NOTE(88), NOTE(86), t, 0.04, 0.07);
    }
  }

  point(won, big) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const seq = won ? [0, 4, 7, 12, 16] : [7, 3, 0, -5];
    const base = won ? 72 : 64;
    seq.forEach((n, i) => {
      const f = NOTE(base + n);
      this._tone(won ? 'square' : 'sawtooth', f, f, t + i * 0.075, 0.16, won ? 0.07 : 0.05, null, 0.6);
    });
    this.cheer(won ? (big ? 1 : 0.6) : (big ? 0.6 : 0.25));
  }

  cheer(amount) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const g = this.crowdGain.gain;
    g.cancelScheduledValues(t);
    g.setValueAtTime(g.value, t);
    g.linearRampToValueAtTime(this.crowdLevel + 0.55 * amount, t + 0.25);
    g.linearRampToValueAtTime(this.crowdLevel + 0.25 * amount, t + 1.2);
    g.linearRampToValueAtTime(this.crowdLevel, t + 3.2);
    // a few claps
    if (amount > 0.4) {
      for (let i = 0; i < 26 * amount; i++) {
        this._noiseHit(t + 0.15 + Math.random() * 1.8, 0.03, 0.05 + Math.random() * 0.05,
          'bandpass', 1400 + Math.random() * 1400, 1.2, null, 0.6);
      }
    }
  }

  ooh() {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const f = this.ctx.createBiquadFilter();
    const g = this.ctx.createGain();
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    f.type = 'bandpass';
    f.Q.value = 3;
    f.frequency.setValueAtTime(500, t);
    f.frequency.linearRampToValueAtTime(800, t + 0.3);
    f.frequency.linearRampToValueAtTime(420, t + 1.0);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.35, t + 0.25);
    g.gain.linearRampToValueAtTime(0.0001, t + 1.1);
    src.connect(f).connect(g).connect(this.sfx);
    g.connect(this.reverbSend);
    src.start(t);
    src.stop(t + 1.2);
  }

  fanfare(won) {
    if (!this.ok) return;
    const t = this.ctx.currentTime;
    const seq = won ? [0, 4, 7, 12, 7, 12, 16, 19, 24] : [12, 7, 3, 0, -5, -12];
    seq.forEach((n, i) => {
      const f = NOTE(64 + n);
      this._tone('square', f, f, t + i * 0.11, 0.24, 0.07, null, 0.7);
      this._tone('sawtooth', f / 2, f / 2, t + i * 0.11, 0.24, 0.04);
    });
    if (won) this.cheer(1.2);
  }

  // Umpire calls for the big moments, using the browser's speech engine.
  say(text) {
    if (!this.announcer || typeof window === 'undefined' || !window.speechSynthesis) return;
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
  setMusic(mode) {
    this.musicMode = mode;
  }

  update(intensity) {
    this.intensity = intensity;
    if (!this.ok || this.musicMode === 'off') return;
    const ctx = this.ctx;
    const bpm = this.musicMode === 'menu' ? 100 : 112 + intensity * 22;
    const stepDur = 60 / bpm / 4;
    if (this.nextTime < ctx.currentTime - 0.2) this.nextTime = ctx.currentTime + 0.05;
    while (this.nextTime < ctx.currentTime + 0.12) {
      this._scheduleStep(this.step, this.nextTime, stepDur);
      this.nextTime += stepDur;
      this.step = (this.step + 1) % 256;
    }
  }

  _scheduleStep(step, t, sd) {
    const s16 = step % 16;
    const bar = Math.floor(step / 16) % 4;
    const chord = CHORDS[bar];
    const menu = this.musicMode === 'menu';
    const I = menu ? 0.15 : this.intensity;
    const m = this.music;

    // Kick
    if (!menu && s16 % 4 === 0) {
      this._tone('sine', 140, 40, t, 0.18, 0.55, m);
    }
    // Snare on 2 & 4
    if (!menu && I > 0.12 && (s16 === 4 || s16 === 12)) {
      this._noiseHit(t, 0.12, 0.22, 'bandpass', 1800, 0.8, m, 0.3);
      this._tone('triangle', 220, 160, t, 0.08, 0.15, m);
    }
    // Hats
    if (!menu && (s16 % 4 === 2 || (I > 0.45 && s16 % 2 === 1))) {
      this._noiseHit(t, 0.03, s16 % 4 === 2 ? 0.1 : 0.05, 'highpass', 8000, 0.7, m);
    }
    // Bass: offbeat 8ths, sawtooth through lowpass
    if (s16 % 2 === 0 && (!menu || s16 % 4 === 0)) {
      const root = chord[0] - 24;
      const f = NOTE(root + (s16 % 8 === 6 ? 12 : 0));
      const ctx = this.ctx;
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = f;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.setValueAtTime(300 + I * 900, t);
      lp.frequency.exponentialRampToValueAtTime(140, t + sd * 1.8);
      lp.Q.value = 6;
      const g = ctx.createGain();
      this._env(g, t, 0.004, menu ? 0.12 : 0.2, sd * 1.8);
      o.connect(lp).connect(g).connect(m);
      o.start(t);
      o.stop(t + sd * 2 + 0.05);
    }
    // Pad at start of each bar
    if (s16 === 0) {
      chord.forEach((n) => {
        const ctx = this.ctx;
        const o = ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = NOTE(n);
        o.detune.value = (Math.random() - 0.5) * 14;
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = 900 + I * 1200;
        const g = ctx.createGain();
        const len = sd * 16;
        g.gain.setValueAtTime(0.0001, t);
        g.gain.linearRampToValueAtTime(0.035, t + len * 0.3);
        g.gain.linearRampToValueAtTime(0.0001, t + len);
        o.connect(lp).connect(g).connect(m);
        const s = ctx.createGain();
        s.gain.value = 0.6;
        g.connect(s).connect(this.reverbSend);
        o.start(t);
        o.stop(t + len + 0.05);
      });
    }
    // Arpeggio layer comes in as the rally heats up
    if (I > 0.3 || menu) {
      if (menu ? s16 % 2 === 0 : true) {
        const pattern = [0, 1, 2, 1, 0, 2, 1, 2];
        const n = chord[pattern[s16 % 8]] + 12 + (I > 0.75 && s16 >= 8 ? 12 : 0);
        this._tone(menu ? 'triangle' : 'square', NOTE(n), NOTE(n), t, sd * 0.9,
          menu ? 0.04 : 0.025 + 0.02 * I, m, 0.5);
      }
    }
  }
}
