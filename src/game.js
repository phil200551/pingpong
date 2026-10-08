import * as THREE from 'three';
import {
  TABLE_H, HALF_L, HALF_W, NET_TOP, STRIKE_T, PLAYER, AI, DIFFICULTIES, OPPONENTS, SPIN_REF,
  otherSide, sideSign,
} from './config.js';
import { makeBall, stepBall, solveShot, topspinOf, EV_TABLE, EV_NET, EV_FLOOR } from './physics.js';
import { Match } from './match.js';
import { AIController, FORM } from './ai.js';
import { HumanController } from './player.js';
import { makePaddle, makeOpponent, makeArm, makeBallMachine, paintOpponent, styleOpponent, ghostOpponent, setViewLayer, COLORS, glow } from './scene.js';
import { Sparks, Trail, Shockwaves, Shake } from './effects.js';
import { Recorder } from './replay.js';
import { BallMachine } from './practice.js';
import { QUALITY } from './settings.js';
import { clamp, damp, gauss } from './util.js';

const SUBSTEP = 1 / 600;
// Watch mode: mirror matches paint the two sides red and blue.
const MIRROR = [
  { tag: 'Red', color: '#ff3355', hex: 0xff3355 },
  { tag: 'Blue', color: '#3d8bff', hex: 0x3d8bff },
];
// Spectator cameras, cycled with C.
export const WATCH_CAMS = [
  ['side', 'Side view'],
  ['near', 'Behind bot 1'],
  ['far', 'Behind bot 2'],
  ['top', 'Overhead'],
];
const CAM_POS = new THREE.Vector3();
const CAM_LOOK = new THREE.Vector3();
// Stands in for the UI and audio while a match is skipped to the result.
const SILENT = new Proxy({}, { get: () => () => {} });
const TMP_COLOR = new THREE.Color();
const TMP_COLOR2 = new THREE.Color();
const TMP_V = new THREE.Vector3();
const TMP_Q = new THREE.Quaternion();
const SPIN_AXIS = new THREE.Vector3();
const BAND_N = new THREE.Vector3();
const AXIS_Y = new THREE.Vector3(0, 1, 0);
const AXIS_X = new THREE.Vector3(1, 0, 0);
const AXIS_Z = new THREE.Vector3(0, 0, 1);
// Spin colours: topspin warm, backspin cool, little spin a pale grey.
export const SPIN_COLORS = {
  top: new THREE.Color(0xff6a1a),
  back: new THREE.Color(0x2f86ff),
  none: new THREE.Color(0xd8d8e0),
};
const INTENSITY_COLORS = [
  new THREE.Color(0xffffff),
  new THREE.Color(COLORS.cyan),
  new THREE.Color(COLORS.magenta),
  new THREE.Color(COLORS.yellow),
  new THREE.Color(COLORS.orange),
];

export function intensityColor(t, out) {
  const n = INTENSITY_COLORS.length - 1;
  const f = clamp(t, 0, 1) * n;
  const i = Math.min(n - 1, Math.floor(f));
  return out.copy(INTENSITY_COLORS[i]).lerp(INTENSITY_COLORS[i + 1], f - i);
}

export class Game {
  constructor(world, audio, ui, input, settings) {
    this.world = world;
    this.audio = audio;
    this.ui = ui;
    this.input = input;
    this.settings = settings;
    this.ball = makeBall();
    this.time = 0;
    this.timeScale = 1;
    this.slowTimer = 0;
    this.hitStop = 0;       // seconds of freeze left after a big hit
    this.replay = null;     // slow-motion playback of a game-winning point
    this.replayQueued = null;
    this.intensity = 0;
    this.cheer = 0;
    this.mode = 'demo'; // 'demo' | 'match' | 'practice'
    this.impact = null; // anime hit-frame overlay, set by main.js (absent in headless sims)
    this.state = 'play'; // 'play' | 'over'
    this.paused = false;
    this.rally = this.freshRally(PLAYER);

    const scene = world.scene;
    this.playerPaddle = makePaddle(0xd81b3c); // plain red rubber, no stripe
    setViewLayer(this.playerPaddle);
    this.aiPaddle = makePaddle(0x16161e, COLORS.magenta);
    scene.add(this.playerPaddle, this.aiPaddle);
    this.aiBody = makeOpponent(COLORS.magenta);
    this.demoBody = makeOpponent(COLORS.cyan);
    scene.add(this.aiBody, this.demoBody);

    const q = QUALITY[settings.quality];
    this.sparks = new Sparks(scene, Math.round(900 * q.particles));
    this.trail = new Trail(scene, q.trail * 2);
    this.waves = new Shockwaves(scene);
    this.shake = new Shake();

    this.playerArm = makeArm();
    setViewLayer(this.playerArm);
    this.playerArm.visible = false;
    scene.add(this.playerArm);
    this.human = new HumanController(this, input, this.playerPaddle, this.playerArm);
    this.profile = DIFFICULTIES[settings.difficulty] || DIFFICULTIES[0];
    this.aiCtl = new AIController(this, AI, this.profile, this.aiPaddle, this.aiBody);
    this.demoCtl = new AIController(this, PLAYER, DIFFICULTIES[3], this.playerPaddle, this.demoBody);
    // Watch mode: bot 1 plays from your end with its own ringed paddle.
    this.nearPaddle = makePaddle(0x16161e, COLORS.cyan);
    this.nearPaddle.visible = false;
    scene.add(this.nearPaddle);
    this.nearCtl = new AIController(this, PLAYER, DIFFICULTIES[0], this.nearPaddle, this.demoBody);
    this.sides = null;     // watch mode: name and colour of each side
    this.watchCam = 0;     // index into WATCH_CAMS
    this.fast = false;     // watch mode "skip to result": no visuals or sound
    // Practice: a ball machine takes the opponent's place.
    this.machineMesh = makeBallMachine();
    this.machineMesh.visible = false;
    scene.add(this.machineMesh);
    this.machine = new BallMachine(this, this.machineMesh);
    this.controllers = { [PLAYER]: this.demoCtl, [AI]: this.aiCtl };
    this.stats = this.freshStats();
    this.demoAngle = 0;
    // A rolling recording of the last moments of play, for the slow-motion
    // replay of game-winning points. (Headless test worlds have no meshes.)
    this.recorder = world.ball ? this.makeRecorder() : null;
    this.startDemo();
  }

  makeRecorder() {
    const w = this.world;
    const cam = w.camera;
    const ud = this.aiBody.userData;
    const nd = this.demoBody.userData;
    const objects = [
      cam, w.ball, w.ballHalo, w.ballLight, w.shadow, w.spinBand,
      this.playerPaddle, this.playerArm, this.aiPaddle,
      this.aiBody, ud.torso, ud.head, ud.legL, ud.legR, ud.arm, ud.halo,
      // Bot 1 in watch mode
      this.nearPaddle, this.demoBody, nd.torso, nd.head, nd.legL, nd.legR, nd.arm, nd.halo,
    ];
    const band = w.spinBandColor;
    const extras = [
      { get: () => cam.fov, set: (v) => { cam.fov = v; cam.updateProjectionMatrix(); } },
      { get: () => w.shadow.material.opacity, set: (v) => { w.shadow.material.opacity = v; } },
      { get: () => band.r, set: (v) => { band.r = v; } },
      { get: () => band.g, set: (v) => { band.g = v; } },
      { get: () => band.b, set: (v) => { band.b = v; } },
    ];
    return new Recorder(objects, extras, 2.5);
  }

