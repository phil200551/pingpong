// Fires many of your shots with each movement-key combination held and reports
// where they land, how fast they are and how often they stay on the table.
//   node tools/aim-test.mjs [shotsPerCase]
import * as THREE from 'three';
import { Game } from '../src/game.js';
import { PLAYER, AI } from '../src/config.js';
import { stepBall, EV_TABLE, EV_FLOOR } from '../src/physics.js';

const N = +(process.argv[2] || 300);
const noop = new Proxy({}, { get: () => () => {} });
const world = { scene: new THREE.Scene(), camera: new THREE.PerspectiveCamera(), update() {}, drawScreen() {}, pointScale: () => 800 };
const keys = new Set();
const input = { isDown: (k) => keys.has(k), wasPressed: () => false, mouseDown: [false, false, false], mousePressed: [false, false, false], endFrame() {} };
const game = new Game(world, noop, noop, input, { quality: 'low', difficulty: 2, matchLength: 1 });
game.updateVisuals = () => {};
game.startMatch(2, 1);
const h = game.human;

function shoot(side, power, q, serve) {
  keys.clear();
  if (side > 0) keys.add('KeyD');
  if (side < 0) keys.add('KeyA');
  if (power > 0) keys.add('KeyW');
  if (power < 0) keys.add('KeyS');
  const b = game.ball;
  h.x = (Math.random() - 0.5) * 0.8;
  h.z = serve ? 1.95 : 1.8 + Math.random() * 0.6;
  h.vx = side * 3; h.vz = -power * 3;
  h.swingKind = 'drive';
  game.rally = game.freshRally(serve ? PLAYER : AI);
  if (serve) {
    b.px = h.x + 0.12; b.py = 1.0 + Math.random() * 0.1; b.pz = h.z - 0.5;
    b.vx = 0; b.vy = -1; b.vz = 0; b.wx = b.wy = b.wz = 0;
    game.rally.phase = 'toss';
  } else {
    b.px = h.x + 0.33 + (Math.random() - 0.5) * 0.4; b.py = 0.85 + Math.random() * 0.45; b.pz = h.z - 0.55;
    b.vx = (Math.random() - 0.5) * 2; b.vy = 0.5 + Math.random() * 1.5; b.vz = 5 + Math.random() * 7;
    b.wx = (Math.random() * 2 - 1) * 520; b.wy = (Math.random() * 2 - 1) * 160; b.wz = 0; // incoming top/backspin + sidespin
    game.rally.phase = 'play'; game.rally.lastHitter = AI; game.rally.bounces[PLAYER] = 1;
  }
  h.play(q, null, serve);
  const speed = Math.hypot(b.vx, b.vz);
  let ownBounces = 0;
  for (let t = 0; t < 3; t += 1 / 600) {
    const ev = stepBall(b, 1 / 600);
    if (ev & EV_TABLE) {
      if (b.pz > 0) { ownBounces++; if (!serve || ownBounces > 1) return { in: false, speed }; continue; }
      return { in: true, x: b.px, z: b.pz, speed };
    }
    if (ev & EV_FLOOR) return { in: false, speed };
  }
  return { in: false, speed };
}

const combos = [];
for (const power of [0, 1, -1]) for (const side of [0, -1, 1]) combos.push([side, power]);
const name = ([s, p]) => (p > 0 ? 'W' : p < 0 ? 'S' : '') + (s > 0 ? 'D' : s < 0 ? 'A' : '') || 'none';
for (const serve of [false, true]) {
  console.log(serve ? '\nSERVES' : 'RALLY SHOTS', `(${N} per case)   in% at timing quality 0.45 / 0.7 / 1.0 | avg landing x, depth | avg speed m/s`);
  for (const c of combos) {
    const cols = [];
    let xs = 0, zs = 0, sp = 0, n = 0;
    for (const q of [0.45, 0.7, 1.0]) {
      let ins = 0;
      for (let i = 0; i < N; i++) {
        const r = shoot(c[0], c[1], q, serve);
        if (r.in) { ins++; if (q === 0.7) { xs += r.x; zs += -r.z; n++; } }
        if (q === 0.7) sp += r.speed;
      }
      cols.push(((100 * ins) / N).toFixed(0).padStart(3) + '%');
    }
    console.log(`  ${name(c).padEnd(5)} ${cols.join(' / ')} | x ${(xs / n).toFixed(2).padStart(5)}  depth ${(zs / n).toFixed(2)} | ${(sp / N).toFixed(1)}`);
  }
}
