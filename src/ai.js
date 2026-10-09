import * as THREE from 'three';
import { HALF_L, STRIKE_T, SWING_T, SPIN_REF, sideSign, otherSide } from './config.js';
import { Path, predictPath, makeBall, copyBall, topspinOf } from './physics.js';
import { clamp, lerp, rand, gauss, damp, smooth } from './util.js';

const perceived = makeBall();
const V1 = new THREE.Vector3(), V2 = new THREE.Vector3(), V3 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

// Watch mode: how a bot is playing today. f > 0 is a good day (quicker
// reactions and feet, sharper reads, cleaner strokes, fewer errors), f < 0 a
// bad one. Applied to a copy of the profile, so the ladder bots never change.
export function formProfile(p, f) {
  const e = Math.exp;
  return {
    ...p,
    reaction: p.reaction * e(-FORM.reaction * f),
    readNoise: p.readNoise * e(-FORM.readNoise * f),
    errorRate: p.errorRate * e(-FORM.errorRate * f),
    aimError: p.aimError * e(-FORM.aimError * f),
    maxSpeed: p.maxSpeed * e(FORM.move * f),
    accel: p.accel * e(FORM.move * f),
    quality: [clamp(p.quality[0] + FORM.quality * f, 0.2, 0.95), p.quality[1]],
    serve: { ...p.serve, errorRate: p.serve.errorRate * e(-FORM.errorRate * f) },
  };
}
// How much form moves each trait, and its spread (sd) from game to game.
// timing = spread of swing timing in seconds (skill 0 .. skill 1).
export const FORM = {
  sd: 0.8, reaction: 0.15, readNoise: 0.31, errorRate: 0.56, aimError: 0.19, move: 0.06, quality: 0.06,
  timing: [0.018, 0.006],
};

// A computer opponent that plays like a person: it needs time to react, it
// misreads the ball at first and refines its read as the ball approaches, it
// has to physically run to the ball, and its stroke quality varies.
export class AIController {
  constructor(game, side, profile, paddle, body) {
    this.game = game;
    this.side = side;
    this.s = sideSign(side);
    this.p = profile;
    this.paddle = paddle;
    this.body = body;
    this.path = new Path(2.2, 1 / 120);
    this.base = profile;
    // Watch mode turns on day-to-day form, momentum and swing-timing jitter
    // so bot-vs-bot matches aren't foregone conclusions.
    this.vary = false;
    this.form = 0;
    this.mood = 0;
    this.timingErr = 0;
    this.reset();
  }

  setProfile(p) {
    this.base = p;
    this.p = p;
    this.form = 0;
    this.mood = 0;
  }

  // A fresh game: a new form for the day and a clear head.
  setForm(f) {
    this.form = f;
    this.mood = 0;
    this.applyForm();
  }

  applyForm() {
    this.p = this.vary ? formProfile(this.base, this.form + this.mood) : this.base;
  }

  reset() {
    this.x = 0;
    this.z = this.s * 2.1;
    this.vx = 0;
    this.vz = 0;
    this.plan = null;
    this.reactAt = Infinity;
    this.noise = { x: 0, y: 0, z: 0 };
    this.replanAt = 0;
    this.swingT = -1;
    this.swingDir = 1;
    this.struck = false;
    this.serveAt = 0;
    this.serveSpot = { x: 0, z: this.s * 1.75 };
    this.tossed = false;
    this.paddlePos = new THREE.Vector3(this.x, 1, this.z - this.s * 0.4);
    this.paddleBlend = 0;
    this.lean = 0;
    this.celebrate = 0;
  }

  // ------------------------------------------------------------------ events
  onServeSetup() {
    const g = this.game;
    this.plan = null;
    this.swingT = -1;
    this.tossed = false;
    if (g.rally.server === this.side) {
      this.serveSpot.x = clamp(rand(-0.45, 0.45) * (0.4 + this.p.cornerBias), -0.5, 0.5);
      this.serveSpot.z = this.s * rand(1.68, 1.85);
      this.serveAt = g.time + rand(0.9, 1.6);
    }
  }