  freshRally(server) {
    return {
      phase: 'serve',
      server,
      lastHitter: null,
      isServe: false,
      serveOwn: 0,
      netTouch: false,
      bounces: { [PLAYER]: 0, [AI]: 0 },
      hits: 0,
      deadTimer: 0,
      lastHitTime: 0,
      landTime: -1,   // when the last shot bounced on the receiver's side
      netTime: -1,    // when the ball last touched the net
      tossTime: 0,
      serveReadyAt: 0,
    };
  }

  freshStats() {
    return {
      longest: 0, perfects: 0, smashes: 0, smashesLanded: 0, hits: 0, fastest: 0,
      won: 0, lost: 0, aces: 0, servePts: 0, serveWon: 0,
    };
  }

  rebuildEffects() {
    const scene = this.world.scene;
    const q = QUALITY[this.settings.quality];
    for (const fx of [this.sparks, this.trail]) {
      scene.remove(fx.points);
      fx.points.geometry.dispose();
      fx.points.material.dispose();
    }
    this.sparks = new Sparks(scene, Math.round(900 * q.particles));
    this.trail = new Trail(scene, q.trail * 2);
  }

  // ------------------------------------------------------------- lifecycle
  resetMoment() {
    this.hitStop = 0;
    this.slowTimer = 0;
    this.timeScale = 1;
    this.shake.trauma = 0;
    this.replay = null;
    this.replayQueued = null;
    if (this.recorder) this.recorder.clear();
    this.ui.setReplay(false);
    this.audio.setMuffle(false);
  }

  // The opponent (not the ball machine) on the far side.
  useOpponent() {
    this.controllers[AI] = this.aiCtl;
    this.aiCtl.vary = false;
    this.aiBody.visible = true;
    this.aiPaddle.visible = true;
    this.machineMesh.visible = false;
    this.playerPaddle.visible = true;
    this.nearPaddle.visible = false;
    this.setFast(false);
    this.setGhost(null);
    this.ui.setPracticeHUD(false);
    this.ui.setWatchHUD(false);
  }

  // The bot drawn see-through for a behind-the-bot camera (null for none).
  setGhost(body) {
    if (this._ghost === body) return;
    if (this._ghost) ghostOpponent(this._ghost, false);
    if (body) ghostOpponent(body, true);
    this._ghost = body || null;
  }

  startDemo() {
    this.mode = 'demo';
    this.state = 'play';
    this.paused = false;
    this.resetMoment();
    this.useOpponent();
    const pool = [DIFFICULTIES[2], DIFFICULTIES[3], DIFFICULTIES[4]];
    this.demoCtl.setProfile(pool[(Math.random() * 3) | 0]);
    this.aiCtl.setProfile(pool[(Math.random() * 3) | 0]);
    this.setOpponentLook(this.aiCtl.p);
    styleOpponent(this.demoBody, this.demoCtl.p.look || {});
    paintOpponent(this.demoBody, this.demoCtl.p.hex);
    this.controllers[PLAYER] = this.demoCtl;
    this.demoBody.visible = true;
    this.playerArm.visible = false;
    this.match = new Match(99, Math.random() < 0.5 ? PLAYER : AI);
    this.aiCtl.reset();
    this.demoCtl.reset();
    this.audio.setMusic('menu');
    this.newPoint();
  }

  startMatch(diffIndex, length) {
    this.mode = 'match';
    this.state = 'play';
    this.paused = false;
    this.resetMoment();
    this.useOpponent();
    this.oppIndex = diffIndex;
    this.profile = DIFFICULTIES[diffIndex];
    this.aiCtl.setProfile(this.profile);
    this.setOpponentLook(this.profile);
    this.controllers[PLAYER] = this.human;
    this.demoBody.visible = false;
    this.playerArm.visible = true;
    this.human.reset();
    this.aiCtl.reset();
    this.match = new Match(length, Math.random() < 0.5 ? PLAYER : AI);
    this.stats = this.freshStats();
    this.intensity = 0;
    this.sparks.clear();
    this.audio.setMusic('game');
    this.ui.updateHUD(this);
    this.drawScreen();
    this.newPoint();
    this.ui.banner(`${this.profile.bot}`, `${this.profile.name} · ${this.matchLabel()}`, 'intro', 2.2);
    this.rally.serveReadyAt = this.time + 1.6;
  }

  // Practice against the ball machine: no score, every ball graded.
  startPractice(opts) {
    this.mode = 'practice';
    this.state = 'play';
    this.paused = false;
    this.resetMoment();
    this.controllers[PLAYER] = this.human;
    this.controllers[AI] = this.machine;
    this.aiBody.visible = false;
    this.aiPaddle.visible = false;
    this.demoBody.visible = false;
    this.nearPaddle.visible = false;
    this.playerPaddle.visible = true;
    this.setFast(false);
    this.setGhost(null);
    this.ui.setWatchHUD(false);
    this.machineMesh.visible = true;
    if (this.world.theme) this.machineMesh.userData.glowBase.setHex(this.world.theme.c2);
    this.playerArm.visible = true;
    this.human.reset();
    this.machine.setOptions(opts);
    this.machine.resetCounts();
    this.machine.resetSession();
    this.machine.reset();
    this.intensity = 0;
    this.sparks.clear();
    this.rally = this.freshRally(AI);
    this.trail.reset();
    this.audio.setMusic('game');
    this.ui.setPracticeHUD(true);
    this.ui.updatePractice(this.machine);
    this.ui.hint('');
    this.ui.banner('PRACTICE', 'The machine feeds, you work on your timing', 'intro', 1.8);
  }

  // Watch & Bet: two bots play each other while you watch. Bot 1 (a) plays
  // from the near end, bot 2 (b) from the far end. Any two bots, including
  // the same one twice (then painted red and blue).
  startWatch(a, b, length) {
    this.mode = 'watch';
    this.state = 'play';
    this.paused = false;
    this.resetMoment();
    this.useOpponent();
    const A = OPPONENTS[a], B = OPPONENTS[b];
    const mirror = a === b;
    const side = (o, k) => ({
      index: k ? b : a,
      bot: o.bot,
      name: mirror ? `${o.bot} (${MIRROR[k].tag})` : o.bot,
      color: mirror ? MIRROR[k].color : o.color,
      hex: mirror ? MIRROR[k].hex : o.hex,
      profile: o,
    });
    this.sides = { [PLAYER]: side(A, 0), [AI]: side(B, 1) };
    this.watchLength = length;
    this.timeScale = 1;
    this._camInit = false;
    this.nearCtl.setProfile(A);
    this.aiCtl.setProfile(B);
    this.nearCtl.vary = true;
    this.aiCtl.vary = true;
    this.profile = B; // the far bot, for anything that asks for "the opponent"
    for (const [s, body, paddle] of [[PLAYER, this.demoBody, this.nearPaddle], [AI, this.aiBody, this.aiPaddle]]) {
      const o = this.sides[s];
      styleOpponent(body, o.profile.look || {});
      paintOpponent(body, o.hex);
      paddle.userData.baseGlow.copy(glow(o.hex, 0.9));
      paddle.userData.ringMat.color.copy(paddle.userData.baseGlow);
    }
    this.controllers[PLAYER] = this.nearCtl;
    this.demoBody.visible = true;
    this.nearPaddle.visible = true;
    this.playerPaddle.visible = false;
    this.playerArm.visible = false;
    this.nearCtl.reset();
    this.aiCtl.reset();
    this.match = new Match(length, Math.random() < 0.5 ? PLAYER : AI);
    this.newGameForm();
    this.wstats = this.freshWatchStats();
    this.intensity = 0;
    this.cheer = 0;
    this.sparks.clear();
    this.audio.setMusic('game');
    this.ui.setWatchHUD(true, this);
    this.ui.updateHUD(this);
    this.drawScreen();
    this.newPoint();
    this.ui.banner(`${this.sides[PLAYER].name}  vs  ${this.sides[AI].name}`, this.matchLabel(), 'intro', 2.2);
    this.rally.serveReadyAt = this.time + 1.6;
  }

