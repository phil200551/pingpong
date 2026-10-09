import * as THREE from 'three';

// Anime-style impact frame drawn over your paddle when you hit the ball: a
// jagged white/yellow starburst inked in black, with radiating speed lines.
// It appears instantly, plays three hard-cut frames (~90 ms) and is gone —
// no fading. A gap is left in the direction the ball flies so it never hides
// the ball.
const FRAME_MS = 30;
const FRAMES = 3;
const P = new THREE.Vector3();

export class ImpactFX {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.active = false;
    this.dirty = false;
    this.t0 = 0;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.scale = 1;
    this.spikes = [];
    this.lines = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(window.innerWidth * this.dpr);
    this.canvas.height = Math.round(window.innerHeight * this.dpr);
    this.dirty = false;
  }

  // scale: ~0.7 for a soft shot, 1 normal, ~1.3 hard, ~1.6 smash
  trigger(x, y, z, vx, vy, vz, scale, now) {
    this.active = true;
    this.t0 = now;
    this.pos.set(x, y, z);
    this.vel.set(vx, vy, vz);
    this.scale = scale;
    // A fresh hand-drawn look every hit: jittered spikes and speed lines.
    const nSpikes = Math.round(12 + 5 * scale);
    this.spikes.length = 0;
    for (let i = 0; i < nSpikes; i++) {
      this.spikes.push({
        a: ((i + 0.5 + (Math.random() - 0.5) * 0.6) / nSpikes) * Math.PI * 2,
        r: 1.0 + Math.random() * 0.4,
        ri: 0.62 + Math.random() * 0.1,
      });
    }
    const nLines = Math.round(18 + 12 * scale);
    this.lines.length = 0;
    for (let i = 0; i < nLines; i++) {
      this.lines.push({
        a: Math.random() * Math.PI * 2,
        r0: 1.12 + Math.random() * 0.22,
        r1: 1.75 + Math.random() * 0.75,
        w: 0.04 + Math.random() * 0.045,
      });
    }
  }

  clear() {
    if (this.dirty) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.dirty = false;
    }
  }

  update(now, camera) {
    if (!this.active) { this.clear(); return; }
    const frame = Math.floor((now - this.t0) / FRAME_MS);
    this.clear();
    if (frame >= FRAMES) { this.active = false; return; }

    const W = this.canvas.width, H = this.canvas.height;
    P.copy(this.pos).project(camera);
    if (P.z > 1) return; // behind the camera
    const cx = (P.x * 0.5 + 0.5) * W, cy = (1 - (P.y * 0.5 + 0.5)) * H;
    // Screen direction the ball is flying in: keep that side clear.
    P.copy(this.pos).addScaledVector(this.vel, 0.05).project(camera);
    const gap = Math.atan2((1 - (P.y * 0.5 + 0.5)) * H - cy, (P.x * 0.5 + 0.5) * W - cx);
    const R = 0.065 * H * this.scale;
    const ctx = this.ctx;
    this.dirty = true;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.lineJoin = 'miter';
    if (frame === 0) {
      this._lines(R, gap, 1, '#000', null);
      this._star(R, gap, 1, '#fff', '#000', Math.max(2.5, R * 0.075));
      this._star(R * 0.42, gap, 1, '#ffe600', null, 0);
    } else if (frame === 1) {
      // inverted flash frame
      this._lines(R * 1.1, gap, 1.15, '#fff', '#000');
      this._star(R * 1.12, gap, 1, '#000', '#fff', Math.max(2.5, R * 0.07));
      this._star(R * 0.55, gap, 1, '#fff', null, 0);
    } else {
      // speed lines flying outward, then gone
      this._lines(R * 1.45, gap, 1.25, '#000', null);
    }
    ctx.restore();
  }

  // Lines and spikes pointing along the ball's flight are skipped/shortened.
  _inGap(a, gap, width) {
    const d = Math.atan2(Math.sin(a - gap), Math.cos(a - gap));
    return Math.abs(d) < width;
  }

  _star(R, gap, k, fill, stroke, lw) {
    const ctx = this.ctx;
    ctx.beginPath();
    const n = this.spikes.length;
    for (let i = 0; i < n; i++) {
      const s = this.spikes[i];
      const shrink = this._inGap(s.a, gap, 0.45) ? 0.6 : 1;
      const ro = R * s.r * k * shrink;
      const half = Math.PI / n;
      const ri = R * s.ri;
      const a0 = s.a - half, a1 = s.a + half;
      if (i === 0) ctx.moveTo(Math.cos(a0) * ri, Math.sin(a0) * ri);
      else ctx.lineTo(Math.cos(a0) * ri, Math.sin(a0) * ri);
      ctx.lineTo(Math.cos(s.a) * ro, Math.sin(s.a) * ro);
      ctx.lineTo(Math.cos(a1) * ri, Math.sin(a1) * ri);
    }
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = lw;
      ctx.stroke();
    }
  }

  _lines(R, gap, k, fill, stroke) {
    const ctx = this.ctx;
    ctx.beginPath();
    for (const l of this.lines) {
      if (this._inGap(l.a, gap, 0.4)) continue;
      const r0 = R * l.r0, r1 = R * l.r1 * k;
      const w = R * l.w;
      const ca = Math.cos(l.a), sa = Math.sin(l.a);
      // a thin wedge: wide near the burst, sharp point outside
      ctx.moveTo(ca * r0 - sa * w, sa * r0 + ca * w);
      ctx.lineTo(ca * r1, sa * r1);
      ctx.lineTo(ca * r0 + sa * w, sa * r0 - ca * w);
      ctx.closePath();
    }
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = Math.max(1, R * 0.012);
      ctx.stroke();
    }
  }
}
