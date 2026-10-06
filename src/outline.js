import * as THREE from 'three';

// Cartoon ink outlines, "inverted hull" style: every outlined mesh gets a black
// copy that renders only its back faces, pushed outwards along smoothed normals
// by a fixed number of screen pixels. Where the copy peeks out around the
// original you see a clean black line. No extra render passes are needed, so
// the outlines look the same on every graphics quality level.

const resolution = { value: new THREE.Vector2(1920, 1080) };
const materials = [];

const VS = /* glsl */ `
uniform float uWidth;
uniform vec2 uResolution;
attribute vec3 outlineNormal;
#include <fog_pars_vertex>
void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vec4 clip = projectionMatrix * mvPosition;
  vec3 n = normalMatrix * outlineNormal;
  float nl = length(n);
  n = nl > 1e-6 ? n / nl : vec3(0.0);
  vec2 dir = (projectionMatrix * vec4(n, 0.0)).xy;
  float dl = length(dir);
  dir = dl > 1e-6 ? dir / dl : vec2(0.0);
  // Constant width in pixels, thinning a little for far-away objects.
  float px = uWidth * mix(1.0, 0.55, smoothstep(4.0, 22.0, -mvPosition.z));
  clip.xy += dir * (px * 2.0 / uResolution) * clip.w;
  gl_Position = clip;
  #include <fog_vertex>
}`;

const FS = /* glsl */ `
uniform vec3 uColor;
#include <fog_pars_fragment>
void main() {
  gl_FragColor = vec4(uColor, 1.0);
  #include <fog_fragment>
}`;

// widthPx is in CSS pixels; it is scaled by the renderer's pixel ratio.
export function outlineMaterial(widthPx, color = 0x000000) {
  const m = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([
      THREE.UniformsLib.fog,
      { uWidth: { value: widthPx }, uColor: { value: new THREE.Color(color) }, uResolution: { value: null } },
    ]),
    vertexShader: VS,
    fragmentShader: FS,
    side: THREE.BackSide,
    fog: true,
  });
  m.uniforms.uResolution = resolution; // shared by every outline material
  m.userData.cssWidth = widthPx;
  materials.push(m);
  return m;
}

// Call whenever the drawing buffer size or pixel ratio changes.
export function updateOutlines(bufferWidth, bufferHeight, pixelRatio) {
  resolution.value.set(Math.max(1, bufferWidth), Math.max(1, bufferHeight));
  for (const m of materials) m.uniforms.uWidth.value = m.userData.cssWidth * pixelRatio;
}

// Hard-edged shapes (boxes, cylinder rims) have split normals at their
// corners; pushing those out would tear the hull open. Average the normals of
// every vertex that shares a position so the hull stays closed.
function outlineNormals(geometry) {
  if (geometry.getAttribute('outlineNormal')) return;
  const pos = geometry.getAttribute('position');
  const nor = geometry.getAttribute('normal');
  const sums = new Map();
  const keys = new Array(pos.count);
  for (let i = 0; i < pos.count; i++) {
    const k = `${Math.round(pos.getX(i) * 1e4)},${Math.round(pos.getY(i) * 1e4)},${Math.round(pos.getZ(i) * 1e4)}`;
    keys[i] = k;
    let s = sums.get(k);
    if (!s) sums.set(k, (s = [0, 0, 0]));
    s[0] += nor.getX(i); s[1] += nor.getY(i); s[2] += nor.getZ(i);
  }
  const out = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const s = sums.get(keys[i]);
    let l = Math.hypot(s[0], s[1], s[2]);
    let x = s[0], y = s[1], z = s[2];
    if (l < 1e-6) { x = nor.getX(i); y = nor.getY(i); z = nor.getZ(i); l = Math.hypot(x, y, z) || 1; }
    out[i * 3] = x / l; out[i * 3 + 1] = y / l; out[i * 3 + 2] = z / l;
  }
  geometry.setAttribute('outlineNormal', new THREE.BufferAttribute(out, 3));
}

// Give a mesh a black outline. The outline is a child, so it follows the
// mesh's transform and visibility automatically.
export function addOutline(mesh, material) {
  outlineNormals(mesh.geometry);
  const o = new THREE.Mesh(mesh.geometry, material);
  o.name = 'outline';
  o.raycast = () => {};
  mesh.add(o);
  return o;
}