  // Where a watch match stands between points, saved with an open bet so the
  // match can be finished without you if the page is closed (see main.js).
  watchSnapshot() {
    const m = this.match;
    return {
      games: { ...m.games }, score: { ...m.score }, gameFirstServer: m.gameFirstServer, gameNumber: m.gameNumber,
      history: m.history.map((h) => ({ ...h })),
      wstats: JSON.parse(JSON.stringify(this.wstats)),
    };
  }

  // Pick a watch match up again from a snapshot (after startWatch).
  resumeWatch(st) {
    if (!st || typeof st !== 'object') return;
    const m = this.match;
    const side = (o) => ({ [PLAYER]: Math.max(0, (o && o[PLAYER]) | 0), [AI]: Math.max(0, (o && o[AI]) | 0) });
    m.games = side(st.games);
    m.score = side(st.score);
    if (st.gameFirstServer === PLAYER || st.gameFirstServer === AI) m.gameFirstServer = st.gameFirstServer;
    m.gameNumber = Math.max(1, st.gameNumber | 0);
    m.history = Array.isArray(st.history) ? st.history.map((h) => side(h)) : [];
    if (st.wstats && typeof st.wstats === 'object') {
      const ws = this.freshWatchStats();
      for (const k of Object.keys(ws)) {
        const v = st.wstats[k];
        if (typeof ws[k] === 'number') { if (Number.isFinite(v)) ws[k] = v; } else if (v && typeof v === 'object') ws[k] = side(v);
      }
      this.wstats = ws;
    }
    this.newPoint();
  }

  // Each game both bots get a fresh form for the day (see ai.js).
  newGameForm() {
    this.nearCtl.setForm(gauss() * FORM.sd);
    this.aiCtl.setForm(gauss() * FORM.sd);
  }

  freshWatchStats() {
    const both = (v) => ({ [PLAYER]: v, [AI]: v });
    return { longest: 0, points: 0, hits: both(0), fastest: both(0), smashes: both(0), smashesLanded: both(0), aces: both(0), pointsWon: both(0) };
  }

  // Name and colour of a side: you or a bot (watch mode labels both bots).
  sideName(side) {
    if (this.mode === 'watch') return this.sides[side].name;
    return side === PLAYER ? 'YOU' : this.profile.bot;
  }

  sideColor(side) {
    if (this.mode === 'watch') return this.sides[side].color;
    return side === PLAYER ? '#00f0ff' : this.profile.color;
  }

  // "Skip to result": play on with no visuals, sound or HUD (as fast as the
  // computer can), then pick the picture back up at the end.
  setFast(on) {
    if (on === this.fast) return;
    this.fast = on;
    if (on) {
      // A replay that's queued or showing is dropped, but its result still
      // has to land (it restarts the clock on the point).
      const pending = this.replay || this.replayQueued;
      this.resetMoment();
      this._realUI = this.ui;
      this._realAudio = this.audio;
      this.ui = SILENT;
      this.audio = SILENT;
      if (pending) pending.announce();
    } else {
      this.ui = this._realUI;
      this.audio = this._realAudio;
      this.sparks.clear();
      this.waves.clear();
      this.trail.reset();
    }
  }

  // Spoken name: "ZERO" reads as a number to speech engines, so title-case it.
  botName(side = AI) {
    const b = this.mode === 'watch' ? this.sides[side].bot : this.profile.bot;
    return b[0] + b.slice(1).toLowerCase();
  }

  matchLabel() {
    const g = this.match.gamesToWin;
    return g === 1 ? 'Single game to 11' : `Best of ${g * 2 - 1}`;
  }

  setOpponentLook(p) {
    styleOpponent(this.aiBody, p.look || {});
    paintOpponent(this.aiBody, p.hex);
    this.aiPaddle.userData.baseGlow.copy(glow(p.hex, 0.9));
    this.aiPaddle.userData.ringMat.color.copy(this.aiPaddle.userData.baseGlow);
  }

  newPoint() {
    const server = this.match.server;
    this.rally = this.freshRally(server);
    this.rally.serveReadyAt = this.time + 0.35;
    this.trail.reset();
    const c = this.controllers[server];
    // Put the ball in the server's hand straight away.
    this.ball.vx = this.ball.vy = this.ball.vz = 0;
    this.ball.wx = this.ball.wy = this.ball.wz = 0;
    this.controllers[PLAYER].onServeSetup();
    this.controllers[AI].onServeSetup();
    this.ball.px = c.x; this.ball.py = 1.05; this.ball.pz = c.z - sideSign(server) * 0.4;
    if (this.mode === 'watch') this.ui.updateHUD(this);
    if (this.mode === 'match') {
      this.ui.updateHUD(this);
      if (server === PLAYER) this.ui.hint('Your serve — <b>SPACE</b> to toss, <b>SPACE</b> again to hit as it drops');
      else this.ui.hint('');
    }
  }

  canServe() {
    return this.rally.phase === 'serve' && this.time >= this.rally.serveReadyAt && !this.paused;
  }

  holdBall(side, x, y, z) {
    const b = this.ball;
    b.px = x; b.py = y; b.pz = z;
    b.vx = b.vy = b.vz = 0;
    b.wx = b.wy = b.wz = 0;
  }

  toss(side) {
    const b = this.ball;
    b.vy = 2.45;
    b.vx = 0; b.vz = 0;
    this.rally.phase = 'toss';
    this.rally.tossTime = this.time;
    this.audio.toss();
    if (side === PLAYER && this.mode === 'match') this.ui.hint('');
  }

