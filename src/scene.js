import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { FXAAPass } from 'three/examples/jsm/postprocessing/FXAAPass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { outlineMaterial, addOutline, updateOutlines } from './outline.js';
import {
  TABLE_H, HALF_L, HALF_W, NET_TOP, NET_HALF_W, NET_H, BALL_R,
} from './config.js';
import { QUALITY } from './settings.js';

export const COLORS = {
  cyan: 0x00f0ff,
  magenta: 0xff2bd6,
  purple: 0x8a2bff,
  yellow: 0xffe600,
  orange: 0xff7a1a,
  green: 0x39ff88,
};

// A colour brighter than 1.0 so it blooms.
export function glow(hex, k) {
  const c = new THREE.Color(hex);
  return c.multiplyScalar(k);
}

// Cel shading: three flat bands of light instead of smooth shading.
let gradientMap = null;
function toonGradient() {
  if (!gradientMap) {
    const data = new Uint8Array([110, 190, 255]);
    gradientMap = new THREE.DataTexture(data, data.length, 1, THREE.RedFormat);
    gradientMap.minFilter = THREE.NearestFilter;
    gradientMap.magFilter = THREE.NearestFilter;
    gradientMap.generateMipmaps = false;
    gradientMap.needsUpdate = true;
  }
  return gradientMap;
}

export function toon(hex, extra = {}) {
  return new THREE.MeshToonMaterial({ color: hex, gradientMap: toonGradient(), ...extra });
}

// Ink line widths in CSS pixels.
export const INK = {
  bold: outlineMaterial(4.6),
  normal: outlineMaterial(3.6),
  thin: outlineMaterial(2.6),
};

function radialTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)', size = 128) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0, inner);
  grd.addColorStop(1, outer);
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function makePaddle(rubberHex, glowHex) {
  const g = new THREE.Group();
  const blade = new THREE.Mesh(
    new THREE.CylinderGeometry(0.076, 0.076, 0.012, 40),
    toon(rubberHex, { emissive: rubberHex, emissiveIntensity: 0.15 }),
  );
  blade.rotation.x = Math.PI / 2;
  blade.scale.set(1, 1, 1.12); // slightly taller than wide
  addOutline(blade, INK.normal);
  g.add(blade);
  // Neon stripe painted just inside the rim, so the ink outline stays visible.
  const ringMat = new THREE.MeshBasicMaterial({ color: glow(glowHex, 0.9) });
  const ringGeo = new THREE.TorusGeometry(0.066, 0.0035, 8, 48);
  for (const side of [1, -1]) {
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.scale.set(1, 1.12, 1);
    ring.position.z = side * 0.0062;
    g.add(ring);
  }
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.1, 0.024), toon(0xd8964f));
  handle.position.y = -0.13;
  addOutline(handle, INK.normal);
  g.add(handle);
  const cap = new THREE.Mesh(new THREE.BoxGeometry(0.028, 0.012, 0.026), ringMat);
  cap.position.y = -0.18;
  g.add(cap);
  g.userData.ringMat = ringMat;
  // Plain colour at rest (no glow); it flashes into a bright glow on each hit.
  g.userData.baseGlow = glow(glowHex, 0.9);
  return g;
}

// Your forearm / sleeve in first person.
export function makeArm() {
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.042, 1, 14), toon(0xe9f4ff));
  addOutline(arm, INK.normal);
  return arm;
}

