import * as THREE from 'three';

// Keeps a short rolling history of how a set of objects were posed (position,
// rotation, scale) plus a few extra numbers, so the last moment of a point can
// be played back in slow motion.
const FIELDS = 10; // position xyz, quaternion xyzw, scale xyz
const Q = new Float64Array(4);

export class Recorder {
  // extras: [{ get: () => number, set: (v) => void }]
  constructor(objects, extras = [], seconds = 2.5, rate = 240) {
    this.objects = objects;
    this.extras = extras;
    this.stride = 1 + objects.length * FIELDS + extras.length;
    this.cap = Math.ceil(seconds * rate);
    this.buf = new Float64Array(this.cap * this.stride);
    this.minStep = 1 / rate;
    this.clear();
  }

  clear() {
    this.count = 0;
    this.head = 0;
    this.lastT = -Infinity;
  }

  record(t) {
    if (t - this.lastT < this.minStep * 0.98) return;
    this.lastT = t;
    const b = this.buf;
    let o = this.head * this.stride;
    b[o++] = t;
    for (const obj of this.objects) {
      const p = obj.position, q = obj.quaternion, s = obj.scale;
      b[o++] = p.x; b[o++] = p.y; b[o++] = p.z;
      b[o++] = q.x; b[o++] = q.y; b[o++] = q.z; b[o++] = q.w;
      b[o++] = s.x; b[o++] = s.y; b[o++] = s.z;
    }
    for (const e of this.extras) b[o++] = e.get();
    this.head = (this.head + 1) % this.cap;
    if (this.count < this.cap) this.count++;
  }

  // Offset of the i-th stored frame (0 = oldest).
  _at(i) {
    return ((this.head - this.count + i + this.cap) % this.cap) * this.stride;
  }

  get startTime() { return this.count ? this.buf[this._at(0)] : 0; }
  get endTime() { return this.count ? this.buf[this._at(this.count - 1)] : 0; }

  // Pose everything as it was at time t, blending between recorded frames.
  apply(t) {
    if (!this.count) return;
    const b = this.buf;
    let lo = 0, hi = this.count - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (b[this._at(mid)] <= t) lo = mid; else hi = mid - 1;
    }
    const a = this._at(lo), c = this._at(Math.min(this.count - 1, lo + 1));
    const t0 = b[a], t1 = b[c];
    const f = t1 > t0 ? Math.min(1, Math.max(0, (t - t0) / (t1 - t0))) : 0;
    const mix = (i) => b[a + i] + (b[c + i] - b[a + i]) * f;
    let i = 1;
    for (const obj of this.objects) {
      obj.position.set(mix(i), mix(i + 1), mix(i + 2));
      THREE.Quaternion.slerpFlat(Q, 0, b, a + i + 3, b, c + i + 3, f);
      obj.quaternion.set(Q[0], Q[1], Q[2], Q[3]);
      obj.scale.set(mix(i + 7), mix(i + 8), mix(i + 9));
      i += FIELDS;
    }
    for (const e of this.extras) e.set(mix(i++));
  }
}
