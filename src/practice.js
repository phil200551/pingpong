import { AI } from './config.js';
import { solveShot } from './physics.js';
import { rand, damp } from './util.js';

// Practice options. Feed rate = seconds between balls.
export const PRACTICE_OPTIONS = {
  speed: [['slow', 'Slow', 6.5], ['medium', 'Medium', 9.5], ['fast', 'Fast', 12.5]],
  spin: [['none', 'None'], ['top', 'Topspin'], ['back', 'Backspin'], ['random', 'Random']],
  place: [['left', 'Left'], ['middle', 'Middle'], ['right', 'Right'], ['random', 'Random']],
  rate: [['relaxed', 'Relaxed', 2.6], ['steady', 'Steady', 1.9], ['rapid', 'Rapid', 1.35]],
};
export const PRACTICE_DEFAULTS = { speed: 'medium', spin: 'random', place: 'random', rate: 'steady' };
// Coins for practice milestones, each paid once per session: every 10th
// PERFECT, PERFECT streaks and returns landed on the table.
export const PRACTICE_COINS = {
  perfectsEvery: 10, perfects: 5,
  streaks: [[5, 5], [10, 10], [20, 20]],
  landed: [[25, 5], [50, 10], [100, 20]],
};
const pick = (list, id) => list.find((o) => o[0] === id) || list[0];

// The machine stands behind the far end line; the ball leaves the nozzle
// mouth, MOUTH_R in front of the swivel, at NOZZLE_Y.
export const MACHINE_Z = -1.95;
const MOUTH_R = 0.36, NOZZLE_Y = 1.0;
const mouth = (yaw) => ({ x: Math.sin(yaw) * MOUTH_R, y: NOZZLE_Y, z: MACHINE_Z + Math.cos(yaw) * MOUTH_R });

// The ball machine stands in for the opponent in practice: it feeds a ball on
// a loop (speed, spin, placement and rate from the options) and grades your
// timing on every one. It plays the AI's part in the game's controller slots.
export class BallMachine {
  constructor(game, mesh) {
    this.game = game;
    this.mesh = mesh;
    this.side = AI;
    this.opts = { ...PRACTICE_DEFAULTS };
    this.x = 0;
    this.z = MACHINE_Z;
    this.resetCounts();
    this.resetSession();
    this.reset();
  }

  // A new practice session: milestone coins start over (resetting the
  // counts mid-session doesn't).
  resetSession() {
    this.session = { perfects: 0, landed: 0, paid: new Set(), coins: 0, lines: [] };
  }

  // Pays a milestone once per session (via game.onPracticeCoins).
  reward(key, n, label) {
    const s = this.session;
    if (s.paid.has(key)) return;
    s.paid.add(key);
    s.coins += n;
    s.lines.push([label, n]);
    if (this.game.onPracticeCoins) this.game.onPracticeCoins(n, label);
  }

  resetCounts() {
    this.counts = { perfect: 0, great: 0, good: 0, early: 0, late: 0, miss: 0 };
    this.fed = 0;
    this.returned = 0;
    this.landed = 0;
    this.streak = 0;
    this.bestStreak = 0;
  }

  reset() {
    this.nextFeed = this.game.time + 1.4;
    this.fedAt = -1;
    this.judged = true;
    this.aimYaw = 0;
    this.kick = 0;
    this.flash = 0;
  }

  setOptions(o) {
    Object.assign(this.opts, o);
  }

  // Controller hooks the game calls.
  onServeSetup() {}
  onPointEnd() {}
  onBallStruck() {}

  update(dt) {
    const g = this.game;
    const r = g.rally;
    if (r.phase === 'serve') {
      // Waiting for the first feed: the ball sits in the nozzle.
      const m = mouth(this.aimYaw);
      g.holdBall(AI, m.x, m.y, m.z);
    }
    // A fed ball that got past you without a swing is a miss.
    if (!this.judged && r.lastHitter === AI && g.ball.pz > g.human.z + 0.3) this.judge('miss');
    const waited = g.time - this.fedAt;
    const done = this.judged || waited > 4;
    if (g.time >= this.nextFeed && done) {
      if (!this.judged) this.judge('miss');
      this.feed();
    }
    this.animate(dt);
  }

