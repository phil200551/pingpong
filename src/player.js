import * as THREE from 'three';
import { HALF_L, HALF_W, STRIKE_T, SWING_T, SWING_COOLDOWN, PLAYER, AI } from './config.js';
import { Path, predictPath, topspinOf } from './physics.js';
import { clamp, lerp, gauss, damp, smooth } from './util.js';

const EYE = 1.38;
const HIT_AHEAD = 0.55;     // the ideal contact plane is this far in front of you
const REACH_FWD = 0.6;     // how far in front of that plane you can still reach
const REACH_BACK = 0.4;    // ...and behind it
const REACH_RIGHT = 0.98;
const REACH_LEFT = 0.88;
const PERFECT_BAND = 0.16;
const V1 = new THREE.Vector3(), V2 = new THREE.Vector3(), V3 = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

// Shot steering. How you're moving when the paddle meets the ball decides
// where the ball goes: A/D send it to the left/right side of their table,
// W hits harder (and a little deeper), S softer (and a little shorter).
const AIM_SIDE = 0.46;     // m from the centre line; the table's half-width is 0.76
const AIM_DEPTH = 0.86;    // m past the net on their side; the end line is at 1.37
const AIM_PUSH = 0.16;     // how much deeper / shorter W / S make it
const SAFE_X = HALF_W - 0.1;
const SAFE_NEAR = 0.3, SAFE_FAR = HALF_L - 0.12;

// You. WASD moves (and steers your shot as you hit), Space swings
// (hold Shift for a backspin chop).
export class HumanController {
  constructor(game, input, paddle, arm) {
    this.game = game;
    this.input = input;
    this.paddle = paddle;
    this.arm = arm;
    this.side = PLAYER;
    this.path = new Path(1.8, 1 / 240);
    this.forecast = { valid: false, t: 0, x: 0, y: 0, z: 0, reachable: false };
    this.reset();
  }

  reset() {
    this.x = 0.1;
    this.z = 2.05;
    this.vx = 0;
    this.vz = 0;
    this.swingT = -1;
    this.swingKind = 'drive';
    this.swingDone = false;
    this.cooldown = 0;
    this.camLook = new THREE.Vector3(0, 0.85, -1.6);
    this.paddlePos = new THREE.Vector3(0.3, 1.05, 1.6);
    this.backhand = false;
    this.bob = 0;
  }

  onServeSetup() {
    this.swingT = -1;
    this.swingDone = false;
  }

  onBallStruck() {}
  onPointEnd() {}

  get hitPlaneZ() {
    return this.z - HIT_AHEAD;
  }

  update(dt) {
    const g = this.game;
    const inp = this.input;
    const r = g.rally;

    // --- movement (WASD), with a little acceleration so it feels weighty
    let mx = 0, mz = 0;
    if (inp.isDown('KeyA')) mx -= 1;
    if (inp.isDown('KeyD')) mx += 1;
    if (inp.isDown('KeyW')) mz -= 1;
    if (inp.isDown('KeyS')) mz += 1;
    const ml = Math.hypot(mx, mz) || 1;
    const maxV = 3.3;
    const tvx = (mx / ml) * maxV, tvz = (mz / ml) * maxV;
    const acc = damp(14, dt);
    this.vx += (tvx - this.vx) * acc;
    this.vz += (tvz - this.vz) * acc;
    this.x += this.vx * dt;
    this.z += this.vz * dt;
    const serving = (r.phase === 'serve' || r.phase === 'toss') && r.server === PLAYER;
    const minZ = serving ? HALF_L + 0.52 : HALF_L + 0.1;
    if (this.x < -1.8) { this.x = -1.8; this.vx = 0; }
    if (this.x > 1.8) { this.x = 1.8; this.vx = 0; }
    if (this.z < minZ) { this.z = minZ; this.vz = Math.max(0, this.vz); }
    if (this.z > 3.3) { this.z = 3.3; this.vz = 0; }

    // --- serve: hand holds the ball, Space tosses it
    const swingKey = inp.wasPressed('Space') || inp.mousePressed[0] || inp.mousePressed[2];
    const chop = inp.isDown('ShiftLeft') || inp.isDown('ShiftRight') || inp.mouseDown[2] || inp.mousePressed[2];
    if (r.phase === 'serve' && r.server === PLAYER) {
      g.holdBall(PLAYER, this.x + 0.12, 1.1, this.z - 0.5);
      if (swingKey && g.canServe()) g.toss(PLAYER);
    } else if (swingKey && this.cooldown <= 0) {
      this.swingT = 0;
      this.swingDone = false;
      this.swingKind = chop ? 'chop' : 'drive';
      this.cooldown = SWING_COOLDOWN;
      g.audio.whoosh(0.8);
    }
    this.cooldown -= dt;

    this.updateForecast();

    // --- swing & contact
    if (this.swingT >= 0) {
      const prev = this.swingT;
      this.swingT += dt;
      if (!this.swingDone) {
        if (prev < STRIKE_T && this.swingT >= STRIKE_T) {
          this.tryContact(false);
        } else if (this.swingT > STRIKE_T && this.swingT < STRIKE_T + 0.14) {
          this.tryContact(true);
        } else if (this.swingT >= STRIKE_T + 0.14) {
          this.swingDone = true;
        }
      }
      if (this.swingT > SWING_T + 0.12) this.swingT = -1;
    }

    this.animate(dt);
  }

