import * as THREE from 'three';
import { glow } from './scene.js';

const POINT_VS = `
attribute float aAlpha; attribute float aSize; attribute vec3 aColor;
varying float vA; varying vec3 vC;
uniform float uScale;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vA = aAlpha; vC = aColor;
  // max(): points level with or behind the camera would otherwise divide by
  // ~0 and produce giant or NaN sizes.
  gl_PointSize = clamp(aSize * uScale / max(-mv.z, 0.05), 1.5, 256.0);
  gl_Position = projectionMatrix * mv;
}`;
const POINT_FS = `
varying float vA; varying vec3 vC;
void main(){
  vec2 d = gl_PointCoord - 0.5;
  float r = dot(d, d) * 4.0;
  if (r > 1.0) discard;
  float a = vA * (1.0 - r) * (1.0 - r);
  gl_FragColor = vec4(vC * a, 1.0);
}`;

function pointMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 800 } },
    vertexShader: POINT_VS,
    fragmentShader: POINT_FS,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

// Pooled spark particles. Dead particles are swapped out so the live ones are
// always a contiguous range and only that range is drawn.
export class Sparks {
  constructor(scene, cap) {
    this.cap = cap;
    this.n = 0;
    this.pos = new Float32Array(cap * 3);
    this.vel = new Float32Array(cap * 3);
    this.col = new Float32Array(cap * 3);
    this.alpha = new Float32Array(cap);
    this.size = new Float32Array(cap);
    this.size0 = new Float32Array(cap);
    this.life = new Float32Array(cap);
    this.maxLife = new Float32Array(cap);
    this.grav = new Float32Array(cap);
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage);
    this.aAlpha = new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos);
    g.setAttribute('aColor', this.aCol);
    g.setAttribute('aAlpha', this.aAlpha);
    g.setAttribute('aSize', this.aSize);
    g.setDrawRange(0, 0);
    this.mat = pointMaterial();
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this._c = new THREE.Color();
  }

  burst(x, y, z, count, opts = {}) {
    const speed = opts.speed ?? 3;
    const c = this._c.set(opts.color ?? 0xffffff);
    const bright = opts.bright ?? 2;
    const dx = opts.dx ?? 0, dy = opts.dy ?? 0, dz = opts.dz ?? 0;
    for (let k = 0; k < count; k++) {
      let i = this.n;
      if (i >= this.cap) i = (Math.random() * this.cap) | 0; else this.n++;
      // random direction
      let ux = Math.random() * 2 - 1, uy = Math.random() * 2 - 1, uz = Math.random() * 2 - 1;
      const l = Math.sqrt(ux * ux + uy * uy + uz * uz) || 1;
      const s = speed * (0.35 + Math.random() * 0.65);
      ux = ux / l * s + dx * (0.5 + Math.random());
      uy = uy / l * s + dy * (0.5 + Math.random());
      uz = uz / l * s + dz * (0.5 + Math.random());
      this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
      this.vel[i * 3] = ux; this.vel[i * 3 + 1] = uy; this.vel[i * 3 + 2] = uz;
      const hueJitter = opts.jitter ?? 0.06;
      const cc = this._c.clone().offsetHSL((Math.random() - 0.5) * hueJitter, 0, 0);
      this.col[i * 3] = cc.r * bright; this.col[i * 3 + 1] = cc.g * bright; this.col[i * 3 + 2] = cc.b * bright;
      const life = (opts.life ?? 0.45) * (0.5 + Math.random() * 0.8);
      this.life[i] = life; this.maxLife[i] = life;
      this.size0[i] = (opts.size ?? 0.025) * (0.6 + Math.random() * 0.8);
      this.grav[i] = opts.gravity ?? 4;
    }
    c.set(0xffffff);
  }

  update(dt, pointScale) {
    this.mat.uniforms.uScale.value = pointScale;
    const drag = Math.exp(-dt * 2.2);
    let i = 0;
    while (i < this.n) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        const j = --this.n;
        if (i !== j) this._move(j, i);
        continue;
      }
      const i3 = i * 3;
      this.vel[i3] *= drag; this.vel[i3 + 1] = this.vel[i3 + 1] * drag - this.grav[i] * dt; this.vel[i3 + 2] *= drag;
      this.pos[i3] += this.vel[i3] * dt; this.pos[i3 + 1] += this.vel[i3 + 1] * dt; this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      if (this.pos[i3 + 1] < 0.01) { this.pos[i3 + 1] = 0.01; this.vel[i3 + 1] *= -0.4; }
      const f = this.life[i] / this.maxLife[i];
      this.alpha[i] = f;
      this.size[i] = this.size0[i] * (0.4 + 0.6 * f);
      i++;
    }
    this.points.geometry.setDrawRange(0, this.n);
    if (this.n > 0) {
      this.aPos.needsUpdate = true;
      this.aCol.needsUpdate = true;
      this.aAlpha.needsUpdate = true;
      this.aSize.needsUpdate = true;
    }
  }

  _move(from, to) {
    for (let k = 0; k < 3; k++) {
      this.pos[to * 3 + k] = this.pos[from * 3 + k];
      this.vel[to * 3 + k] = this.vel[from * 3 + k];
      this.col[to * 3 + k] = this.col[from * 3 + k];
    }
    this.life[to] = this.life[from];
    this.maxLife[to] = this.maxLife[from];
    this.size0[to] = this.size0[from];
    this.grav[to] = this.grav[from];
  }

  clear() {
    this.n = 0;
    this.points.geometry.setDrawRange(0, 0);
  }
}