  onBallStruck(by) {
    this.plan = null;
    if (by === this.side) return;
    const p = this.p;
    this.reactAt = this.game.time + p.reaction * rand(0.8, 1.25);
    this.replanAt = this.reactAt;
    // How badly the ball is misread at first (gets better as it approaches).
    const ball = this.game.ball;
    const spd = Math.hypot(ball.vx, ball.vz);
    const k = p.readNoise * (0.7 + spd / 14);
    this.noise.x = gauss() * k * 0.8;
    this.noise.y = gauss() * k * 0.5;
    this.noise.z = gauss() * k;
    this.readStart = this.reactAt;
    // Nobody swings at exactly the same moment twice: + early, - late.
    this.timingErr = this.vary ? gauss() * lerp(FORM.timing[0], FORM.timing[1], p.skill) : 0;
  }

  onPointEnd(won) {
    this.plan = null;
    this.swingT = -1;
    this.celebrate = won ? 1 : -0.6;
    if (this.vary) {
      // Momentum: winning points lifts a bot a little, losing them knocks it.
      this.mood = 0.8 * this.mood + (won ? 0.1 : -0.1) + gauss() * 0.08;
      this.applyForm();
    }
  }

  // ----------------------------------------------------------------- update
  update(dt) {
    const g = this.game;
    const r = g.rally;
    let tx = this.x, tz = this.z;
    let urgent = false;

    if ((r.phase === 'serve' || r.phase === 'toss') && r.server === this.side) {
      tx = this.serveSpot.x;
      tz = this.serveSpot.z;
      if (r.phase === 'serve') {
        g.holdBall(this.side, this.x + this.handX() * 0.6, 1.1, this.z - this.s * 0.32);
        const settled = Math.hypot(this.x - tx, this.z - tz) < 0.08;
        if (g.time > this.serveAt && settled && g.canServe()) {
          g.toss(this.side);
        }
      } else if (r.phase === 'toss') {
        const b = g.ball;
        if (this.swingT < 0 && b.vy < 0 && b.py < 1.2 + this.p.quality[0] * 0.05) this.startSwing(1);
        if (this.swingT >= STRIKE_T && !this.struck) {
          this.struck = true;
          this.serve();
        }
      }
    } else if (r.phase === 'play' && r.lastHitter !== this.side && g.time >= this.reactAt) {
      if (g.time >= this.replanAt && this.swingT < 0) {
        this.replan();
        this.replanAt = g.time + 0.07;
      }
      if (this.plan) {
        tx = this.plan.bodyX;
        tz = this.plan.bodyZ;
        urgent = true;
        const tt = this.plan.hitTime - g.time;
        if (this.swingT < 0 && tt <= STRIKE_T + 0.004 + this.timingErr) {
          this.startSwing(this.plan.forehand ? 1 : -1);
        }
      }
      if (this.swingT >= STRIKE_T - 0.02 && !this.struck && this.swingT <= STRIKE_T + 0.07) {
        if (this.tryStrike()) this.struck = true;
      }
    } else {
      // Recover to a ready position, shading towards the opponent's side.
      const opp = g.controllers[otherSide(this.side)];
      tx = clamp(opp.x * 0.25, -0.4, 0.4);
      tz = this.s * (this.p.stance ?? lerp(2.25, 1.95, this.p.cornerBias));
      if (r.phase === 'serve' && r.server !== this.side) tz = this.s * 2.0;
    }

    this.move(dt, tx, tz, urgent);

    if (this.swingT >= 0) {
      this.swingT += dt;
      if (this.swingT > SWING_T + 0.1) this.swingT = -1;
    }
    this.animate(dt);
  }

  handX() {
    // Right hand. Facing -z (player side) right is +x; facing +z it's -x.
    return this.s * 0.3;
  }

  startSwing(dir) {
    this.swingT = 0;
    this.swingDir = dir;
    this.struck = false;
  }

  move(dt, tx, tz, urgent) {
    const p = this.p;
    // Never walk into the table.
    const minZ = HALF_L + 0.15;
    if (this.s > 0) tz = Math.max(tz, minZ); else tz = Math.min(tz, -minZ);
    tx = clamp(tx, -2.2, 2.2);
    const dx = tx - this.x, dz = tz - this.z;
    const d = Math.hypot(dx, dz);
    const maxV = p.maxSpeed * (urgent ? 1 : 0.55);
    const want = Math.min(maxV, d * (urgent ? 6 : 3));
    const wx = d > 1e-4 ? (dx / d) * want : 0;
    const wz = d > 1e-4 ? (dz / d) * want : 0;
    const ax = clamp((wx - this.vx) / dt, -p.accel, p.accel);
    const az = clamp((wz - this.vz) / dt, -p.accel, p.accel);
    this.vx += ax * dt;
    this.vz += az * dt;
    this.x += this.vx * dt;
    this.z += this.vz * dt;
  }