  // Where and when the incoming ball will cross your contact plane.
  updateForecast() {
    const g = this.game;
    const r = g.rally;
    const f = this.forecast;
    f.valid = false;
    if (r.phase !== 'play' || r.lastHitter !== AI) return;
    const zc = this.hitPlaneZ;
    if (g.ball.pz > zc + REACH_BACK) return; // already past you
    const path = predictPath(g.ball, this.path, 1.6);
    let bounced = r.bounces[PLAYER] > 0;
    for (let i = 1; i < path.n; i++) {
      if (path.ev[i] & 1) {
        if (path.z[i] > 0) {
          if (bounced) return;
          bounced = true;
        }
      }
      if (bounced && path.z[i] >= zc) {
        f.valid = true;
        f.t = i * path.dt;
        f.x = path.x[i]; f.y = path.y[i]; f.z = path.z[i];
        const lx = f.x - this.x;
        f.reachable = lx <= REACH_RIGHT && lx >= -REACH_LEFT && f.y > 0.7 && f.y < 2.0;
        return;
      }
    }
  }

  tryContact(followThrough) {
    const g = this.game;
    const r = g.rally;
    const b = g.ball;
    if (r.phase === 'toss' && r.server === PLAYER) {
      // Serve: judge the toss timing by the ball's height as it drops.
      const dx = b.px - this.x, dz = b.pz - this.hitPlaneZ;
      if (Math.abs(dx) > 0.7 || Math.abs(dz) > 0.6) return;
      let q = clamp(1 - Math.max(0, Math.abs(b.py - 1.04) - 0.05) / 0.35, 0.1, 1);
      if (b.vy > 0) q *= 0.8;
      this.swingDone = true;
      this.play(q, q >= 0.9 ? 'PERFECT SERVE' : null, true);
      return;
    }
    if (r.phase !== 'play' || r.lastHitter === PLAYER) return;
    const dz = b.pz - this.hitPlaneZ;      // < 0: ball still in front of the sweet spot
    const lx = b.px - this.x;
    const inZone = dz > -REACH_FWD && dz < REACH_BACK && lx < REACH_RIGHT && lx > -REACH_LEFT &&
      b.py > 0.68 && b.py < 2.05;
    if (!inZone) {
      if (!followThrough && dz >= REACH_BACK && dz < 1.2 && b.vz > 0) {
        this.swingDone = true;
        g.onWhiff(PLAYER, 'LATE!');
      }
      return;
    }
    this.swingDone = true;
    const off = Math.max(0, Math.abs(dz) - PERFECT_BAND);
    let qt = 1 - off / (REACH_FWD - PERFECT_BAND + 0.05);
    if (followThrough) qt *= 0.6;
    const sweet = Math.min(Math.abs(lx - 0.33), Math.abs(lx + 0.3));
    const ql = 1 - 0.3 * clamp((sweet - 0.14) / 0.5, 0, 1);
    const q = clamp(qt * ql, 0.08, 1);
    let label = null;
    if (q < 0.45) label = dz < 0 ? 'EARLY' : 'LATE';
    this.play(q, label, false);
  }