  // A paddle meets the ball. Validates the rules, then launches the shot.
  strike(side, shot) {
    const r = this.rally;
    const b = this.ball;
    const human = (this.mode === 'match' || this.mode === 'practice') && side === PLAYER;
    const watch = this.mode === 'watch';
    if (r.phase === 'toss') {
      if (side !== r.server) return;
      shot.serve = true;
      r.isServe = true;
      r.serveOwn = 0;
      r.netTouch = false;
    } else if (r.phase === 'play') {
      if (r.lastHitter === side) return;
      if (r.bounces[side] === 0 && this.mode !== 'practice') {
        // Hit before it bounced on your side.
        const overTable = Math.abs(b.px) <= HALF_W && Math.abs(b.pz) <= HALF_L;
        this.endPoint(overTable ? otherSide(side) : side, overTable ? 'volley' : 'out');
        return;
      }
      r.isServe = false;
    } else {
      return;
    }

    const dirSign = -sideSign(side);
    const sol = solveShot(b.px, b.py, b.pz, shot.tx, shot.tz, {
      speed: shot.speed, top: shot.top, side: shot.side, dirSign, serve: !!shot.serve, margin: shot.margin ?? 0.02,
    }, this._sol || (this._sol = {}));
    b.vx = sol.vx; b.vy = sol.vy + (shot.vyErr || 0); b.vz = sol.vz;
    b.wx = sol.wx; b.wy = sol.wy; b.wz = sol.wz;

    r.phase = 'play';
    r.lastHitter = side;
    r.lastKind = shot.kind;
    r.bounces[PLAYER] = 0;
    r.bounces[AI] = 0;
    // A net cord earlier in the rally is history once the ball is struck
    // again (otherwise a later miss would be called "net" and its replay
    // keyed to the old touch).
    r.netTouch = false;
    r.netTime = -1;
    r.landTime = -1;
    r.hits++;
    r.lastHitTime = this.time;
    this.controllers[PLAYER].onBallStruck(side);
    this.controllers[AI].onBallStruck(side);

    // ---- feedback
    const q = shot.quality ?? 0.6;
    const speed = Math.hypot(b.vx, b.vy, b.vz);
    const power = clamp((speed - 5) / 14, 0, 1);
    const smash = shot.kind === 'smash';
    const perfect = q >= 0.9;
    const far = side === AI || !human;
    if (watch) {
      const st = this.wstats;
      st.hits[side]++;
      st.fastest[side] = Math.max(st.fastest[side], speed);
      if (smash) st.smashes[side]++;
      if (this.fast) return;
    }
    this.audio.hit(power, human ? q : 0.5, far && !smash, smash, shot.kind === 'chop');
    if (!human && this.mode === 'match') this.audio.whoosh(0.4);

    let col = COLORS.cyan;
    if (shot.kind === 'chop') col = COLORS.purple;
    if (perfect) col = COLORS.yellow;
    if (smash) col = COLORS.orange;
    if (side === AI) col = smash ? COLORS.orange : this.aiCtl.p.hex;
    if (watch) col = smash ? COLORS.orange : this.sides[side].hex;
    const pq = QUALITY[this.settings.quality].particles;
    const n = Math.round((12 + 55 * power + (perfect ? 30 : 0) + (smash ? 60 : 0)) * pq * (far ? 0.6 : 1));
    // Your own hits happen half a metre from your eyes: keep those sparks
    // small and fling them forward so they frame the shot instead of hiding it.
    const near = human ? 0.4 : 1;
    this.sparks.burst(b.px, b.py, b.pz, n, {
      color: col, speed: 2 + power * 5 + (smash ? 4 : 0), life: 0.35 + power * 0.3, size: (0.02 + power * 0.015) * near,
      dx: b.vx * (human ? 0.3 : 0.12), dy: b.vy * 0.12, dz: b.vz * (human ? 0.3 : 0.12), bright: 2.5,
    });
    // (Seen from the spectator cameras the rings read against the whole table:
    // keep them well under a quarter of its length.)
    const wk = watch ? 0.25 : 1;
    if (!human && (power > 0.3 || perfect || smash)) {
      this.waves.spawn(b.px, b.py, b.pz, col, (0.2 + power * 0.45 + (smash ? 0.4 : 0)) * wk, 0.28);
    }
    if (smash) {
      if (human) {
        // Sparks out ahead of you along the ball's path
        const k = 0.12;
        this.sparks.burst(b.px + b.vx * k, b.py + b.vy * k, b.pz + b.vz * k, Math.round(40 * pq), {
          color: COLORS.orange, speed: 5, life: 0.5, size: 0.02, dx: b.vx * 0.2, dy: b.vy * 0.2, dz: b.vz * 0.2, bright: 3,
        });
      } else {
        this.waves.spawn(b.px, b.py, b.pz, 0xffffff, 1.1 * wk, 0.45, false, 1.5);
      }
    }
    // Your hits get an anime impact frame over the paddle: bigger and punchier
    // for hard shots (W) and smashes, smaller for soft ones (S).
    if (human && this.impact) {
      const pw = shot.power || 0;
      const k = (smash ? 1.6 : pw > 0 ? 1.3 : pw < 0 ? 0.7 : 1) * (0.85 + 0.3 * q);
      this.impact.trigger(b.px, b.py, b.pz, b.vx, b.vy, b.vz, k, performance.now());
    }

    if (human) {
      this.stats.hits++;
      this.stats.fastest = Math.max(this.stats.fastest, speed);
      let label = shot.label;
      let cls = 'ok';
      if (smash) { label = 'SMASH!!'; cls = 'smash'; this.stats.smashes++; }
      else if (perfect) { label = label || 'PERFECT!'; cls = 'perfect'; this.stats.perfects++; }
      else if (!label && q >= 0.7) { label = 'GREAT'; cls = 'great'; }
      else if (!label && q >= 0.45) { label = 'GOOD'; cls = 'good'; }
      else if (label) cls = 'bad';
      if (label) this.ui.pop(label, cls);
      if (this.mode === 'practice') this.machine.onPlayerHit(q, shot.label);
      // Hit-stop: the game holds still for a few frames on the big hits so they
      // land with weight (the impact frame plays over the freeze).
      this.hitStop = smash ? 0.08 : perfect ? 0.06 : q >= 0.7 ? 0.015 : 0;
      // A small, quick screen shake on PERFECT and SMASH, scaled by shot power.
      if (smash || perfect) this.shake.add((smash ? 0.5 : 0.3) + power * 0.3);
      if (smash) this.ui.flash('#ff7a1a', 0.22);
      if ((smash || perfect) && this.settings.slowmo) this.slowTimer = smash ? 0.24 : 0.16;
    } else if ((this.mode === 'match' || watch) && smash) {
      this.hitStop = 0.04;
      this.shake.add(0.3 + power * 0.2);
      this.ui.flash(watch ? this.sides[side].color : '#ff2bd6', 0.18);
    }

    // Rally milestones; the crowd builds from the 10th shot on.
    if (this.mode === 'match' || watch) {
      const h = r.hits;
      if (!watch) this.stats.longest = Math.max(this.stats.longest, h);
      this.audio.rally(h);
      if (h === 6 || h === 10 || h === 15 || (h >= 20 && h % 10 === 0)) {
        this.ui.milestone(h);
        if (h >= 10) this.audio.cheer(0.3 + Math.min(0.5, h / 40));
        this.cheer = Math.min(1, this.cheer + 0.6);
      }
      this.ui.setRally(h, this.intensity);
    }
  }

  onWhiff(side, text) {
    if (this.mode === 'demo' || side !== PLAYER) return;
    this.ui.pop(text, 'bad');
    if (this.mode === 'practice') this.machine.judge('late');
  }

