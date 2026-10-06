import {
  TABLE_H, HALF_L, HALF_W, NET_TOP, NET_HALF_W, BALL_R, GRAVITY, DRAG, MAGNUS,
  SPIN_DECAY, TABLE_E, TABLE_MU, FLOOR_E,
} from './config.js';

// Ball state is a flat object of numbers so the hot loops never allocate.
// p = position, v = velocity, w = angular velocity (rad/s).
export function makeBall() {
  return { px: 0, py: 1, pz: 0, vx: 0, vy: 0, vz: 0, wx: 0, wy: 0, wz: 0 };
}

export function copyBall(dst, src) {
  dst.px = src.px; dst.py = src.py; dst.pz = src.pz;
  dst.vx = src.vx; dst.vy = src.vy; dst.vz = src.vz;
  dst.wx = src.wx; dst.wy = src.wy; dst.wz = src.wz;
  return dst;
}

export const EV_TABLE = 1;
export const EV_NET = 2;
export const EV_FLOOR = 4;

// Gravity, air drag and the Magnus force (spin x velocity). Semi-implicit Euler.
function integrate(b, dt) {
  const sp = Math.sqrt(b.vx * b.vx + b.vy * b.vy + b.vz * b.vz);
  const ax = -DRAG * sp * b.vx + MAGNUS * (b.wy * b.vz - b.wz * b.vy);
  const ay = -GRAVITY - DRAG * sp * b.vy + MAGNUS * (b.wz * b.vx - b.wx * b.vz);
  const az = -DRAG * sp * b.vz + MAGNUS * (b.wx * b.vy - b.wy * b.vx);
  b.vx += ax * dt; b.vy += ay * dt; b.vz += az * dt;
  const d = 1 - SPIN_DECAY * dt;
  b.wx *= d; b.wy *= d; b.wz *= d;
  b.px += b.vx * dt; b.py += b.vy * dt; b.pz += b.vz * dt;
}

// Bounce off the table with friction at the contact point. The ball is a hollow
// sphere (I = 2/3 m R^2); friction pushes the contact point towards rolling,
// which is what makes topspin kick forward and backspin check up.
export function bounceTable(b) {
  const vyIn = -b.vy;
  b.vy = vyIn * TABLE_E;
  // contact point velocity u = v + w x r, r = (0, -R, 0)
  const ux = b.vx + b.wz * BALL_R;
  const uz = b.vz - b.wx * BALL_R;
  const u = Math.sqrt(ux * ux + uz * uz);
  if (u > 1e-6) {
    let dv = 0.4 * u;
    const maxDv = TABLE_MU * (1 + TABLE_E) * vyIn;
    if (dv > maxDv) dv = maxDv;
    const dvx = (-ux / u) * dv;
    const dvz = (-uz / u) * dv;
    b.vx += dvx; b.vz += dvz;
    const k = 1 / ((2 / 3) * BALL_R * BALL_R);
    b.wx += -BALL_R * dvz * k;
    b.wz += BALL_R * dvx * k;
  }
}

// Ball meets the net. Clipping the white tape gives the classic "net cord":
// a thin clip trickles over, a fat one drops back.
function hitNet(b, ox, oy, oz) {
  const f = oz / (oz - b.pz);
  const cx = ox + (b.px - ox) * f;
  const cy = oy + (b.py - oy) * f;
  if (Math.abs(cx) > NET_HALF_W + BALL_R || cy > NET_TOP + BALL_R || cy < TABLE_H) return false;
  const dir = Math.sign(b.vz) || 1;
  const spd = Math.abs(b.vz);
  const tapeLow = NET_TOP - BALL_R * 0.6;
  if (cy > tapeLow) {
    const k = Math.min(1, (cy - tapeLow) / (BALL_R * 1.6));
    b.px = cx;
    b.py = Math.max(cy, NET_TOP + BALL_R * 0.3);
    b.vy = Math.abs(b.vy) * 0.2 + 0.5 + 1.0 * k;
    b.vx *= 0.5;
    if (k > 0.42) {
      b.vz = dir * (0.4 + spd * (0.12 + 0.3 * k));
      b.pz = dir * BALL_R * 1.2;
    } else {
      b.vz = -dir * (0.3 + spd * 0.1);
      b.pz = -dir * BALL_R * 1.2;
    }
    b.wx *= 0.3; b.wy *= 0.3; b.wz *= 0.3;
  } else {
    b.px = cx; b.py = cy;
    b.pz = -dir * BALL_R * 1.05;
    b.vz = -b.vz * 0.12;
    b.vx *= 0.35; b.vy *= 0.3;
    b.wx *= 0.2; b.wy *= 0.2; b.wz *= 0.2;
  }
  return true;
}

// Below this impact speed the ball is rolling, not bouncing (no event, so a
// dying ball doesn't fire a bounce every substep).
const REST_SPEED = 0.25;
function rest(b, dt) {
  b.vy = 0;
  const k = Math.exp(-dt * 1.5);
  b.vx *= k; b.vz *= k;
  b.wx *= k; b.wy *= k; b.wz *= k;
}