// Glowing comet tail behind the ball. Samples are laid down at fixed spacing so
// the tail stays continuous even at 20 m/s.
export class Trail {
  constructor(scene, cap) {
    this.cap = cap;
    this.pos = new Float32Array(cap * 3);
    this.col = new Float32Array(cap * 3);
    this.alpha = new Float32Array(cap);
    this.size = new Float32Array(cap);
    this.age = new Float32Array(cap).fill(99);
    this.head = 0;
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage);
    this.aAlpha = new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos);
    g.setAttribute('aColor', this.aCol);
    g.setAttribute('aAlpha', this.aAlpha);
    g.setAttribute('aSize', this.aSize);
    this.mat = pointMaterial();
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.last = new THREE.Vector3();
    this.hasLast = false;
    this.color = new THREE.Color(0x00f0ff);
  }

  reset() {
    this.hasLast = false;
    this.age.fill(99);
  }

  push(x, y, z, dt) {
    for (let i = 0; i < this.cap; i++) this.age[i] += dt;
    if (!this.hasLast) {
      this.last.set(x, y, z);
      this.hasLast = true;
      return;
    }
    const dx = x - this.last.x, dy = y - this.last.y, dz = z - this.last.z;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (d > 1.0) { this.last.set(x, y, z); return; } // teleport (new serve)
    const spacing = 0.011;
    const steps = Math.min(24, Math.floor(d / spacing));
    for (let s = 1; s <= steps; s++) {
      const f = (s * spacing) / d;
      const i = this.head;
      this.head = (this.head + 1) % this.cap;
      this.pos[i * 3] = this.last.x + dx * f;
      this.pos[i * 3 + 1] = this.last.y + dy * f;
      this.pos[i * 3 + 2] = this.last.z + dz * f;
      this.age[i] = dt * (1 - f);
    }
    if (steps > 0) {
      const f = (steps * spacing) / d;
      this.last.set(this.last.x + dx * f, this.last.y + dy * f, this.last.z + dz * f);
    }
  }

  update(life, width, bright, pointScale) {
    this.mat.uniforms.uScale.value = pointScale;
    const c = this.color;
    for (let i = 0; i < this.cap; i++) {
      const f = 1 - this.age[i] / life;
      if (f <= 0) { this.alpha[i] = 0; this.size[i] = 0; continue; }
      this.alpha[i] = f * f * 0.9;
      this.size[i] = width * (0.35 + 0.65 * f);
      this.col[i * 3] = c.r * bright; this.col[i * 3 + 1] = c.g * bright; this.col[i * 3 + 2] = c.b * bright;
    }
    this.aPos.needsUpdate = true;
    this.aCol.needsUpdate = true;
    this.aAlpha.needsUpdate = true;
    this.aSize.needsUpdate = true;
  }
}

// Expanding rings that flash outwards from big hits.
export class Shockwaves {
  constructor(scene) {
    this.items = [];
    const geo = new THREE.RingGeometry(0.82, 1, 48);
    for (let i = 0; i < 8; i++) {
      const m = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
      const mesh = new THREE.Mesh(geo, m);
      mesh.visible = false;
      scene.add(mesh);
      this.items.push({ mesh, t: 0, life: 0.4, r0: 0.02, r1: 0.4, flat: false });
    }
    this.i = 0;
  }

  spawn(x, y, z, hex, r1 = 0.4, life = 0.35, flat = false, bright = 2.5) {
    const it = this.items[this.i];
    this.i = (this.i + 1) % this.items.length;
    it.mesh.position.set(x, y, z);
    it.mesh.material.color.copy(glow(hex, bright));
    it.t = 0; it.life = life; it.r1 = r1; it.flat = flat;
    it.mesh.visible = true;
    if (flat) it.mesh.rotation.set(-Math.PI / 2, 0, 0);
  }

  clear() {
    for (const it of this.items) it.mesh.visible = false;
  }

  update(dt, camera) {
    for (const it of this.items) {
      if (!it.mesh.visible) continue;
      it.t += dt;
      const f = it.t / it.life;
      if (f >= 1) { it.mesh.visible = false; continue; }
      const e = 1 - Math.pow(1 - f, 3);
      const r = it.r0 + (it.r1 - it.r0) * e;
      it.mesh.scale.set(r, r, r);
      it.mesh.material.opacity = (1 - f) * (1 - f);
      if (!it.flat) it.mesh.quaternion.copy(camera.quaternion);
    }
  }
}

// Trauma-based camera shake: shake amount = trauma^2, trauma decays linearly.
// Small and quick: even a smash settles in about a quarter of a second.
export class Shake {
  constructor() {
    this.trauma = 0;
    this.t = 0;
    this.x = 0; this.y = 0; this.roll = 0; this.fov = 0;
  }
  add(a) { this.trauma = Math.min(1, this.trauma + a); }
  update(dt, enabled) {
    this.t += dt;
    this.trauma = Math.max(0, this.trauma - dt * 3.2);
    const s = enabled ? this.trauma * this.trauma : 0;
    const t = this.t * 55;
    this.x = s * 0.035 * (Math.sin(t * 1.1) + Math.sin(t * 2.3 + 1.7) * 0.5);
    this.y = s * 0.03 * (Math.sin(t * 1.7 + 0.3) + Math.sin(t * 2.9 + 2.1) * 0.5);
    this.roll = s * 0.035 * Math.sin(t * 1.3 + 4.0);
    this.fov = s * 4; // a little kick of the field of view
  }
}