  // ------------------------------------------------------------ rules
  onTable(side) {
    const r = this.rally;
    const b = this.ball;
    const far = side === AI;
    const sp = Math.abs(b.vy);
    this.audio.bounce(sp, far || this.mode === 'demo');
    const col = this.intensity > 0.5 ? COLORS.magenta : COLORS.cyan;
    this.waves.spawn(b.px, TABLE_H + 0.003, b.pz, col, 0.12 + Math.min(0.2, sp * 0.03), 0.3, true, 2);
    this.sparks.burst(b.px, TABLE_H + 0.01, b.pz, Math.round(6 * QUALITY[this.settings.quality].particles), { color: col, speed: 1.2, life: 0.25, size: 0.014, gravity: 2 });

    if (this.mode === 'practice') {
      // No points in practice: just track the bounce on your side (for the
      // timing guide) and whether your return landed on the machine's side.
      if (r.phase !== 'play') return;
      if (side === PLAYER && r.lastHitter === AI) r.bounces[PLAYER]++;
      else if (side === AI && r.lastHitter === PLAYER && !r.landed) {
        r.landed = true;
        this.machine.onPlayerReturnLanded();
      }
      return;
    }
    if (r.phase === 'toss') {
      this.retoss();
      return;
    }
    if (r.phase !== 'play') return;
    const H = r.lastHitter, R = otherSide(H);
    if (r.isServe) {
      if (side === H) {
        if (r.serveOwn === 0) r.serveOwn = 1;
        else this.endPoint(R, 'serve-double');
      } else {
        if (r.serveOwn === 0) this.endPoint(R, 'serve-fault');
        else if (r.netTouch) this.letServe();
        else {
          r.isServe = false;
          r.bounces[R] = 1;
          r.landTime = this.time;
        }
      }
    } else if (side === H) {
      this.endPoint(R, 'own-side');
    } else {
      r.bounces[R]++;
      if (r.bounces[R] === 1) {
        r.landTime = this.time;
        if (R === AI && r.lastKind === 'smash' && this.mode === 'match') this.stats.smashesLanded++;
        if (r.lastKind === 'smash' && this.mode === 'watch') this.wstats.smashesLanded[H]++;
      }
      if (r.bounces[R] >= 2) this.endPoint(H, 'double');
    }
  }

  onNet() {
    const r = this.rally;
    const b = this.ball;
    this.audio.net(Math.hypot(b.vx, b.vy, b.vz));
    this.sparks.burst(b.px, b.py, b.pz, Math.round(10 * QUALITY[this.settings.quality].particles), { color: COLORS.magenta, speed: 1.5, life: 0.3, size: 0.015 });
    if (r.phase === 'play') {
      r.netTouch = true;
      r.netTime = this.time;
      if ((this.mode === 'match' || this.mode === 'watch') && b.py > NET_TOP && Math.sign(b.vz) === -sideSign(r.lastHitter)) {
        this.ui.pop('NET CORD!', 'net');
      }
    }
  }

  onFloor() {
    const r = this.rally;
    if (this.mode === 'match' || this.mode === 'watch' || this.time - (this._lastFloorSnd || 0) > 0.25) {
      this.audio.floor();
      this._lastFloorSnd = this.time;
    }
    if (this.mode === 'practice') return;
    if (r.phase === 'toss') { this.retoss(); return; }
    if (r.phase !== 'play') return;
    const H = r.lastHitter, R = otherSide(H);
    if (r.isServe) this.endPoint(R, r.serveOwn ? 'serve-out' : 'serve-fault');
    else if (r.bounces[R] >= 1) this.endPoint(H, 'winner');
    else this.endPoint(R, this.ball.pz * sideSign(H) > 0 && r.netTouch ? 'net' : 'out');
  }

  retoss() {
    const r = this.rally;
    r.phase = 'serve';
    r.serveReadyAt = this.time + 0.4;
    this.controllers[r.server].onServeSetup();
    if (this.mode === 'match' && r.server === PLAYER) {
      this.ui.pop('TOSS AGAIN', 'bad');
      this.ui.hint('Your serve — <b>SPACE</b> to toss, <b>SPACE</b> again to hit as it drops');
    }
  }

  letServe() {
    const r = this.rally;
    r.phase = 'dead';
    r.deadTimer = 1.4;
    r.let = true;
    if (this.mode === 'match' || this.mode === 'watch') {
      this.ui.banner('LET', 'Serve touched the net — replay', 'let', 1.3);
      this.audio.say('Let');
    }
  }

  endPoint(winner, reason) {
    const r = this.rally;
    if (r.phase === 'dead') return;
    r.phase = 'dead';
    r.let = false;
    r.deadTimer = 1.7;
    if (reason === 'own-side' && r.netTouch) reason = 'net';
    const loser = otherSide(winner);
    const rallyLen = r.hits;
    const res = this.match.award(winner);
    this.controllers[winner].onPointEnd(true);
    this.controllers[loser].onPointEnd(false);

    if (this.mode === 'watch') {
      this.watchPoint(winner, reason, res, rallyLen);
      return;
    }
    if (this.mode !== 'match') {
      this.cheer = Math.min(1, this.cheer + 0.5);
      this.audio.cheer(0.25 + Math.min(0.5, rallyLen / 30));
      if (res.matchWon || res.gameWon) {
        if (this.match.over) this.match = new Match(99, Math.random() < 0.5 ? PLAYER : AI);
        else this.match.startNextGame();
      }
      return;
    }

    const youWon = winner === PLAYER;
    if (youWon) this.stats.won++; else this.stats.lost++;
    if (r.server === PLAYER) {
      this.stats.servePts++;
      if (youWon) this.stats.serveWon++;
    }
    if (youWon && rallyLen === 1 && r.server === PLAYER && (reason === 'winner' || reason === 'double')) this.stats.aces++;
    const big = rallyLen >= 8;
    this.audio.point(youWon, rallyLen);
    this.cheer = Math.min(1, this.cheer + (youWon ? 0.8 : 0.4) + (big ? 0.3 : 0));

    const reasons = {
      'serve-fault': (w) => (w === PLAYER ? 'Fault — serve must bounce on their side first' : 'Fault — your serve must bounce on your side first'),
      'serve-double': () => 'Fault — serve bounced twice',
      'serve-out': (w) => (w === PLAYER ? 'Their serve missed the table' : 'Your serve missed the table'),
      'own-side': (w) => (w === PLAYER ? 'Their shot dropped on their own side' : 'Your shot dropped on your own side'),
      double: (w) => (w === PLAYER ? 'Unreturnable!' : 'It got past you'),
      winner: (w) => (w === PLAYER ? 'Clean winner!' : 'It got past you'),
      out: (w) => (w === PLAYER ? 'Their shot went out' : 'Your shot went out'),
      net: (w) => (w === PLAYER ? 'They hit the net' : 'Into the net'),
      volley: (w) => (w === PLAYER ? 'Volley — they hit it before the bounce' : 'Volley — let it bounce first!'),
    };
    let sub = reasons[reason] ? reasons[reason](winner) : '';
    if (rallyLen >= 6) sub += ` · ${rallyLen}-shot rally`;
    let title = youWon ? 'POINT!' : `${this.profile.bot} SCORES`;
    let cls = youWon ? 'win' : 'lose';
    const finale = res.matchWon || res.gameWon;
    if (res.matchWon) {
      title = youWon ? 'MATCH WON!' : 'MATCH LOST';
    } else if (res.gameWon) {
      title = youWon ? 'GAME!' : `GAME ${this.profile.bot}`;
      sub = `Games ${this.match.games[PLAYER]} – ${this.match.games[AI]}`;
    }
    const announce = () => {
      if (finale) r.deadTimer = 2.6;
      this.ui.banner(title, sub, cls, Math.min(r.deadTimer, 2.2));
      if (res.matchWon) {
        this.audio.fanfare(youWon);
        this.audio.say(youWon ? 'Game and match. Victory!' : `Game and match, ${this.botName()}`);
      } else if (res.gameWon) {
        this.audio.say(youWon ? 'Game, to you!' : `Game, ${this.botName()}`);
      }
      if (youWon) this.ui.flash('#00f0ff', 0.12);
    };
    if (finale && this.recorder) {
      // Show the deciding moment again in slow motion before the result.
      r.deadTimer = Infinity;
      this.queueReplay(reason, announce);
    } else {
      announce();
    }
    this.pendingGame = res;
    this.ui.updateHUD(this);
    this.drawScreen(rallyLen);
    this.ui.setRally(0, 0);
  }