  // Predict where to meet the ball, from a (noisy) read of its flight.
  replan() {
    const g = this.game;
    const p = this.p;
    copyBall(perceived, g.ball);
    const f = Math.exp(-(g.time - this.readStart) * 3.2);
    perceived.vx += this.noise.x * f;
    perceived.vy += this.noise.y * f;
    perceived.vz += this.noise.z * f;
    const path = predictPath(perceived, this.path, 2.0);
    const s = this.s;
    let bounced = g.rally.bounces[this.side] > 0;
    let best = null, bestCost = Infinity;
    for (let i = 1; i < path.n; i++) {
      if (path.ev[i] & 1) {
        if (path.z[i] * s > 0) {
          if (bounced) break; // second bounce: too late
          bounced = true;
        } else if (!bounced) {
          continue;
        }
      }
      if (!bounced) continue;
      const bx = path.x[i], by = path.y[i], bz = path.z[i];
      if (bz * s < 0.55) continue;
      if (by < 0.74 || by > 1.85) continue;
      const t = i * path.dt;
      // Body placement: behind the ball, holding the paddle on the side closer to us.
      const fhX = bx - this.handX();
      const bhX = bx + this.handX();
      const forehand = Math.abs(fhX - this.x) <= Math.abs(bhX - this.x) + 0.25;
      const bodyX = forehand ? fhX : bhX;
      let bodyZ = bz + s * 0.38;
      if (bodyZ * s < HALF_L + 0.15) bodyZ = s * (HALF_L + 0.15);
      const reachDepth = (bodyZ - bz) * s;
      if (reachDepth > 0.95) continue;
      const dist = Math.hypot(bodyX - this.x, bodyZ - this.z);
      const travel = dist / p.maxSpeed + 0.12;
      const late = Math.max(0, travel - t);
      const cost = Math.abs(by - p.preferHeight) * 1.4 + late * 6 + Math.abs(reachDepth - 0.38) * 0.3 + t * 0.05;
      if (cost < bestCost) {
        bestCost = cost;
        best = { hitTime: g.time + t, bodyX, bodyZ, cx: bx, cy: by, cz: bz, forehand };
      }
    }
    this.plan = best;
  }

  tryStrike() {
    const g = this.game;
    const b = g.ball;
    const r = g.rally;
    if (r.bounces[this.side] < 1) return false;
    const s = this.s;
    const lat = Math.abs(b.px - this.x);
    const depth = (this.z - b.pz) * s; // ball in front of us
    if (lat > this.p.reach || depth < -0.05 || depth > 1.0 || b.py < 0.66 || b.py > 2.0) return false;
    this.hit(lat, depth);
    return true;
  }