// A chunky cartoon athlete. Colours are applied by paintOpponent().
export function makeOpponent(hex) {
  const root = new THREE.Group();
  const bodyMat = toon(hex);
  const headMat = toon(hex);
  const limbMat = toon(hex);
  const visorMat = new THREE.MeshBasicMaterial({ color: glow(hex, 3) });
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.17, 0.38, 6, 16), bodyMat);
  torso.position.y = 1.18;
  torso.scale.set(1.15, 1, 0.75);
  root.add(torso);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 24, 16), headMat);
  head.position.y = 1.66;
  root.add(head);
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.05, 0.07), visorMat);
  visor.position.set(0, 1.68, 0.085);
  root.add(visor);
  const legGeo = new THREE.CapsuleGeometry(0.07, 0.55, 4, 10);
  const legL = new THREE.Mesh(legGeo, limbMat);
  legL.position.set(-0.1, 0.45, 0);
  const legR = new THREE.Mesh(legGeo, limbMat);
  legR.position.set(0.1, 0.45, 0);
  root.add(legL, legR);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.03, 1, 10), limbMat);
  root.add(arm);
  const armL = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.42, 4, 8), limbMat);
  armL.position.set(-0.25, 1.15, 0.05);
  armL.rotation.z = -0.35;
  root.add(armL);
  for (const m of [torso, head, visor, legL, legR, arm, armL]) addOutline(m, INK.normal);
  const baseMat = new THREE.MeshBasicMaterial({ color: glow(hex, 2), transparent: true, opacity: 0.8, side: THREE.DoubleSide });
  const base = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.33, 40), baseMat);
  base.rotation.x = -Math.PI / 2;
  base.position.y = 0.01;
  root.add(base);
  root.userData = { bodyMat, headMat, limbMat, visorMat, baseMat, visor, arm, torso, head, legL, legR };
  paintOpponent(root, hex);
  return root;
}

export function paintOpponent(root, hex) {
  const ud = root.userData;
  const c = new THREE.Color(hex);
  ud.bodyMat.color.copy(c);
  ud.headMat.color.copy(c).lerp(new THREE.Color(0xffffff), 0.35);
  ud.limbMat.color.copy(c).multiplyScalar(0.7);
  ud.visorMat.color.copy(glow(hex, 3));
  ud.baseMat.color.copy(glow(hex, 2));
}