  // A point in a bot-vs-bot match: the crowd reacts, the scoreboard ticks
  // over, and the point that wins a game or the match is replayed slowly.
  watchPoint(winner, reason, res, rallyLen) {
    const r = this.rally;
    const loser = otherSide(winner);
    const st = this.wstats;
    st.points++;
    st.pointsWon[winner]++;
    st.longest = Math.max(st.longest, rallyLen);
    if (rallyLen === 1 && r.server === winner && (reason === 'winner' || reason === 'double')) st.aces[winner]++;
    this.pendingGame = res;
    if (this.fast) return;

    const W = this.sideName(winner), L = this.sideName(loser);
    const big = clamp((rallyLen - 4) / 14, 0, 1);
    this.audio.cheer(0.3 + 0.6 * big);
    if (rallyLen >= 8) this.audio.applause(0.3 + 0.5 * big);
    this.cheer = Math.min(1, this.cheer + 0.6 + (rallyLen >= 8 ? 0.3 : 0));
    const reasons = {
      'serve-fault': `Fault — ${L}'s serve didn't bounce on their side first`,
      'serve-double': `Fault — ${L}'s serve bounced twice`,
      'serve-out': `${L}'s serve missed the table`,
      'own-side': `${L}'s shot dropped on their own side`,
      double: 'Unreturnable!',
      winner: 'Clean winner!',
      out: `${L}'s shot went out`,
      net: `${L} hit the net`,
      volley: `${L} hit it before the bounce`,
    };
    let sub = reasons[reason] || '';
    if (rallyLen >= 6) sub += ` · ${rallyLen}-shot rally`;
    let title = `POINT ${W}`;
    const finale = res.matchWon || res.gameWon;
    if (res.matchWon) {
      title = `${W} WINS!`;
      const h = this.match.history;
      sub = this.match.gamesToWin > 1 ? `${this.match.games[winner]}–${this.match.games[loser]} in games` : `${h[0][winner]}–${h[0][loser]}`;
    } else if (res.gameWon) {
      title = `GAME ${W}`;
      sub = `Games ${this.match.games[PLAYER]} – ${this.match.games[AI]}`;
    }
    const color = this.sideColor(winner);
    const announce = () => {
      if (finale) r.deadTimer = 2.6;
      this.ui.banner(title, sub, 'watch', Math.min(r.deadTimer, 2.2), color);
      if (res.matchWon) {
        this.audio.fanfare(true);
        this.audio.say(`Game and match, ${this.botName(winner)}`);
      } else if (res.gameWon) {
        this.audio.say(`Game, ${this.botName(winner)}`);
      }
    };
    if (finale && this.recorder) {
      r.deadTimer = Infinity;
      this.queueReplay(reason, announce);
    } else {
      announce();
    }
    this.ui.updateHUD(this);
    this.drawScreen(rallyLen);
    this.ui.setRally(0, 0);
  }

  // ------------------------------------------------------------- replay
  // Plays the moment that decided a game or the match back in slow motion
  // (about 1.5 s): the ball landing and the return that never came.
  queueReplay(reason, announce) {
    const r = this.rally;
    const end = this.time;
    let key = end;
    if ((reason === 'winner' || reason === 'double') && r.landTime >= 0) key = r.landTime;
    else if (reason === 'net' && r.netTime >= 0) key = r.netTime;
    else if (reason === 'out' || reason === 'serve-out') key = end - 0.25;
    let start = key - 0.22;
    const stop = Math.min(end + 0.15, start + 0.75);
    if (stop - start < 0.5) start = stop - 0.5;
    // Keep recording a moment past the end so the replay doesn't stop dead.
    this.replayQueued = { at: end + 0.15, start, stop, announce };
  }

  startReplay() {
    const q = this.replayQueued;
    this.replayQueued = null;
    const rec = this.recorder;
    const start = Math.max(q.start, rec.startTime);
    const stop = Math.min(q.stop, rec.endTime);
    if (stop - start < 0.25) { q.announce(); return; }
    this.replay = { t: start, stop, rate: clamp((stop - start) / 1.5, 0.25, 0.6), announce: q.announce };
    this.sparks.clear();
    this.waves.clear();
    this.trail.reset();
    this.ui.timing(false);
    this.ui.setReplay(true);
    this.audio.slowmo();
    this.audio.setMuffle(true);
  }

  updateReplay(realDt) {
    const rp = this.replay;
    const inp = this.input;
    const skip = inp.wasPressed('Space') || inp.wasPressed('Enter') || inp.mousePressed[0];
    const step = realDt * rp.rate;
    rp.t += step;
    if (rp.t >= rp.stop || skip) { this.endReplay(); return; }
    this.recorder.apply(rp.t);
    const w = this.world;
    const p = w.ball.position;
    this.trail.push(p.x, p.y, p.z, step);
    this.trail.update(0.07 + this.intensity * 0.09, 0.032 + this.intensity * 0.02, 1.4 + this.intensity * 1.5, w.pointScale());
    w.update(realDt * 0.5, this.intensity, this.cheer);
    this.audio.update(this.intensity * 0.5);
  }

  endReplay() {
    const rp = this.replay;
    this.replay = null;
    this.trail.reset();
    this.ui.setReplay(false);
    this.audio.setMuffle(false);
    rp.announce();
  }