// Advance the ball by dt (keep dt small, ~2ms) and resolve collisions.
// Returns a bitmask of EV_* events that happened during the step.
export function stepBall(b, dt) {
  const ox = b.px, oy = b.py, oz = b.pz;
  integrate(b, dt);
  let ev = 0;
  if (oz !== 0 && (oz > 0) !== (b.pz > 0)) {
    if (hitNet(b, ox, oy, oz)) ev |= EV_NET;
  }
  const top = TABLE_H + BALL_R;
  if (b.vy < 0 && b.py < top && oy >= top - 0.004 &&
      Math.abs(b.px) <= HALF_W && Math.abs(b.pz) <= HALF_L) {
    b.py = top;
    if (b.vy < -REST_SPEED) {
      bounceTable(b);
      ev |= EV_TABLE;
    } else {
      rest(b, dt);
    }
  }
  if (b.py < BALL_R && b.vy < 0) {
    b.py = BALL_R;
    if (b.vy < -REST_SPEED) {
      b.vy = -b.vy * FLOOR_E;
      b.vx *= 0.8; b.vz *= 0.8;
      b.wx *= 0.5; b.wy *= 0.5; b.wz *= 0.5;
      ev |= EV_FLOOR;
    } else {
      rest(b, dt);
    }
  }
  return ev;
}

// ---------------------------------------------------------------------------
// Trajectory prediction (used by the AI, the timing guide and paddle tracking)

export class Path {
  constructor(maxT = 2.2, dt = 1 / 240) {
    this.dt = dt;
    this.cap = Math.ceil(maxT / dt) + 1;
    this.x = new Float32Array(this.cap);
    this.y = new Float32Array(this.cap);
    this.z = new Float32Array(this.cap);
    this.ev = new Uint8Array(this.cap);
    this.n = 0;
  }
}

const pb = makeBall();
export function predictPath(src, path, maxT) {
  copyBall(pb, src);
  const n = Math.min(path.cap, Math.ceil(maxT / path.dt) + 1);
  path.x[0] = pb.px; path.y[0] = pb.py; path.z[0] = pb.pz; path.ev[0] = 0;
  let i = 1;
  for (; i < n; i++) {
    path.ev[i] = stepBall(pb, path.dt);
    path.x[i] = pb.px; path.y[i] = pb.py; path.z[i] = pb.pz;
    if (pb.py < 0.3) { i++; break; }
  }
  path.n = i;
  return path;
}

// ---------------------------------------------------------------------------
// Shot solver: find a launch velocity that lands the ball on a target spot,
// taking drag, spin curve and the net into account (shooting method).

const tb = makeBall();
const trace = { result: '', x: 0, z: 0, netClear: 0 };

function traceShot(sx, sy, sz, vx, vy, vz, wx, wy, wz, dirSign, serve, margin) {
  tb.px = sx; tb.py = sy; tb.pz = sz;
  tb.vx = vx; tb.vy = vy; tb.vz = vz;
  tb.wx = wx; tb.wy = wy; tb.wz = wz;
  const dt = 1 / 300;
  const top = TABLE_H + BALL_R;
  let ownBounces = 0;
  trace.netClear = 1;
  for (let i = 0; i < 600; i++) {
    const oz = tb.pz, oy = tb.py;
    integrate(tb, dt);
    if (oz !== 0 && (oz > 0) !== (tb.pz > 0)) {
      const f = oz / (oz - tb.pz);
      const cy = oy + (tb.py - oy) * f;
      trace.netClear = cy - BALL_R - NET_TOP;
      if (trace.netClear < margin) { trace.result = 'net'; return trace; }
    }
    if (tb.py < top && tb.vy < 0) {
      if (Math.abs(tb.pz) <= HALF_L) {
        const own = tb.pz * dirSign < 0;
        if (own) {
          if (serve && ownBounces === 0) {
            ownBounces++;
            tb.py = top;
            bounceTable(tb);
            continue;
          }
          trace.result = 'short';
          return trace;
        }
        if (serve && ownBounces === 0) { trace.result = 'noown'; return trace; }
        trace.result = 'land'; trace.x = tb.px; trace.z = tb.pz;
        return trace;
      } else if (tb.py < TABLE_H - 0.05) {
        const far = tb.pz * dirSign > 0;
        if (serve && ownBounces === 0) trace.result = far ? 'noown' : 'fall';
        else trace.result = far ? 'long' : 'short';
        return trace;
      }
    }
  }
  trace.result = 'long';
  return trace;
}

// A serve that can't be solved is retried slower first (short serves), then faster.
const SERVE_SPEEDS = [1, 0.86, 0.74, 0.64, 0.56, 1.15, 1.3, 0.48];