export class World {
  constructor(canvas, settings) {
    this.canvas = canvas;
    this.settings = settings;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
    });
    // Neutral tone mapping keeps the flat cartoon colours saturated.
    this.renderer.toneMapping = THREE.NeutralToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setClearColor(0x000000, 1);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x7a3fb8, 16, 70);

    this.camera = new THREE.PerspectiveCamera(settings.fov, 1, 0.03, 400);
    this.camera.position.set(0, 1.5, 2.2);

    this.time = 0;
    this.contextLost = false;
    this.onContextLost = null;
    this.onContextRestored = null;
    canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault(); // allow the browser to restore the context
      this.contextLost = true;
      if (this.onContextLost) this.onContextLost();
    });
    canvas.addEventListener('webglcontextrestored', () => {
      this.contextLost = false;
      this.applyQuality();
      if (this.onContextRestored) this.onContextRestored();
    });

    this._build();
    this.applyQuality();
  }

  // Every quality level renders the same way: scene -> (glow) -> tone mapping
  // -> anti-aliasing. By default no multisampled (MSAA) render targets are
  // used; edges are smoothed by an FXAA/SMAA pass and higher levels simply
  // render more pixels. The "MSAA" setting switches the scene buffers back to
  // 4x multisampling (the path High/Ultra used to take) for testing.
  applyQuality() {
    const q = QUALITY[this.settings.quality];
    this.q = q;
    this._applyPixelRatio();
    if (this.composer) {
      for (const pass of this.composer.passes) if (pass.dispose) pass.dispose();
      this.composer.dispose();
      this.composer = null;
    }
    const buf = this.renderer.getDrawingBufferSize(new THREE.Vector2());
    const msaa = !!this.settings.msaa;
    const rt = new THREE.WebGLRenderTarget(Math.max(1, buf.x), Math.max(1, buf.y), { type: THREE.HalfFloatType, samples: msaa ? 4 : 0 });
    this.composer = new EffectComposer(this.renderer, rt);
    // The composer is sized in device pixels directly (see resize()).
    this.composer.setPixelRatio(1);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = null;
    if (q.bloom) {
      this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.8, 0.32, 1.0);
      this.composer.addPass(this.bloom);
    }
    this.composer.addPass(new OutputPass());
    if (!msaa) this.composer.addPass(q.aa === 'smaa' ? new SMAAPass() : new FXAAPass());
    if (this.ballLight) this.ballLight.visible = q.ballLight;
    this._buildCrowd(q.crowd);
    this.resize();
  }

  _applyPixelRatio() {
    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    const pr = Math.min(dpr, this.q.pixelRatio);
    if (pr !== this.renderer.getPixelRatio()) this.renderer.setPixelRatio(pr);
  }

  resize() {
    const w = Math.max(1, window.innerWidth), h = Math.max(1, window.innerHeight);
    // The device pixel ratio changes when the browser is zoomed or the window
    // moves to a monitor with different display scaling.
    this._applyPixelRatio();
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    // Size every post-processing buffer to exactly the canvas's drawing buffer,
    // in whole device pixels, so nothing is stretched, cropped or offset.
    const bw = this.canvas.width, bh = this.canvas.height;
    if (this.composer) {
      this.composer.setSize(bw, bh);
      if (this.bloom) {
        const s = this.q.bloomScale || 1;
        this.bloom.setSize(Math.max(2, Math.round(bw * s)), Math.max(2, Math.round(bh * s)));
      }
    }
    updateOutlines(bw, bh, this.renderer.getPixelRatio());
  }

  // Compile every shader up front (including hidden effects) so the first
  // smash or the first match doesn't hitch while a program compiles.
  precompile() {
    if (this.contextLost) return;
    const prev = this.renderer.getRenderTarget();
    this.renderer.setRenderTarget(this.composer ? this.composer.renderTarget1 : null);
    try {
      this.renderer.compile(this.scene, this.camera);
    } finally {
      this.renderer.setRenderTarget(prev);
    }
  }

  render() {
    if (this.contextLost) return;
    this.composer.render();
  }

  // Reads three rows of the frame that was just drawn and reports what share of
  // the sampled pixels are (near) black. Used to detect a GPU/driver that
  // renders nothing at the current quality level.
  sampleBlackness() {
    if (this.contextLost) return null;
    const gl = this.renderer.getContext();
    const w = gl.drawingBufferWidth, h = gl.drawingBufferHeight;
    if (!this._row || this._row.length < w * 4) this._row = new Uint8Array(w * 4);
    const row = this._row;
    this.renderer.setRenderTarget(null);
    let n = 0, black = 0;
    for (const f of [0.3, 0.5, 0.7]) {
      gl.readPixels(0, Math.floor(h * f), w, 1, gl.RGBA, gl.UNSIGNED_BYTE, row);
      for (let x = 0; x < w; x += 6) {
        const i = x * 4;
        if (Math.max(row[i], row[i + 1], row[i + 2]) < 12) black++;
        n++;
      }
    }
    return n ? black / n : null;
  }

  _build() {
    const s = this.scene;

    // Lights: a bright sky fill plus a key light give clean cel-shading bands.
    s.add(new THREE.HemisphereLight(0xd6e0ff, 0x5a3a8a, 1.15));
    const key = new THREE.DirectionalLight(0xffffff, 1.7);
    key.position.set(2.5, 7, 4);
    s.add(key);
    this.rimA = new THREE.PointLight(COLORS.magenta, 1.6, 9, 1.6);
    this.rimA.position.set(-3, 2.6, -1);
    this.rimB = new THREE.PointLight(COLORS.cyan, 1.6, 9, 1.6);
    this.rimB.position.set(3, 2.6, 1);
    s.add(this.rimA, this.rimB);

    this._buildSky();
    this._buildFloor();
    this._buildTable();
    this._buildArena();
    this._buildBall();
    this._buildMarkers();
  }

  _buildSky() {
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(300, 32, 16),
      new THREE.ShaderMaterial({
        uniforms: {
          uTop: { value: new THREE.Color(0x1c1a6e) },
          uMid: { value: new THREE.Color(0x7b32d6) },
          uHorizon: { value: new THREE.Color(0xff6cb8) },
        },
        vertexShader: `varying vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `
          uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHorizon; varying vec3 vDir;
          void main(){
            float h = normalize(vDir).y;
            vec3 c = mix(uHorizon, uMid, smoothstep(0.0, 0.22, h));
            c = mix(c, uTop, smoothstep(0.22, 0.75, h));
            gl_FragColor = vec4(c, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
      }),
    );
    sky.renderOrder = -1;
    sky.frustumCulled = false;
    this.sky = sky;
    this.scene.add(sky);
  }

  _buildFloor() {
    this.floorMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uInt: { value: 0 },
        uC1: { value: new THREE.Color(COLORS.magenta) },
        uC2: { value: new THREE.Color(COLORS.cyan) },
        uBase: { value: new THREE.Color(0x4a2a9a) },
        uFar: { value: new THREE.Color(0x7a3fb8) },
      },
      vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,
      fragmentShader: `
        varying vec3 vW; uniform float uTime; uniform float uInt; uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uBase; uniform vec3 uFar;
        void main(){
          vec2 g = vW.xz * 0.8;
          vec2 fw = fwidth(g);
          vec2 grid = abs(fract(g - 0.5) - 0.5) / max(fw, 1e-4);
          float line = 1.0 - min(min(grid.x, grid.y), 1.0);
          float d = length(vW.xz);
          float fade = exp(-d * 0.07);
          vec3 col = mix(uC1, uC2, 0.5 + 0.5 * sin(d * 0.5 - uTime * 1.2));
          float wave = 0.7 + 0.3 * sin(d * 1.3 - uTime * (3.0 + uInt * 5.0));
          vec3 c = mix(uFar, uBase, fade);
          c = mix(c, col * (1.1 + uInt * 1.4) * wave, line * fade * 0.85);
          // cartoon contact shadow under the table
          float under = smoothstep(1.0, 0.82, length(vW.xz / vec2(0.95, 1.6)));
          c *= 1.0 - under * 0.45;
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), this.floorMat);
    floor.rotation.x = -Math.PI / 2;
    this.scene.add(floor);
  }

  _buildTable() {
    const g = new THREE.Group();
    this.table = g;
    const top = new THREE.Mesh(new THREE.BoxGeometry(HALF_W * 2, 0.03, HALF_L * 2), toon(0x1f6bff));
    top.position.y = TABLE_H - 0.015;
    addOutline(top, INK.bold);
    g.add(top);

    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lw = 0.02, ly = TABLE_H + 0.0008;
    const addLine = (w, d, x, z) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), lineMat);
      m.rotation.x = -Math.PI / 2;
      m.position.set(x, ly, z);
      g.add(m);
      return m;
    };
    addLine(lw, HALF_L * 2, -HALF_W + lw / 2, 0);
    addLine(lw, HALF_L * 2, HALF_W - lw / 2, 0);
    addLine(HALF_W * 2, lw, 0, -HALF_L + lw / 2);
    addLine(HALF_W * 2, lw, 0, HALF_L - lw / 2);
    addLine(0.005, HALF_L * 2, 0, 0);

    // Neon underglow strips, tucked under the table so they never cover its ink line
    this.trimMat = new THREE.MeshBasicMaterial({ color: glow(COLORS.cyan, 2.2) });
    const trim = (w, d, x, z) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.012, d), this.trimMat);
      m.position.set(x, TABLE_H - 0.045, z);
      g.add(m);
    };
    const inset = 0.05;
    trim(HALF_W * 2 - inset * 2, 0.012, 0, HALF_L - inset);
    trim(HALF_W * 2 - inset * 2, 0.012, 0, -HALF_L + inset);
    trim(0.012, HALF_L * 2 - inset * 2, HALF_W - inset, 0);
    trim(0.012, HALF_L * 2 - inset * 2, -HALF_W + inset, 0);

    const legMat = toon(0x2d2350);
    for (const x of [-0.6, 0.6]) {
      for (const z of [-1.1, 1.1]) {
        const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, TABLE_H - 0.03, 0.05), legMat);
        leg.position.set(x, (TABLE_H - 0.03) / 2, z);
        addOutline(leg, INK.normal);
        g.add(leg);
      }
    }

    // Net: a see-through mesh with a white tape and posts
    const c = document.createElement('canvas');
    c.width = 256; c.height = 32;
    const x2 = c.getContext('2d');
    x2.strokeStyle = 'rgba(255,255,255,0.8)';
    x2.lineWidth = 1;
    for (let i = 0; i <= 256; i += 4) { x2.beginPath(); x2.moveTo(i, 0); x2.lineTo(i, 32); x2.stroke(); }
    for (let j = 0; j <= 32; j += 4) { x2.beginPath(); x2.moveTo(0, j); x2.lineTo(256, j); x2.stroke(); }
    const netTex = new THREE.CanvasTexture(c);
    netTex.colorSpace = THREE.SRGBColorSpace;
    const net = new THREE.Mesh(
      new THREE.PlaneGeometry(NET_HALF_W * 2, NET_H),
      new THREE.MeshBasicMaterial({ map: netTex, transparent: true, side: THREE.DoubleSide, depthWrite: false, color: 0x2a1f4a }),
    );
    net.position.set(0, TABLE_H + NET_H / 2, 0);
    g.add(net);
    const tape = new THREE.Mesh(new THREE.BoxGeometry(NET_HALF_W * 2, 0.014, 0.008), toon(0xffffff));
    tape.position.set(0, NET_TOP - 0.007, 0);
    addOutline(tape, INK.thin);
    g.add(tape);
    this.netTapeMat = new THREE.MeshBasicMaterial({ color: glow(COLORS.magenta, 2.2) });
    for (const x of [-NET_HALF_W, NET_HALF_W]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.022, NET_H + 0.03, 0.032), this.netTapeMat);
      post.position.set(x, TABLE_H + NET_H / 2, 0);
      addOutline(post, INK.thin);
      g.add(post);
    }
    this.scene.add(g);
  }

  _buildArena() {
    const s = this.scene;
    // Chunky pillars with neon strips, in a ring
    this.pillarMats = [];
    const pillarGeo = new THREE.BoxGeometry(0.45, 9, 0.45);
    const stripGeo = new THREE.BoxGeometry(0.1, 8.6, 0.1);
    const pillarMat = toon(0x5b2bbf);
    const N = 18;
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const r = 11;
      const x = Math.cos(a) * r, z = Math.sin(a) * r * 1.25;
      const p = new THREE.Mesh(pillarGeo, pillarMat);
      p.position.set(x, 4.5, z);
      addOutline(p, INK.bold);
      s.add(p);
      const hex = i % 2 ? COLORS.cyan : COLORS.magenta;
      const m = new THREE.MeshBasicMaterial({ color: glow(hex, 2.5) });
      m.userData.base = new THREE.Color(hex);
      m.userData.i = i;
      this.pillarMats.push(m);
      const st = new THREE.Mesh(stripGeo, m);
      st.position.set(x - Math.cos(a) * 0.24, 4.5, z - Math.sin(a) * 0.24);
      s.add(st);
    }

    // Neon halo rings overhead, inked like cartoon neon signs
    this.haloMats = [];
    [[6.5, 7.2, COLORS.magenta], [4.6, 7.6, COLORS.cyan], [8.6, 6.8, COLORS.yellow]].forEach(([r, y, hex]) => {
      const m = new THREE.MeshBasicMaterial({ color: glow(hex, 2.2) });
      m.userData.base = new THREE.Color(hex);
      this.haloMats.push(m);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.08, 8, 120), m);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = y;
      addOutline(ring, INK.normal);
      s.add(ring);
    });

    // Sweeping spotlight beams
    this.beams = [];
    const beamMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(1, 1, 1) }, uAlpha: { value: 0.12 } },
      vertexShader: `varying float vH; void main(){ vH = uv.y; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader: `uniform vec3 uColor; uniform float uAlpha; varying float vH; void main(){ gl_FragColor = vec4(uColor * uAlpha * pow(vH, 1.6), 1.0); }`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const beamGeo = new THREE.ConeGeometry(1.4, 12, 24, 1, true);
    beamGeo.translate(0, -6, 0);
    [COLORS.cyan, COLORS.magenta, COLORS.purple, COLORS.yellow].forEach((hex, i) => {
      const m = beamMat.clone();
      m.uniforms.uColor.value = new THREE.Color(hex);
      const b = new THREE.Mesh(beamGeo, m);
      b.position.set((i - 1.5) * 3.2, 12, -4 + (i % 2) * 6);
      b.userData.phase = i * 1.7;
      s.add(b);
      this.beams.push(b);
    });

    // Two angled jumbotrons, either side of the opponent (clear of the HUD).
    this.screenCanvas = document.createElement('canvas');
    this.screenCanvas.width = 1024;
    this.screenCanvas.height = 384;
    this.screenTex = new THREE.CanvasTexture(this.screenCanvas);
    this.screenTex.colorSpace = THREE.SRGBColorSpace;
    const screenMat = new THREE.MeshBasicMaterial({ map: this.screenTex });
    const frameMat = toon(0xff3fa4);
    for (const sx of [-1, 1]) {
      const grp = new THREE.Group();
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(6, 2.25), screenMat);
      screen.position.z = 0.01;
      const frame = new THREE.Mesh(new THREE.BoxGeometry(6.4, 2.65, 0.2), frameMat);
      frame.position.z = -0.1;
      addOutline(frame, INK.bold);
      grp.add(screen, frame);
      grp.position.set(sx * 7.2, 4.3, -8.5);
      grp.lookAt(0, 2.2, 2.5);
      s.add(grp);
    }
    this.drawScreen({ title: 'NEON SPIN' });

    // Stars in the upper sky
    const starGeo = new THREE.BufferGeometry();
    const sp = new Float32Array(700 * 3);
    for (let i = 0; i < 700; i++) {
      const th = Math.random() * Math.PI * 2, ph = (0.25 + Math.random() * 0.7) * 0.5 * Math.PI;
      const r = 200;
      sp[i * 3] = Math.cos(th) * Math.cos(ph) * r;
      sp[i * 3 + 1] = Math.sin(ph) * r;
      sp[i * 3 + 2] = Math.sin(th) * Math.cos(ph) * r;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xfff4c8, size: 2, sizeAttenuation: false, fog: false }));
    s.add(stars);
  }

  _buildCrowd(count) {
    if (this.crowd) {
      this.scene.remove(this.crowd);
      this.crowd.geometry.dispose();
    }
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const seed = new Float32Array(count);
    const palette = [COLORS.cyan, COLORS.magenta, COLORS.yellow, COLORS.purple, 0xffffff].map((h) => new THREE.Color(h));
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const tier = Math.random();
      const r = 13.5 + tier * 9;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = 0.8 + tier * 7 + Math.random() * 0.6;
      pos[i * 3 + 2] = Math.sin(a) * r * 1.2;
      const c = palette[(Math.random() * palette.length) | 0];
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
      seed[i] = Math.random() * 100;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('seed', new THREE.BufferAttribute(seed, 1));
    if (!this.crowdMat) {
      this.crowdMat = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0 }, uCheer: { value: 0 }, uScale: { value: 300 } },
        vertexShader: `
          attribute float seed; attribute vec3 color; varying vec3 vC; varying float vA;
          uniform float uTime; uniform float uCheer; uniform float uScale;
          void main(){
            vec4 mv = modelViewMatrix * vec4(position + vec3(0.0, max(0.0, sin(uTime*9.0+seed*3.0))*uCheer*0.35, 0.0), 1.0);
            float tw = 0.45 + 0.55 * sin(uTime * (1.0 + fract(seed) * 3.0) + seed);
            vA = mix(tw * 0.5, 1.0, uCheer) ;
            vC = color;
            // Guard against points level with / behind the camera: dividing by a
            // tiny or negative depth gives giant or NaN point sizes.
            gl_PointSize = clamp((0.16 + uCheer * 0.1) * uScale / max(-mv.z, 0.5), 0.0, 48.0);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `
          varying vec3 vC; varying float vA;
          void main(){
            vec2 d = gl_PointCoord - 0.5; float r = dot(d,d);
            if (r > 0.25) discard;
            gl_FragColor = vec4(vC * vA * 1.6 * (1.0 - r*3.0), 1.0);
          }`,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
    }
    this.crowd = new THREE.Points(geo, this.crowdMat);
    this.scene.add(this.crowd);
  }

  _buildBall() {
    this.ballMat = new THREE.MeshBasicMaterial({ color: 0xfff8ec });
    this.ball = new THREE.Mesh(new THREE.SphereGeometry(BALL_R, 24, 16), this.ballMat);
    addOutline(this.ball, INK.normal);
    this.scene.add(this.ball);
    this.ballHalo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: radialTexture('rgba(255,255,255,0.9)', 'rgba(255,255,255,0)'),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      color: 0xffffff,
    }));
    this.ballHalo.scale.set(0.08, 0.08, 1);
    this.ballHalo.material.opacity = 0.35;
    this.scene.add(this.ballHalo);
    this.ballLight = new THREE.PointLight(0xffffff, 0.3, 1.6, 2);
    this.scene.add(this.ballLight);
    this.shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: radialTexture('rgba(0,0,0,0.85)', 'rgba(0,0,0,0)', 64), transparent: true, depthWrite: false }),
    );
    this.shadow.rotation.x = -Math.PI / 2;
    this.scene.add(this.shadow);
  }

  _buildMarkers() {
    // Aim reticle on the opponent's half
    this.aim = new THREE.Group();
    this.aimMat = new THREE.MeshBasicMaterial({ color: glow(COLORS.cyan, 2.2), transparent: true, opacity: 0.85, depthWrite: false, side: THREE.DoubleSide });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.075, 0.09, 40), this.aimMat);
    const dot = new THREE.Mesh(new THREE.CircleGeometry(0.014, 16), this.aimMat);
    this.aim.add(ring, dot);
    for (let i = 0; i < 4; i++) {
      const tick = new THREE.Mesh(new THREE.PlaneGeometry(0.008, 0.035), this.aimMat);
      const a = (i / 4) * Math.PI * 2;
      tick.position.set(Math.cos(a) * 0.115, Math.sin(a) * 0.115, 0);
      tick.rotation.z = a + Math.PI / 2;
      this.aim.add(tick);
    }
    this.aim.rotation.x = -Math.PI / 2;
    this.aim.position.y = TABLE_H + 0.002;
    this.aimRing = ring;
    this.scene.add(this.aim);

  }

  drawScreen(info) {
    const c = this.screenCanvas;
    const g = c.getContext('2d');
    const W = c.width, H = c.height;
    const bg = g.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#12002a');
    bg.addColorStop(1, '#001a2a');
    g.fillStyle = bg;
    g.fillRect(0, 0, W, H);
    g.strokeStyle = 'rgba(255,255,255,0.06)';
    for (let y = 0; y < H; y += 6) { g.beginPath(); g.moveTo(0, y); g.lineTo(W, y); g.stroke(); }
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    if (info.title) {
      g.font = '900 130px "Trebuchet MS", sans-serif';
      g.shadowColor = '#ff2bd6';
      g.shadowBlur = 40;
      g.fillStyle = '#ffffff';
      g.fillText(info.title, W / 2, H / 2 - 20);
      g.font = '700 40px "Trebuchet MS", sans-serif';
      g.shadowColor = '#00f0ff';
      g.fillStyle = '#7ff8ff';
      g.fillText(info.sub || 'TABLE TENNIS ARENA', W / 2, H / 2 + 80);
    } else {
      g.font = '800 46px "Trebuchet MS", sans-serif';
      g.shadowBlur = 24;
      g.shadowColor = '#00f0ff';
      g.fillStyle = '#7ff8ff';
      g.fillText('YOU', W * 0.25, 60);
      g.shadowColor = info.color || '#ff2bd6';
      g.fillStyle = info.color || '#ff8af0';
      g.fillText(info.opponent, W * 0.75, 60);
      g.font = '900 190px "Trebuchet MS", sans-serif';
      g.fillStyle = '#ffffff';
      g.shadowColor = '#00f0ff';
      g.fillText(String(info.ps), W * 0.25, 215);
      g.shadowColor = info.color || '#ff2bd6';
      g.fillText(String(info.os), W * 0.75, 215);
      g.font = '700 60px "Trebuchet MS", sans-serif';
      g.fillStyle = '#ffe600';
      g.shadowColor = '#ffe600';
      g.fillText('–', W / 2, 215);
      g.font = '700 34px "Trebuchet MS", sans-serif';
      g.fillStyle = '#c9b8ff';
      g.shadowBlur = 10;
      g.fillText(`GAMES  ${info.pg} – ${info.og}`, W / 2, 340);
      if (info.rally > 2) {
        g.fillStyle = '#ffe600';
        g.fillText(`RALLY ${info.rally}`, W / 2, 60);
      }
    }
    g.shadowBlur = 0;
    this.screenTex.needsUpdate = true;
  }

  // Pixels per metre at distance 1, for size-attenuated point sprites.
  pointScale() {
    const h = this.renderer.domElement.height;
    return h / (2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov) / 2));
  }

  // Ambient animation of the arena. intensity 0..1 grows with the rally.
  update(dt, intensity, cheer) {
    this.time += dt;
    const t = this.time;
    this.floorMat.uniforms.uTime.value = t;
    this.floorMat.uniforms.uInt.value = intensity;
    this.crowdMat.uniforms.uTime.value = t;
    this.crowdMat.uniforms.uCheer.value = cheer;
    this.crowdMat.uniforms.uScale.value = this.pointScale();
    const hueShift = intensity * 0.35 * Math.sin(t * 0.7);
    const pulse = 0.5 + 0.5 * Math.sin(t * (2 + intensity * 6));
    for (const m of this.pillarMats) {
      const k = 1.6 + intensity * 1.6 + 0.9 * Math.sin(t * 2.5 + m.userData.i * 0.7) * (0.3 + intensity);
      m.color.copy(m.userData.base).offsetHSL(hueShift, 0, 0).multiplyScalar(k);
    }
    this.haloMats.forEach((m, i) => {
      m.color.copy(m.userData.base).offsetHSL(hueShift * (i + 1), 0, 0).multiplyScalar(1.6 + intensity * 2 * pulse);
    });
    for (const b of this.beams) {
      const p = b.userData.phase;
      b.rotation.z = Math.sin(t * 0.5 + p) * 0.45;
      b.rotation.x = Math.cos(t * 0.37 + p) * 0.3;
      b.material.uniforms.uAlpha.value = 0.06 + intensity * 0.12 + cheer * 0.1;
    }
    this.trimMat.color.setHex(COLORS.cyan).offsetHSL(intensity * 0.5 * (0.5 + 0.5 * Math.sin(t * 1.3)), 0, 0).multiplyScalar(2 + intensity * 2);
    this.rimA.intensity = 1.6 + intensity * 3;
    this.rimB.intensity = 1.6 + intensity * 3;
    if (this.bloom) {
      this.bloom.strength = (0.75 + intensity * 0.6 + cheer * 0.15) * (this.q.bloomStrength || 1);
    }
  }
}