  afterPoint() {
    const r = this.rally;
    if (r.let) {
      this.newPoint();
      return;
    }
    const res = this.pendingGame;
    this.pendingGame = null;
    if (this.mode === 'watch' && res) {
      if (res.matchWon) {
        this.state = 'over';
        this.setFast(false);
        this.audio.setMusic('menu');
        this.ui.updateHUD(this);
        this.drawScreen();
        if (this.onWatchEnd) this.onWatchEnd(this);
        return;
      }
      if (res.gameWon) {
        this.match.startNextGame();
        this.newGameForm();
        this.drawScreen();
        this.ui.banner(`GAME ${this.match.gameNumber}`, `${this.sideName(this.match.server)} serves first`, 'intro', 1.6);
      }
    }
    if (this.mode === 'match' && res) {
      if (res.matchWon) {
        this.input.active = false;
        const ladder = this.onMatchEnd ? this.onMatchEnd(this) : null;
        this.ui.gameOver(this, ladder);
        this.state = 'over';
        this.audio.setMusic('menu');
        return;
      }
      if (res.gameWon) {
        this.match.startNextGame();
        this.drawScreen();
        this.ui.banner(`GAME ${this.match.gameNumber}`, `${this.match.server === PLAYER ? 'You serve' : `${this.profile.bot} serves`} first`, 'intro', 1.6);
      }
    }
    this.newPoint();
    if (this.mode === 'watch' && this.onWatchProgress) this.onWatchProgress(this);
    if (this.mode === 'match' || this.mode === 'watch') {
      const gp = this.match.matchPointFor() ? 'MATCH POINT' : this.match.gamePointFor() ? 'GAME POINT' : this.match.isDeuce && this.match.score[PLAYER] === this.match.score[AI] ? 'DEUCE' : null;
      if (gp) {
        this.ui.pop(gp, 'gp');
        this.audio.say(gp.toLowerCase());
      }
    }
  }

  drawScreen(rally = 0) {
    if (this.fast) return;
    if (this.mode !== 'match' && this.mode !== 'watch') {
      this.world.drawScreen({ title: 'NEON SPIN' });
      return;
    }
    this.world.drawScreen({
      player: this.sideName(PLAYER),
      pcolor: this.mode === 'watch' ? this.sideColor(PLAYER) : null,
      opponent: this.sideName(AI),
      color: this.sideColor(AI),
      ps: this.match.score[PLAYER],
      os: this.match.score[AI],
      pg: this.match.games[PLAYER],
      og: this.match.games[AI],
      rally,
    });
  }

  // ----------------------------------------------------------------- loop
  update(realDt) {
    if (this.paused || this.state === 'over') {
      // Keep the arena alive behind menus, but freeze gameplay.
      this.world.update(realDt * 0.3, this.intensity * 0.5, this.cheer);
      this.audio.update(this.state === 'over' ? 0.2 : this.intensity * 0.3);
      if (!this.replay) this.updateVisuals(0);
      return;
    }
    if (this.replay) { this.updateReplay(realDt); return; }
    if (this.replayQueued && this.time >= this.replayQueued.at) {
      this.startReplay();
      if (this.replay) { this.updateReplay(0); return; }
    }
    if (this.hitStop > 0) {
      // Hit-stop: everything holds still for a few frames; only the camera shakes.
      this.hitStop -= realDt;
      this.shake.update(realDt, this.settings.shake);
      if (this.controllers[PLAYER] === this.human) this.human.animate(0);
      this.world.update(realDt, this.intensity, this.cheer);
      this.audio.update(this.mode === 'match' || this.mode === 'watch' ? this.intensity : 0.2);
      this.updateVisuals(0);
      return;
    }
    // Slow motion on great shots
    if (this.slowTimer > 0) {
      this.slowTimer -= realDt;
      this.timeScale = 0.28;
    } else {
      this.timeScale += (1 - this.timeScale) * damp(10, realDt);
    }
    const dt = realDt * this.timeScale;
    this.time += dt;

    const r = this.rally;
    // Controllers first (they may toss / strike)
    this.controllers[PLAYER].update(dt);
    this.controllers[AI].update(dt);

    // Physics with small fixed-size substeps
    if (r.phase !== 'serve') {
      let remaining = dt;
      while (remaining > 1e-6) {
        const h = Math.min(SUBSTEP, remaining);
        remaining -= h;
        const ev = stepBall(this.ball, h);
        if (ev) {
          if (ev & EV_NET) this.onNet();
          if (ev & EV_TABLE) this.onTable(this.ball.pz > 0 ? PLAYER : AI);
          if (ev & EV_FLOOR) this.onFloor();
        }
      }
      if (r.phase === 'toss' && this.ball.vy < 0 && this.ball.py < 0.82) this.retoss();
      if (r.phase === 'play' && this.mode !== 'practice' && this.time - r.lastHitTime > 6) {
        const H = r.lastHitter;
        this.endPoint(r.bounces[otherSide(H)] >= 1 ? H : otherSide(H), 'winner');
      }
    }
    if (r.phase === 'dead') {
      r.deadTimer -= dt;
      if (r.deadTimer <= 0) this.afterPoint();
    }
    if (this.fast) return; // skipping to the result: no picture or sound

    // Intensity follows the rally length
    const scored = this.mode === 'match' || this.mode === 'watch';
    const target = r.phase === 'dead' ? this.intensity * 0.9 : clamp((r.hits - 2) / 16, 0, 1);
    this.intensity += (target - this.intensity) * damp(r.phase === 'dead' ? 0.6 : 2.5, realDt);
    this.cheer = Math.max(0, this.cheer - realDt * 0.45);
    this.audio.update(scored ? this.intensity : 0.2);

    this.shake.update(realDt, this.settings.shake);
    this.world.update(realDt, this.intensity, this.cheer);
    this.sparks.update(dt, this.world.pointScale());
    this.waves.update(dt, this.world.camera);
    this.updateVisuals(dt);
    if (this.recorder && scored) this.recorder.record(this.time);
  }

  // A stripe on the ball turns with its spin, slowed down so the eye can
  // follow it, and is coloured by the kind of spin: orange topspin (it rolls
  // down the front of the ball as it comes at you), blue backspin (rolls up).
  // Returns the topspin relative to SPIN_REF (+ topspin, - backspin).
  updateSpinBand(dt) {
    const w = this.world;
    const b = this.ball;
    const band = w.spinBand;
    band.position.copy(w.ball.position);
    const s = topspinOf(b) / SPIN_REF;
    w.spinBandColor.copy(SPIN_COLORS.none).lerp(s > 0 ? SPIN_COLORS.top : SPIN_COLORS.back, clamp(Math.abs(s) * 1.4, 0, 1));
    const wl = Math.hypot(b.wx, b.wy, b.wz);
    if (wl < 1) return s;
    SPIN_AXIS.set(b.wx / wl, b.wy / wl, b.wz / wl);
    // Keep the stripe's plane containing the spin axis (otherwise it would
    // just slide round inside itself and show nothing).
    BAND_N.copy(AXIS_Z).applyQuaternion(band.quaternion);
    if (Math.abs(BAND_N.dot(SPIN_AXIS)) > 0.5) {
      BAND_N.crossVectors(SPIN_AXIS, Math.abs(SPIN_AXIS.y) < 0.9 ? AXIS_Y : AXIS_X).normalize();
      band.quaternion.setFromUnitVectors(AXIS_Z, BAND_N);
    }
    if (dt > 0) {
      TMP_Q.setFromAxisAngle(SPIN_AXIS, Math.min(32, wl * 0.06) * dt);
      band.quaternion.premultiply(TMP_Q);
    }
    return s;
  }