// opts: { speed (horizontal m/s), top (rad/s, +topspin/-backspin), side (rad/s),
//         dirSign (-1 = towards the AI end), serve, margin }
export function solveShot(sx, sy, sz, txIn, tzIn, opts, out = {}) {
  const dirSign = opts.dirSign;
  // Mis-hit targets can be off the table. Solve for the nearest spot on the
  // table, then stretch the shot towards the real target so it sails out.
  const tx = Math.max(-HALF_W + 0.03, Math.min(HALF_W - 0.03, txIn));
  const tzAbs = Math.max(0.12, Math.min(HALF_L - 0.03, Math.abs(tzIn)));
  const tz = dirSign * tzAbs;
  solveOnTable(sx, sy, sz, tx, tz, opts, out);
  if (tx !== txIn || Math.abs(tzIn) !== tzAbs) {
    const d0 = Math.hypot(tx - sx, tz - sz);
    const d1 = Math.hypot(txIn - sx, dirSign * Math.abs(tzIn) - sz);
    const h = Math.hypot(out.vx, out.vz) * (d1 / d0);
    const ang = Math.atan2(txIn - sx, dirSign * Math.abs(tzIn) - sz);
    out.vx = Math.sin(ang) * h;
    out.vz = Math.cos(ang) * h;
  }
  return out;
}

function solveOnTable(sx, sy, sz, tx, tz, opts, out) {
  const dirSign = opts.dirSign;
  const margin = opts.margin ?? 0.02;
  const serve = !!opts.serve;
  let speed = opts.speed;
  out.ok = false;
  for (let attempt = 0; attempt < 8; attempt++) {
    if (serve) speed = opts.speed * SERVE_SPEEDS[attempt];
    let success = false;
    let aimX = tx;
    let vyPrev = NaN;
    for (let lat = 0; lat < 3; lat++) {
      const dx = aimX - sx, dz = tz - sz;
      const d = Math.sqrt(dx * dx + dz * dz) || 1;
      const hx = dx / d, hz = dz / d;
      const vx = hx * speed, vz = hz * speed;
      // topspin axis = up x direction
      const wx = hz * opts.top, wz = -hx * opts.top, wy = opts.side || 0;
      // Bisection on launch vy. After the first pass only the aim moved a
      // little, so search a narrow bracket around the previous answer.
      let vy = NaN;
      for (let pass = 0; pass < 2 && Number.isNaN(vy); pass++) {
        const warm = pass === 0 && !Number.isNaN(vyPrev);
        if (pass === 1 && Number.isNaN(vyPrev)) break;
        let lo = warm ? vyPrev - 0.45 : -9, hi = warm ? vyPrev + 0.45 : 7.5;
        const iters = warm ? 10 : 15;
        let it = 0;
        for (; it < iters; it++) {
          const v = (lo + hi) * 0.5;
          const r = traceShot(sx, sy, sz, vx, v, vz, wx, wy, wz, dirSign, serve, margin);
          // "up" = the shot needs more launch angle. For a serve the relation
          // is inverted: a steeper downward hit bounces earlier and goes further.
          let up;
          if (r.result === 'fall') up = true;
          else if (r.result === 'net' || r.result === 'short') up = !serve;
          else if (r.result === 'long') up = serve;
          else if (r.result === 'noown') up = false;
          else {
            if (Math.abs(r.z - tz) < 0.012) { lo = hi = v; break; }
            up = (r.z * dirSign < tz * dirSign) !== serve;
          }
          if (up) lo = v; else hi = v;
        }
        const cand = (lo + hi) * 0.5;
        const r = traceShot(sx, sy, sz, vx, cand, vz, wx, wy, wz, dirSign, serve, margin);
        if (r.result === 'land' && Math.abs(r.z - tz) <= 0.07) {
          vy = cand;
          out.landX = r.x; out.landZ = r.z;
        } else if (!warm) {
          break;
        }
      }
      if (Number.isNaN(vy)) { success = false; break; }
      vyPrev = vy;
      out.vx = vx; out.vy = vy; out.vz = vz; out.wx = wx; out.wy = wy; out.wz = wz;
      out.speed = speed;
      success = true;
      const ex = tx - out.landX;
      if (Math.abs(ex) < 0.03) break;
      aimX += ex;
    }
    if (success) { out.ok = true; return out; }
    // A drive that can't dip in time must slow down.
    speed *= 0.85;
  }
  // Could not find a clean solution: a gentle, high fallback ball.
  {
    const dz = tz - sz;
    out.vx = (tx - sx) * 0.6; out.vz = dz * 0.6; out.vy = 3.2;
    out.wx = 0; out.wy = 0; out.wz = 0;
  }
  return out;
}

// Signed topspin of a ball relative to its direction of travel (+ = topspin).
export function topspinOf(b) {
  const h = Math.sqrt(b.vx * b.vx + b.vz * b.vz) || 1;
  return (b.wx * b.vz - b.wz * b.vx) / h;
}