  feed() {
    const g = this.game;
    const o = this.opts;
    const speed = pick(PRACTICE_OPTIONS.speed, o.speed)[2];
    const spinKind = o.spin === 'random' ? ['none', 'top', 'back'][(Math.random() * 3) | 0] : o.spin;
    const top = spinKind === 'top' ? rand(300, 420) : spinKind === 'back' ? -rand(250, 340) : rand(-30, 30);
    // Left / right as you see it from your end.
    const tx = o.place === 'left' ? -0.45 : o.place === 'right' ? 0.45 : o.place === 'middle' ? 0 : rand(-0.55, 0.55);
    const tz = rand(0.8, 1.1);
    // Swivel towards the target and fire from where the nozzle mouth is.
    this.aimYaw = Math.atan2(tx, tz - MACHINE_Z);
    const m = mouth(this.aimYaw);
    const sol = solveShot(m.x, m.y, m.z, tx + rand(-0.05, 0.05), tz, {
      speed: speed * rand(0.95, 1.05), top, side: 0, dirSign: 1, serve: false, margin: 0.04,
    }, this._sol || (this._sol = {}));
    const b = g.ball;
    b.px = m.x; b.py = m.y; b.pz = m.z;
    b.vx = sol.vx; b.vy = sol.vy; b.vz = sol.vz;
    b.wx = sol.wx; b.wy = sol.wy; b.wz = sol.wz;
    const r = g.freshRally(AI);
    r.phase = 'play';
    r.lastHitter = AI;
    r.hits = 1;
    r.lastHitTime = g.time;
    g.rally = r;
    g.trail.reset();
    g.audio.machine();
    this.fed++;
    this.fedAt = g.time;
    this.judged = false;
    this.nextFeed = g.time + pick(PRACTICE_OPTIONS.rate, o.rate)[2];
    this.kick = 1;
    this.flash = 1;
  }

  // Grade one fed ball: perfect / great / good / early / late / miss.
  judge(kind) {
    if (this.judged) return;
    this.judged = true;
    this.counts[kind]++;
    this.streak = kind === 'perfect' ? this.streak + 1 : 0;
    this.bestStreak = Math.max(this.bestStreak, this.streak);
    if (kind === 'perfect') {
      const C = PRACTICE_COINS;
      const n = ++this.session.perfects;
      if (n % C.perfectsEvery === 0) this.reward(`perfects${n}`, C.perfects, `${n} PERFECTs`);
      for (const [len, coins] of C.streaks) if (this.streak === len) this.reward(`streak${len}`, coins, `${len} PERFECTs in a row`);
    }
    if (kind === 'miss') this.game.ui.pop('MISS', 'bad');
    this.game.ui.updatePractice(this);
  }

  // Your hit, graded by timing quality q (and the EARLY/LATE label).
  onPlayerHit(q, label) {
    this.returned++;
    this.judge(q >= 0.9 ? 'perfect' : q >= 0.7 ? 'great' : q >= 0.45 ? 'good' : label === 'EARLY' ? 'early' : 'late');
  }

  onPlayerReturnLanded() {
    this.landed++;
    const n = ++this.session.landed;
    for (const [at, coins] of PRACTICE_COINS.landed) if (n === at) this.reward(`landed${at}`, coins, `${at} returns on the table`);
    this.game.ui.updatePractice(this);
  }

  animate(dt) {
    const ud = this.mesh.userData;
    ud.head.rotation.y += (this.aimYaw - ud.head.rotation.y) * damp(10, dt);
    this.kick = Math.max(0, this.kick - dt * 6);
    ud.nozzle.position.z = ud.nozzleZ - 0.05 * this.kick;
    this.flash = Math.max(0, this.flash - dt * 4);
    // Calm (no glow) at rest; it flashes as it fires, which cues each ball.
    ud.glowMat.color.copy(ud.glowBase).multiplyScalar(0.8 + 1.6 * this.flash);
  }
}