  updateVisuals(dt) {
    const w = this.world;
    const b = this.ball;
    w.ball.position.set(b.px, b.py, b.pz);
    w.ballHalo.position.copy(w.ball.position);
    const speed = Math.hypot(b.vx, b.vy, b.vz);
    const c = intensityColor(this.intensity, TMP_COLOR);
    // Flat cartoon white at first; it heats up and starts to glow as a rally builds.
    w.ballMat.color.copy(c).multiplyScalar(0.95 + this.intensity * 1.4);
    w.ballHalo.material.color.copy(c);
    const hs = 0.05 + Math.min(0.04, speed * 0.002) + this.intensity * 0.06;
    w.ballHalo.scale.set(hs, hs, 1);
    w.ballLight.position.copy(w.ball.position);
    w.ballLight.color.copy(c);
    w.ballLight.intensity = 0.25 + this.intensity * 0.5;

    // Contact shadow on the table or floor
    const overTable = Math.abs(b.px) <= HALF_W && Math.abs(b.pz) <= HALF_L && b.py >= TABLE_H;
    const base = overTable ? TABLE_H + 0.0015 : 0.003;
    const hgt = Math.max(0, b.py - base);
    w.shadow.position.set(b.px, base, b.pz);
    const ss = 0.045 + hgt * 0.06;
    w.shadow.scale.set(ss, ss, ss);
    w.shadow.material.opacity = clamp(0.9 - hgt * 0.7, 0.15, 0.9);

    // Spin stripe; the trail takes on a little of the spin colour too.
    const spin = this.updateSpinBand(dt);
    // Comet trail
    if (dt > 0) this.trail.push(b.px, b.py, b.pz, dt);
    this.trail.color.copy(c).lerp(spin > 0 ? SPIN_COLORS.top : SPIN_COLORS.back, 0.65 * clamp(Math.abs(spin), 0, 1));
    const life = 0.05 + this.intensity * 0.09 + (this.rally.phase === 'play' ? 0.02 : 0);
    this.trail.update(life, 0.032 + this.intensity * 0.02, 1.4 + this.intensity * 1.5, w.pointScale());

    // Timing guide: a ring that closes onto the incoming ball exactly when you
    // should press swing (drawn in screen space so it stays crisp).
    const f = this.human.forecast;
    const showT = (this.mode === 'match' || this.mode === 'practice') && this.settings.timingGuide && f.valid && this.human.swingT < 0 && !this.paused;
    if (showT) {
      const cam = w.camera;
      TMP_V.set(f.x, f.y, f.z).project(cam);
      const W = window.innerWidth, H = window.innerHeight;
      let sx = (TMP_V.x * 0.5 + 0.5) * W, sy = (1 - (TMP_V.y * 0.5 + 0.5)) * H;
      const dist = cam.position.distanceTo(TMP_V.set(f.x, f.y, f.z));
      const pxPerM = H / (2 * Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2));
      const core = Math.max(9, (0.02 * pxPerM) / dist * 2.4);
      const lead = f.t - STRIKE_T;
      // The ring's reach scales with the window so it never outgrows a small
      // (or a narrow) one.
      const hk = clamp(Math.min(H / 720, W / 1280), 0.35, 3);
      const outer = core + Math.min(220, Math.max(0, lead) * 300) * hk;
      // Keep it on screen: with a narrow field of view or a tall, narrow
      // window the contact point can project outside the picture, so the ring
      // is pinned to the nearest edge instead of vanishing.
      const m = outer + 6;
      sx = clamp(sx, Math.min(m, W / 2), Math.max(W - m, W / 2));
      sy = clamp(sy, Math.min(m, H / 2), Math.max(H - m, H / 2));
      const state = !f.reachable ? 'far' : Math.abs(lead) < 0.03 ? 'now' : 'ok';
      this.ui.timing(true, sx, sy, core, outer, state, clamp(1.3 - lead * 1.2, 0.25, 1));
    } else {
      this.ui.timing(false);
    }

    // Camera in demo mode: slow orbit around the table
    if (this.mode === 'demo') {
      this.demoAngle += (dt || 0.004) * 0.12;
      const a = this.demoAngle;
      const cam = w.camera;
      cam.position.set(Math.sin(a) * 4.6, 2.3 + Math.sin(a * 0.7) * 0.4, Math.cos(a) * 4.6);
      cam.up.set(0, 1, 0);
      cam.lookAt(0, 0.85, 0);
      if (cam.fov !== this.settings.fov) {
        cam.fov = this.settings.fov;
        cam.updateProjectionMatrix();
      }
    } else if (this.mode === 'watch') {
      this.updateWatchCam(dt);
    }
  }

  // Spectator cameras: a broadcast side view of the whole table (bot 1 on the
  // left), behind either bot, or straight down from above. C cycles them.
  cycleCamera() {
    this.watchCam = (this.watchCam + 1) % WATCH_CAMS.length;
    this._camCut = true;
    return this.watchCamLabel();
  }

  watchCamLabel() {
    return WATCH_CAMS[this.watchCam][1];
  }

  updateWatchCam(dt) {
    const cam = this.world.camera;
    const b = this.ball;
    const kind = WATCH_CAMS[this.watchCam][0];
    let fov = 44;
    // The side camera pans gently with the ball; the others follow their bot.
    const bz = clamp(b.pz, -2.2, 2.2);
    if (kind === 'side') {
      // Far enough back that a defender standing well off the table (and the
      // scoreboard above the net) still sits inside the frame.
      CAM_POS.set(7.1, 3.1, bz * 0.1);
      CAM_LOOK.set(0, 0.72, bz * 0.2);
    } else if (kind === 'near' || kind === 'far') {
      // High over the bot's backhand shoulder, and the bot itself is drawn
      // see-through: standing at the middle of the near edge it would
      // otherwise hide the near half of the table and the ball coming at it.
      const ctl = kind === 'near' ? this.nearCtl : this.aiCtl;
      const s = ctl.s;
      CAM_POS.set(ctl.x * 0.35 - s * 1.0, 3.9, s * 5.8);
      CAM_LOOK.set(ctl.x * 0.15, 0.7, -s * 0.45);
      fov = 42;
    } else {
      CAM_POS.set(0.9, 6.4, 0);
      CAM_LOOK.set(0, 0.76, 0);
      fov = 48;
    }
    this.setGhost(kind === 'near' ? this.demoBody : kind === 'far' ? this.aiBody : null);
    // Ease towards the shot (a hard cut when the camera changes).
    const k = this._camCut || !this._camInit ? 1 : damp(3, dt || 0.016);
    this._camCut = false;
    this._camInit = true;
    const cp = this.camPos || (this.camPos = new THREE.Vector3());
    const cl = this.camLook || (this.camLook = new THREE.Vector3());
    cp.lerp(CAM_POS, k);
    cl.lerp(CAM_LOOK, k);
    const sh = this.shake;
    cam.position.copy(cp);
    cam.position.x += sh.x;
    cam.position.y += sh.y;
    // Overhead: keep bot 1 on the left, as in the side view.
    if (kind === 'top') cam.up.set(-1, 0, 0);
    else cam.up.set(0, 1, 0);
    cam.lookAt(cl);
    fov += sh.fov * 0.5;
    if (Math.abs(cam.fov - fov) > 0.01) {
      cam.fov = fov;
      cam.updateProjectionMatrix();
    }
  }
}

