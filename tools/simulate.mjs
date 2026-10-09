// Headless AI-vs-AI simulation to sanity-check rules, physics and difficulty
// balance without a browser:  node tools/simulate.mjs [seconds]
import * as THREE from 'three';
import { Game } from '../src/game.js';
import { DIFFICULTIES, PLAYER, AI } from '../src/config.js';
import { AIController } from '../src/ai.js';

const noop = new Proxy({}, { get: () => () => {} });
const world = {
  scene: new THREE.Scene(),
  camera: new THREE.PerspectiveCamera(),
  update() {}, drawScreen() {}, pointScale: () => 800,
};
const settings = { quality: 'low', difficulty: 2, matchLength: 1, slowmo: false, shake: false, timingGuide: false };
const input = { isDown: () => false, mouseDown: [false, false, false] };
const seconds = +(process.argv[2] || 600);

function run(pIdx, aIdx) {
  const game = new Game(world, noop, noop, input, settings);
  game.updateVisuals = () => {};
  game.world.update = () => {};
  const reasons = {};
  const origEnd = game.endPoint.bind(game);
  const rallies = [];
  game.endPoint = (w, r) => {
    if (game.rally.phase !== 'dead') {
      reasons[r] = (reasons[r] || 0) + 1;
      rallies.push(game.rally.hits);
      wins[w]++;
    }
    origEnd(w, r);
  };
  const wins = { [PLAYER]: 0, [AI]: 0 };
  game.demoCtl.setProfile(DIFFICULTIES[pIdx]);
  game.aiCtl.setProfile(DIFFICULTIES[aIdx]);
  let lets = 0;
  const origLet = game.letServe.bind(game);
  game.letServe = () => { lets++; origLet(); };
  const dt = 1 / 120;
  for (let t = 0; t < seconds; t += dt) game.update(dt);
  const n = rallies.length;
  const avg = rallies.reduce((a, b) => a + b, 0) / Math.max(1, n);
  const max = Math.max(...rallies);
  console.log(`${DIFFICULTIES[pIdx].bot.padEnd(7)} vs ${DIFFICULTIES[aIdx].bot.padEnd(7)} points=${n} wins=${wins[PLAYER]}:${wins[AI]} avgRally=${avg.toFixed(1)} max=${max} lets=${lets}`, JSON.stringify(reasons));
}

const pairs = process.argv[3] ? [process.argv[3].split(',').map(Number)] : [[0, 0], [2, 2], [4, 4], [0, 4], [4, 0], [1, 3]];
for (const [a, b] of pairs) run(a, b);