  // Decide and play a return shot.
  hit(lat, depth) {
    const g = this.game;
    const p = this.p;
    const b = g.ball;
    const s = this.s;
    const opp = g.controllers[otherSide(this.side)];
    const incoming = Math.hypot(b.vx, b.vz);
    const spinIn = topspinOf(b) / SPIN_REF; // + topspin, - backspin
    const stretch = clamp((lat - 0.45) / 0.5, 0, 1);
    const pressure = (Math.max(0, incoming - 9) * 0.025 + stretch * 0.25 + Math.min(1.5, Math.abs(spinIn)) * 0.08 +
      Math.abs(depth - 0.38) * 0.15) * (1.2 - 0.6 * p.skill);
    // A mistimed swing (watch mode) costs stroke quality.
    let q = clamp(p.quality[0] + gauss() * p.quality[1] - pressure - Math.abs(this.timingErr) * 5, 0.05, 1);

    const shot = { kind: 'drive', speed: 8, top: 40, side: 0, tx: 0, tz: 0, vyErr: 0, quality: q, margin: 0.02 };
    const ts = -s; // target side sign
    // Placement
    // Better players aim deeper; nobody aims right at the end line.
    let depthT = p.depth ? rand(p.depth[0], p.depth[1]) : rand(0.62, 0.9 + 0.2 * p.cornerBias);
    let tx;
    if (p.placement === 'middle') {
      tx = rand(-0.18, 0.18);
    } else if (Math.random() < p.cornerBias) {
      const away = opp.x === 0 ? (Math.random() < 0.5 ? -1 : 1) : -Math.sign(opp.x);
      tx = away * rand(0.42, 0.64);
    } else {
      tx = rand(-0.4, 0.4);
    }

    // Spin in rad/s: harder opponents put more of it on (see the profiles).
    const r = Math.random();
    if (b.py > (p.smashHeight ?? 1.12) && q > 0.45 && r < p.smashChance) {
      shot.kind = 'smash';
      shot.speed = p.speed[1] + rand(2, 4);
      shot.top = 150;
      depthT = rand(0.8, 1.12);
    } else if (opp.z * ts > 2.3 && Math.random() < p.dropChance) {
      // The opponent is standing well back: drop it short over the net.
      shot.kind = 'drop';
      shot.speed = rand(3.4, 4.4);
      shot.top = -rand(120, 240);
      depthT = rand(0.28, 0.45);
    } else if (Math.random() < p.chopChance || (spinIn < -0.5 && Math.random() < 0.4)) {
      // Backspin chop (and the usual answer to heavy backspin).
      shot.kind = 'chop';
      shot.speed = rand(5.5, 8);
      const cs = p.chopSpin || [180, 180 + p.topspin[1] * 0.4];
      shot.top = -rand(cs[0], cs[1]);
    } else {
      shot.speed = lerp(p.speed[0], p.speed[1], clamp(q * rand(0.7, 1.15), 0, 1));
      shot.top = rand(p.topspin[0], p.topspin[1]);
    }
    shot.side = rand(-1, 1) * p.sidespin;

    // Players know their own consistency and leave a margin inside the lines.
    const err = p.aimError * (1.4 - q);
    tx = clamp(tx, -0.74 + err * 1.1, 0.74 - err * 1.1);
    depthT = clamp(depthT, 0.3, 1.3 - err * 1.3);
    shot.tx = clamp(tx + gauss() * err, -0.95, 0.95);
    shot.tz = ts * clamp(depthT + gauss() * err * 1.2, 0.2, 1.6);
    // Incoming topspin kicks the return long, backspin drags it short/into the
    // net. Skilled players partly read and cancel it.
    const spinKick = spinIn * 0.3 * (1 - q * 0.8) * (shot.kind === 'chop' ? 0.4 : 1) * (1 - 0.7 * (p.spinRead ?? p.skill));
    shot.tz += ts * spinKick;
    shot.vyErr = gauss() * (1 - q) * 0.25 * (9 / shot.speed) + Math.min(0, spinKick) * 0.8;

    // Unforced errors: nerves, mistimed contact, overhit.
    // Nerves: long rallies make everyone a little shakier.
    const nerves = 1 + Math.min(1, g.rally.hits / 30);
    if (Math.random() < p.errorRate * (1 + pressure * 2) * nerves) {
      const e = Math.random();
      if (e < 0.4) shot.vyErr -= rand(0.5, 1.0);
      else if (e < 0.75) shot.vyErr += rand(0.6, 1.3);
      else shot.tx = Math.sign(shot.tx || 1) * rand(0.82, 1.05);
    }
    g.strike(this.side, shot);
  }

  serve() {
    const g = this.game;
    const p = this.p;
    const sv = p.serve;
    const ts = -this.s;
    const short = Math.random() < 0.35;
    const shot = {
      kind: 'serve',
      serve: true,
      speed: short ? rand(4.2, 5.2) : rand(sv.speed[0], sv.speed[1]),
      top: rand(-1, 0.6) * sv.spin,
      side: rand(-1, 1) * sv.spin * 0.5,
      tx: rand(-0.55, 0.55),
      tz: ts * (short ? rand(0.35, 0.6) : rand(0.8, 1.12)),
      vyErr: 0,
      quality: clamp(p.quality[0] + gauss() * 0.1, 0.2, 1),
      margin: 0.015,
    };
    shot.vyErr = gauss() * 0.03;
    if (Math.random() < sv.errorRate) shot.vyErr = Math.random() < 0.5 ? -rand(0.6, 1.0) : rand(0.8, 1.4);
    g.strike(this.side, shot);
  }