  // Which way you're moving right now: side -1 (A) .. +1 (D), power -1 (S) .. +1 (W).
  steer() {
    const inp = this.input;
    return {
      side: (inp.isDown('KeyD') ? 1 : 0) - (inp.isDown('KeyA') ? 1 : 0),
      power: (inp.isDown('KeyW') ? 1 : 0) - (inp.isDown('KeyS') ? 1 : 0),
    };
  }

  play(q, label, serve) {
    const g = this.game;
    const b = g.ball;
    const chop = this.swingKind === 'chop';
    const { side, power } = this.steer();
    const shot = { kind: chop ? 'chop' : 'drive', serve, quality: q, label, margin: 0.02, vyErr: 0, power };
    // Where it's going: straight down the middle unless you're moving.
    let tx = side * AIM_SIDE;
    let tz = -(AIM_DEPTH + power * AIM_PUSH);
    if (serve) {
      shot.kind = chop ? 'chop' : 'serve';
      shot.speed = (chop ? lerp(4.3, 6, q) : lerp(4.6, 7.6, q)) * (1 + 0.2 * power);
      shot.top = chop ? -(40 + 60 * q) : 15 + 50 * q;
      tz = -(0.9 + power * 0.25); // W: long fast serve, S: short soft one
    } else if (chop) {
      shot.speed = lerp(5.4, 8.6, q) * (1 + 0.2 * power);
      shot.top = -(45 + 60 * q);
    } else if (q >= 0.82 && b.py > 1.1) {
      shot.kind = 'smash';
      shot.speed = 18.5 + 4 * (q - 0.82) / 0.18 + (power > 0 ? 1.5 : 0);
      shot.top = 60;
    } else {
      // W hits harder, S softer.
      shot.speed = lerp(7.2, 14.8, Math.pow(q, 1.2)) * (power > 0 ? 1.28 : power < 0 ? 0.76 : 1);
      shot.top = 30 + 95 * q + power * 25;
    }
    // Moving sideways as you swing also brushes a little sidespin onto the ball.
    shot.side = clamp(-this.vx * 28, -90, 90);
    // Sloppy timing scatters the shot; incoming spin kicks it long or short.
    const scatter = 0.02 + Math.pow(1 - q, 1.6) * 0.4;
    tx += gauss() * scatter * 0.7;
    tz += gauss() * scatter;
    if (!serve) {
      const incTop = topspinOf(b);
      const spinKick = incTop * 0.0026 * (1 - 0.75 * q) * (chop ? 0.4 : 1);
      tz -= spinKick;
      shot.vyErr = (gauss() * Math.pow(1 - q, 2) * 0.6 * (9 / shot.speed) + Math.min(0, spinKick) * 0.8) * (q >= 0.45 ? 0.5 : 1);
    }
    // A decently timed shot always stays inside the lines; only a badly
    // mistimed one can sail out or find the net.
    if (q >= 0.45) {
      tx = clamp(tx, -SAFE_X, SAFE_X);
      tz = clamp(tz, -SAFE_FAR, -SAFE_NEAR);
    }
    shot.tx = tx;
    shot.tz = tz;
    g.strike(PLAYER, shot);
  }

