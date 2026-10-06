// Drives the HumanController with scripted keyboard input (a "robot human")
// to check that reach, timing windows and serving work end-to-end.
//   node tools/bot-human.mjs [difficultyIndex] [timingErrorSeconds] [seconds]
import * as THREE from 'three';
import { Game } from '../src/game.js';
import { STRIKE_T, PLAYER, AI } from '../src/config.js';

const noop = new Proxy({}, { get: () => () => {} });
const world = { scene: new THREE.Scene(), camera: new THREE.PerspectiveCamera(), update() {}, drawScreen() {}, pointScale: () => 800 };
const settings = { quality: 'low', difficulty: 0, matchLength: 3, slowmo: false, shake: false, timingGuide: true };
const keys = new Set();
const pressed = new Set();
const input = {
  isDown: (k) => keys.has(k), wasPressed: (k) => pressed.has(k), mouseDown: [false, false, false], mousePressed: [false, false, false],
  endFrame() { pressed.clear(); },
};
const diff = +(process.argv[2] ?? 2);
const jitter = +(process.argv[3] ?? 0.015);
const seconds = +(process.argv[4] ?? 600);
const reaction = +(process.argv[5] ?? 0);     // seconds before you start moving
const posErr = +(process.argv[6] ?? 0);       // metres of lateral misjudgement (sd)
const gauss = () => { let u = 0, v = 0; while (!u) u = Math.random(); while (!v) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };

const game = new Game(world, noop, noop, input, settings);
game.updateVisuals = () => {};
game.startMatch(diff, 99);
const labels = {};
const reasons = {};
const origPop = game.ui.pop;
game.ui = new Proxy({}, { get: (t, k) => (k === 'pop' ? (txt) => { labels[txt] = (labels[txt] || 0) + 1; } : () => {}) });
const oe = game.endPoint.bind(game);
game.endPoint = (w, r) => { if (game.rally.phase !== 'dead') reasons[w + ':' + r] = (reasons[w + ':' + r] || 0) + 1; oe(w, r); };

let plannedPress = null;
let misjudge = 0, reactUntil = 0;
let lastStruckAt = -1;
const dt = 1 / 144;
for (let t = 0; t < seconds; t += dt) {
  const h = game.human, r = game.rally, f = h.forecast;
  keys.clear();
  let tx = 0.1, tz = 2.1;
  if (r.phase === 'serve' && r.server === PLAYER) {
    tz = 2.0;
    if (game.canServe() && Math.abs(h.z - tz) < 0.1) pressed.add('Space');
  } else if (r.phase === 'toss' && r.server === PLAYER) {
    if (game.ball.vy < 0 && game.ball.py < 1.04 + 0.3 && h.swingT < 0) pressed.add('Space');
  } else if (f.valid) {
    if (plannedPress === null || r.hits !== lastStruckAt) {
      plannedPress = STRIKE_T + gauss() * jitter;
      lastStruckAt = r.hits;
      misjudge = gauss() * posErr;
      reactUntil = game.time + reaction;
    }
    tx = game.time < reactUntil ? h.x : f.x - 0.33 + misjudge;
    if (f.t <= plannedPress && h.swingT < 0) pressed.add('Space');
  }
  if (h.x < tx - 0.05) keys.add('KeyD'); else if (h.x > tx + 0.05) keys.add('KeyA');
  if (h.z < tz - 0.08) keys.add('KeyS'); else if (h.z > tz + 0.08) keys.add('KeyW');
  game.update(dt);
  input.endFrame();
}
console.log('score', game.match.games, game.match.score, 'stats', game.stats);
console.log('labels', labels);
console.log('reasons', reasons);
