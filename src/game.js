import * as THREE from 'three';
import {
  TABLE_H, HALF_L, HALF_W, NET_TOP, STRIKE_T, PLAYER, AI, DIFFICULTIES,
  otherSide, sideSign,
} from './config.js';
import { makeBall, stepBall, solveShot, EV_TABLE, EV_NET, EV_FLOOR } from './physics.js';
import { Match } from './match.js';
import { AIController } from './ai.js';
import { HumanController } from './player.js';
import { makePaddle, makeOpponent, makeArm, paintOpponent, COLORS, glow } from './scene.js';
import { Sparks, Trail, Shockwaves, Shake } from './effects.js';
import { QUALITY } from './settings.js';
import { clamp, damp } from './util.js';

const SUBSTEP = 1 / 600;
const TMP_COLOR = new THREE.Color();
const TMP_V = new THREE.Vector3();
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
    this.intensity = 0;
    this.cheer = 0;
    this.mode = 'demo'; // 'demo' | 'match'
    this.state = 'play'; // 'play' | 'over'
    this.paused = false;
    this.rally = this.freshRally(PLAYER);

    const scene = world.scene;
    this.playerPaddle = makePaddle(0xc4001f, COLORS.cyan);
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
    this.playerArm.visible = false;
    scene.add(this.playerArm);
    this.human = new HumanController(this, input, this.playerPaddle, this.playerArm);
    this.profile = DIFFICULTIES[settings.difficulty] || DIFFICULTIES[1];
    this.aiCtl = new AIController(this, AI, this.profile, this.aiPaddle, this.aiBody);
    this.demoCtl = new AIController(this, PLAYER, DIFFICULTIES[3], this.playerPaddle, this.demoBody);
    this.controllers = { [PLAYER]: this.demoCtl, [AI]: this.aiCtl };
    this.stats = this.freshStats();
    this.demoAngle = 0;
    this.startDemo();
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
      tossTime: 0,
      serveReadyAt: 0,
    };
  }

  freshStats() {
    return { longest: 0, perfects: 0, smashes: 0, hits: 0, won: 0, lost: 0, aces: 0 };
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
  startDemo() {
    this.mode = 'demo';
    this.state = 'play';
    this.paused = false;
    const pool = [DIFFICULTIES[2], DIFFICULTIES[3], DIFFICULTIES[4]];
    this.demoCtl.setProfile(pool[(Math.random() * 3) | 0]);
    this.aiCtl.setProfile(pool[(Math.random() * 3) | 0]);
    this.setOpponentLook(this.aiCtl.p);
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

  // Spoken name: "ZERO" reads as a number to speech engines, so title-case it.
  botName() {
    const b = this.profile.bot;
    return b[0] + b.slice(1).toLowerCase();
  }

  matchLabel() {
    const g = this.match.gamesToWin;
    return g === 1 ? 'Single game to 11' : `Best of ${g * 2 - 1}`;
  }

  setOpponentLook(p) {
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
    const human = this.mode === 'match' && side === PLAYER;
    if (r.phase === 'toss') {
      if (side !== r.server) return;
      shot.serve = true;
      r.isServe = true;
      r.serveOwn = 0;
      r.netTouch = false;
    } else if (r.phase === 'play') {
      if (r.lastHitter === side) return;
      if (r.bounces[side] === 0) {
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
    r.bounces[PLAYER] = 0;
    r.bounces[AI] = 0;
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
    const far = side === AI || this.mode === 'demo';
    this.audio.hit(power, human ? q : 0.5, far && !smash, smash);
    if (!human && this.mode === 'match') this.audio.whoosh(0.4);

    let col = COLORS.cyan;
    if (shot.kind === 'chop') col = COLORS.purple;
    if (perfect) col = COLORS.yellow;
    if (smash) col = COLORS.orange;
    if (side === AI) col = smash ? COLORS.orange : this.aiCtl.p.hex;
    const pq = QUALITY[this.settings.quality].particles;
    const n = Math.round((12 + 55 * power + (perfect ? 30 : 0) + (smash ? 60 : 0)) * pq * (far ? 0.6 : 1));
    // Your own hits happen half a metre from your eyes: keep those sparks
    // small and fling them forward so they frame the shot instead of hiding it.
    const near = human ? 0.4 : 1;
    this.sparks.burst(b.px, b.py, b.pz, n, {
      color: col, speed: 2 + power * 5 + (smash ? 4 : 0), life: 0.35 + power * 0.3, size: (0.02 + power * 0.015) * near,
      dx: b.vx * (human ? 0.3 : 0.12), dy: b.vy * 0.12, dz: b.vz * (human ? 0.3 : 0.12), bright: 2.5,
    });
    if (power > 0.3 || perfect || smash) {
      const rad = human ? 0.06 + power * 0.1 + (smash ? 0.08 : 0) : 0.2 + power * 0.45 + (smash ? 0.4 : 0);
      this.waves.spawn(b.px, b.py, b.pz, col, rad, 0.28);
    }
    if (smash) {
      if (human) {
        // A burst out ahead of you along the ball's path
        const k = 0.12;
        this.waves.spawn(b.px + b.vx * k, b.py + b.vy * k, b.pz + b.vz * k, 0xffffff, 0.55, 0.4, false, 1.4);
        this.sparks.burst(b.px + b.vx * k, b.py + b.vy * k, b.pz + b.vz * k, Math.round(40 * pq), {
          color: COLORS.orange, speed: 5, life: 0.5, size: 0.02, dx: b.vx * 0.2, dy: b.vy * 0.2, dz: b.vz * 0.2, bright: 3,
        });
      } else {
        this.waves.spawn(b.px, b.py, b.pz, 0xffffff, 1.1, 0.45, false, 1.5);
      }
    }

    if (human) {
      this.stats.hits++;
      this.shake.add(0.12 + power * 0.3 + (smash ? 0.4 : 0));
      let label = shot.label;
      let cls = 'ok';
      if (smash) { label = 'SMASH!!'; cls = 'smash'; this.stats.smashes++; }
      else if (perfect) { label = label || 'PERFECT!'; cls = 'perfect'; this.stats.perfects++; }
      else if (!label && q >= 0.7) { label = 'GREAT'; cls = 'great'; }
      else if (!label && q >= 0.45) { label = 'GOOD'; cls = 'good'; }
      else if (label) cls = 'bad';
      if (label) this.ui.pop(label, cls);
      if (smash || perfect) {
        this.ui.flash(smash ? '#ff7a1a' : '#ffffff', smash ? 0.28 : 0.14);
        if (this.settings.slowmo) this.slowTimer = smash ? 0.24 : 0.16;
      }
    } else if (this.mode === 'match' && smash) {
      this.shake.add(0.25);
      this.ui.flash('#ff2bd6', 0.18);
    }

    // Rally milestones
    if (this.mode === 'match') {
      const h = r.hits;
      this.stats.longest = Math.max(this.stats.longest, h);
      if (h === 6 || h === 10 || h === 15 || (h >= 20 && h % 10 === 0)) {
        this.ui.milestone(h);
        this.audio.cheer(0.4 + Math.min(0.6, h / 40));
        this.cheer = Math.min(1, this.cheer + 0.6);
      }
      this.ui.setRally(h, this.intensity);
    }
  }

  onWhiff(side, text) {
    if (this.mode === 'match' && side === PLAYER) this.ui.pop(text, 'bad');
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
        }
      }
    } else if (side === H) {
      this.endPoint(R, 'own-side');
    } else {
      r.bounces[R]++;
      if (r.bounces[R] >= 2) this.endPoint(H, 'double');
    }
  }

  onNet() {
    const r = this.rally;
    const b = this.ball;
    this.audio.net();
    this.sparks.burst(b.px, b.py, b.pz, Math.round(10 * QUALITY[this.settings.quality].particles), { color: COLORS.magenta, speed: 1.5, life: 0.3, size: 0.015 });
    if (r.phase === 'play') {
      r.netTouch = true;
      if (this.mode === 'match' && b.py > NET_TOP && Math.sign(b.vz) === -sideSign(r.lastHitter)) {
        this.ui.pop('NET CORD!', 'net');
      }
    }
  }

  onFloor() {
    const r = this.rally;
    if (this.mode === 'match' || this.time - (this._lastFloorSnd || 0) > 0.25) {
      this.audio.floor();
      this._lastFloorSnd = this.time;
    }
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
    if (this.mode === 'match') {
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
    if (youWon && rallyLen === 1 && r.server === PLAYER && (reason === 'winner' || reason === 'double')) this.stats.aces++;
    const big = rallyLen >= 8;
    this.audio.point(youWon, big);
    this.cheer = Math.min(1, this.cheer + (youWon ? 0.8 : 0.4) + (big ? 0.3 : 0));
    if (!youWon && (reason === 'winner' || reason === 'double')) this.audio.ooh();

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
    if (res.matchWon) {
      r.deadTimer = 2.6;
      title = youWon ? 'MATCH WON!' : 'MATCH LOST';
      this.audio.fanfare(youWon);
      this.audio.say(youWon ? 'Game and match. Victory!' : `Game and match, ${this.botName()}`);
    } else if (res.gameWon) {
      r.deadTimer = 2.6;
      title = youWon ? 'GAME!' : `GAME ${this.profile.bot}`;
      sub = `Games ${this.match.games[PLAYER]} – ${this.match.games[AI]}`;
      this.audio.say(youWon ? 'Game, to you!' : `Game, ${this.botName()}`);
    }
    this.ui.banner(title, sub, cls, Math.min(r.deadTimer, 2.2));
    if (youWon) this.ui.flash('#00f0ff', 0.12);
    this.pendingGame = res;
    this.ui.updateHUD(this);
    this.drawScreen(rallyLen);
    this.ui.setRally(0, 0);
  }

  afterPoint() {
    const r = this.rally;
    if (r.let) {
      this.newPoint();
      return;
    }
    const res = this.pendingGame;
    this.pendingGame = null;
    if (this.mode === 'match' && res) {
      if (res.matchWon) {
        this.input.releaseLock();
        this.input.active = false;
        this.ui.gameOver(this);
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
    if (this.mode === 'match') {
      const gp = this.match.matchPointFor() ? 'MATCH POINT' : this.match.gamePointFor() ? 'GAME POINT' : this.match.isDeuce && this.match.score[PLAYER] === this.match.score[AI] ? 'DEUCE' : null;
      if (gp) {
        this.ui.pop(gp, 'gp');
        this.audio.say(gp.toLowerCase());
      }
    }
  }

  drawScreen(rally = 0) {
    if (this.mode !== 'match') {
      this.world.drawScreen({ title: 'NEON SPIN' });
      return;
    }
    this.world.drawScreen({
      opponent: this.profile.bot,
      color: this.profile.color,
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
      if (r.phase === 'play' && this.time - r.lastHitTime > 6) {
        const H = r.lastHitter;
        this.endPoint(r.bounces[otherSide(H)] >= 1 ? H : otherSide(H), 'winner');
      }
    }
    if (r.phase === 'dead') {
      r.deadTimer -= dt;
      if (r.deadTimer <= 0) this.afterPoint();
    }

    // Intensity follows the rally length
    const target = r.phase === 'dead' ? this.intensity * 0.9 : clamp((r.hits - 2) / 16, 0, 1);
    this.intensity += (target - this.intensity) * damp(r.phase === 'dead' ? 0.6 : 2.5, realDt);
    this.cheer = Math.max(0, this.cheer - realDt * 0.45);
    this.audio.update(this.mode === 'match' ? this.intensity : 0.2);

    this.shake.update(realDt, this.settings.shake);
    this.world.update(realDt, this.intensity, this.cheer);
    this.sparks.update(dt, this.world.pointScale());
    this.waves.update(dt, this.world.camera);
    this.updateVisuals(dt);
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

    // Comet trail
    if (dt > 0) this.trail.push(b.px, b.py, b.pz, dt);
    this.trail.color.copy(c);
    const life = 0.05 + this.intensity * 0.09 + (this.rally.phase === 'play' ? 0.02 : 0);
    this.trail.update(life, 0.032 + this.intensity * 0.02, 1.4 + this.intensity * 1.5, w.pointScale());

    const match = this.mode === 'match';
    // Aim reticle
    w.aim.visible = match && this.state !== 'over';
    if (w.aim.visible) {
      const hu = this.human;
      w.aim.position.x = hu.aimX;
      w.aim.position.z = hu.aimZ;
      const chop = this.input.isDown('ShiftLeft') || this.input.isDown('ShiftRight') || this.input.mouseDown[2];
      const pulse = 1 + Math.sin(this.time * 6) * 0.08;
      w.aim.scale.set(pulse, pulse, pulse);
      w.aimMat.color.setHex(chop ? COLORS.purple : COLORS.cyan).multiplyScalar(2.2);
      w.aim.rotation.z = this.time * 0.8;
    }

    // Timing guide: a ring that closes onto the incoming ball exactly when you
    // should press swing (drawn in screen space so it stays crisp).
    const f = this.human.forecast;
    const showT = match && this.settings.timingGuide && f.valid && this.human.swingT < 0 && !this.paused;
    if (showT) {
      const cam = w.camera;
      TMP_V.set(f.x, f.y, f.z).project(cam);
      const W = window.innerWidth, H = window.innerHeight;
      const sx = (TMP_V.x * 0.5 + 0.5) * W, sy = (1 - (TMP_V.y * 0.5 + 0.5)) * H;
      const dist = cam.position.distanceTo(TMP_V.set(f.x, f.y, f.z));
      const pxPerM = H / (2 * Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2));
      const core = Math.max(9, (0.02 * pxPerM) / dist * 2.4);
      const lead = f.t - STRIKE_T;
      const outer = core + Math.min(220, Math.max(0, lead) * 300);
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
    }
  }
}