  // ---------------------------------------------------------------- visuals
  animate(dt) {
    const g = this.game;
    const r = g.rally;
    const f = this.forecast;
    // Paddle rest pose: low on your right, in front of you.
    let px = this.x + 0.3, py = 1.1, pz = this.z - 0.5;
    let wantBackhand = false;
    if (f.valid) {
      const w = clamp(1 - (f.t - 0.12) / 0.55, 0, 1);
      const cx = clamp(f.x, this.x - REACH_LEFT, this.x + REACH_RIGHT);
      const cy = clamp(f.y, 0.75, 1.85);
      wantBackhand = cx < this.x - 0.02;
      px = lerp(px, cx, w);
      py = lerp(py, cy, w);
      pz = lerp(pz, this.hitPlaneZ + 0.02, w);
    } else if (r.phase === 'serve' && r.server === PLAYER) {
      px = this.x + 0.36; py = 1.03; pz = this.z - 0.5;
    } else if (r.phase === 'toss' && r.server === PLAYER) {
      px = g.ball.px + 0.05;
      py = clamp(g.ball.py, 0.9, 1.1);
      pz = this.hitPlaneZ + 0.05;
    }
    if (this.swingT < 0) this.backhand = wantBackhand;
    const dir = this.backhand ? -1 : 1;
    let ox = 0, oy = 0, oz = 0, yaw = 0, pitch = 0;
    if (this.swingT >= 0) {
      const t = this.swingT;
      const chop = this.swingKind === 'chop';
      if (t < STRIKE_T) {
        const k = 1 - smooth(t / STRIKE_T);
        ox = dir * 0.2 * k; oy = (chop ? 0.15 : -0.12) * k; oz = 0.28 * k;
        yaw = dir * 0.7 * k;
      } else {
        const k = smooth(clamp((t - STRIKE_T) / (SWING_T - STRIKE_T), 0, 1));
        const back = clamp((t - SWING_T) / 0.12, 0, 1);
        const e = k * (1 - back);
        ox = -dir * 0.38 * e; oy = (chop ? -0.18 : 0.3) * e; oz = -0.32 * e;
        yaw = -dir * 0.9 * e;
        pitch = (chop ? 0.6 : -0.5) * e;
      }
    }
    const a = damp(this.swingT >= 0 ? 70 : 16, dt);
    this.paddlePos.x += (px - this.paddlePos.x) * a;
    this.paddlePos.y += (py - this.paddlePos.y) * a;
    this.paddlePos.z += (pz - this.paddlePos.z) * a;
    const pd = this.paddle;
    pd.position.set(this.paddlePos.x + ox, this.paddlePos.y + oy, this.paddlePos.z + oz);
    pd.rotation.set(-0.25 + pitch, yaw + (this.backhand ? 0.25 : -0.25), this.backhand ? 0.75 : -0.55);

    // Your forearm, from just below and right of your eyes to the handle.
    if (this.arm) {
      const shoulder = V1.set(this.x + 0.24, EYE - 0.42, this.z + 0.12);
      const hand = V2.set(0, -0.15, 0).applyEuler(pd.rotation).add(pd.position);
      const dir = V3.copy(hand).sub(shoulder);
      const len = dir.length();
      this.arm.position.copy(shoulder).addScaledVector(dir, 0.5);
      this.arm.quaternion.setFromUnitVectors(UP, dir.normalize());
      this.arm.scale.set(1, len, 1);
    }

    // Camera at your eyes, looking down the table with a hint of ball tracking.
    const sp = Math.hypot(this.vx, this.vz);
    this.bob += dt * sp * 3.2;
    const cam = g.world.camera;
    const sh = g.shake;
    cam.position.set(this.x + sh.x, EYE + Math.sin(this.bob * 2) * 0.012 * Math.min(1, sp) + sh.y, this.z);
    const ball = g.ball;
    const lookX = lerp(this.x * 0.3, ball.px, 0.18);
    const lookY = lerp(0.82, ball.py, 0.12);
    const lookZ = lerp(-1.5, ball.pz, 0.08);
    const la = damp(5, dt);
    this.camLook.x += (lookX - this.camLook.x) * la;
    this.camLook.y += (lookY - this.camLook.y) * la;
    this.camLook.z += (lookZ - this.camLook.z) * la;
    const fov = g.settings.fov + g.intensity * 5 + sh.trauma * sh.trauma * 4;
    if (Math.abs(cam.fov - fov) > 0.02) {
      cam.fov = fov;
      cam.updateProjectionMatrix();
    }
    cam.up.set(Math.sin(sh.roll - this.vx * 0.008), 1, 0).normalize();
    cam.lookAt(this.camLook);
  }
}