  // --------------------------------------------------------------- visuals
  animate(dt) {
    const g = this.game;
    const s = this.s;
    const hx = this.handX();
    // Paddle: rest in front of the body, track towards the planned contact point.
    let px = this.x + hx, py = 1.0, pz = this.z - s * 0.35;
    if (this.plan && this.game.rally.phase === 'play') {
      const tt = this.plan.hitTime - g.time;
      const w = clamp(1 - (tt - 0.1) / 0.5, 0, 1);
      px = lerp(px, this.plan.cx, w);
      py = lerp(py, this.plan.cy, w);
      pz = lerp(pz, this.plan.cz + s * 0.05, w);
    } else if (g.rally.phase === 'toss' && g.rally.server === this.side) {
      px = g.ball.px + hx * 0.3;
      py = Math.min(g.ball.py, 1.05);
      pz = g.ball.pz + s * 0.06;
    }
    // Swing offsets
    let ox = 0, oy = 0, oz = 0, yaw = 0;
    if (this.swingT >= 0) {
      const dir = this.swingDir * (s > 0 ? 1 : -1);
      const t = this.swingT;
      if (t < STRIKE_T) {
        const k = 1 - smooth(t / STRIKE_T);
        ox = dir * 0.15 * k; oy = -0.1 * k; oz = s * 0.25 * k;
        yaw = 0.6 * k * this.swingDir;
      } else {
        const k = smooth(clamp((t - STRIKE_T) / (SWING_T - STRIKE_T), 0, 1));
        const back = clamp((t - SWING_T) / 0.1, 0, 1);
        ox = -dir * 0.32 * k * (1 - back); oy = 0.26 * k * (1 - back); oz = -s * 0.3 * k * (1 - back);
        yaw = -0.8 * k * (1 - back) * this.swingDir;
      }
    }
    const a = damp(this.swingT >= 0 ? 60 : 14, dt);
    this.paddlePos.x += (px - this.paddlePos.x) * a;
    this.paddlePos.y += (py - this.paddlePos.y) * a;
    this.paddlePos.z += (pz - this.paddlePos.z) * a;
    const pd = this.paddle;
    pd.position.set(this.paddlePos.x + ox, this.paddlePos.y + oy, this.paddlePos.z + oz);
    pd.rotation.set(0.15 * s, (s > 0 ? 0 : Math.PI) + yaw, (this.paddlePos.x - this.x) * s > 0 ? -0.5 : 0.5);

    if (this.body) {
      const ud = this.body.userData;
      this.body.position.set(this.x, 0, this.z);
      this.body.rotation.y = s > 0 ? Math.PI : 0;
      this.lean += (clamp(this.vx * 0.12, -0.3, 0.3) - this.lean) * damp(8, dt);
      ud.torso.rotation.z = -this.lean * s;
      ud.torso.rotation.x = 0.15;
      if (ud.gear.halo.visible) ud.halo.rotation.z += dt * 2.4;
      this.celebrate *= Math.exp(-dt * 1.5);
      const hop = this.celebrate > 0 ? Math.abs(Math.sin(g.time * 12)) * 0.12 * this.celebrate : 0;
      this.body.position.y = hop + Math.sin(g.time * 3) * 0.01;
      const droop = this.celebrate < 0 ? -this.celebrate * 0.3 : 0;
      ud.head.rotation.x = droop;
      // Arm from shoulder to paddle handle (the arm lives in the body's space)
      const shoulder = V1.set(this.x + hx * 0.85, 1.42 + this.body.position.y, this.z);
      const dir = V2.copy(pd.position).sub(shoulder);
      dir.y -= 0.1;
      const len = dir.length();
      const mid = V3.copy(shoulder).addScaledVector(dir, 0.5).sub(this.body.position);
      mid.applyAxisAngle(UP, -this.body.rotation.y);
      ud.arm.position.copy(mid);
      dir.normalize().applyAxisAngle(UP, -this.body.rotation.y);
      ud.arm.quaternion.setFromUnitVectors(UP, dir);
      ud.arm.scale.set(1, len, 1);
      // Run cycle
      const sp = Math.hypot(this.vx, this.vz);
      const ph = g.time * 14;
      ud.legL.rotation.x = Math.sin(ph) * Math.min(0.6, sp * 0.3);
      ud.legR.rotation.x = -Math.sin(ph) * Math.min(0.6, sp * 0.3);
    }
  }
}

