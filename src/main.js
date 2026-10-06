import { World } from './scene.js';
import { Audio } from './audio.js';
import { Input } from './input.js';
import { Game } from './game.js';
import { UI } from './ui.js';
import { loadSettings, saveSettings, QUALITY } from './settings.js';

const settings = loadSettings();
const canvas = document.getElementById('c');
const world = new World(canvas, settings);
const audio = new Audio();
audio.setVolumes({ master: settings.master, music: settings.music, sfx: settings.sfx });
audio.announcer = settings.announcer;
const input = new Input(canvas);

let game = null;
let lastLockChange = 0;

const ui = new UI(settings, {
  onPlay() {
    audio.unlock();
    audio.ui('select');
    ui.show(null);
    ui.showHUD(true);
    game.startMatch(settings.difficulty, settings.matchLength);
    lockMouse();
  },
  onResume() {
    audio.unlock();
    audio.ui('select');
    resume();
  },
  onRestart() {
    audio.unlock();
    audio.ui('select');
    ui.show(null);
    ui.showHUD(true);
    game.startMatch(settings.difficulty, settings.matchLength);
    lockMouse();
  },
  onQuit() {
    audio.ui('select');
    input.releaseLock();
    input.active = false;
    ui.showHUD(false);
    ui.hint('');
    ui.show('menu');
    game.startDemo();
    game.drawScreen();
  },
  onSettings(key) {
    saveSettings(settings);
    if (key === 'master' || key === 'music' || key === 'sfx') {
      audio.setVolumes({ master: settings.master, music: settings.music, sfx: settings.sfx });
    } else if (key === 'quality') {
      settings.firstRun = false;
      world.applyQuality();
      game.rebuildEffects();
      world.precompile();
    } else if (key === 'announcer') {
      audio.announcer = settings.announcer;
    } else if (key === 'fov') {
      world.camera.fov = settings.fov;
      world.camera.updateProjectionMatrix();
    }
  },
  sound(kind) {
    if (kind === 'hover') audio.ui('move');
    else { audio.unlock(); audio.ui(kind); }
  },
});

game = new Game(world, audio, ui, input, settings);
world.precompile();
ui.show('menu');

function lockMouse() {
  // A menu button keeping focus would otherwise be "pressed" by Space.
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  input.active = true;
  input.requestLock();
}

function pause() {
  if (game.mode !== 'match' || game.paused || game.state === 'over') return;
  game.paused = true;
  input.active = false;
  ui.show('pause');
  ui.hint('');
}

function resume() {
  ui.show(null);
  game.paused = false;
  lockMouse();
  if (game.rally.phase === 'serve' && game.rally.server === 'player') {
    game.rally.serveReadyAt = game.time + 0.3;
  }
}

input.onLockChange = (locked) => {
  lastLockChange = performance.now();
  if (!locked) pause();
};

window.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' || e.code === 'KeyP') {
    if (performance.now() - lastLockChange < 250) return;
    if (game.mode !== 'match' || game.state === 'over') return;
    if (game.paused) {
      if (ui.current === 'pause') resume();
      else if (ui.current === 'settings' || ui.current === 'howto') ui.show('pause');
    } else {
      input.releaseLock();
      pause();
    }
  }
});

// Clicking the game view while playing re-captures the mouse.
canvas.addEventListener('click', () => {
  if (game.mode === 'match' && !game.paused && !input.locked) lockMouse();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) pause();
});

window.addEventListener('resize', () => world.resize());

// ------------------------------------------------------------------ loop
let last = performance.now();
let fpsFrames = 0, fpsTime = 0;
// First run only: measure the frame rate for a few seconds on the menu and
// step the graphics quality down if this machine is struggling.
const tune = { t: 0, frames: 0, time: 0 };
function autoTune(rawDt) {
  tune.t += rawDt;
  if (tune.t < 1.5) return; // let shaders compile first
  tune.frames++;
  tune.time += rawDt;
  if (tune.t < 4.5) return;
  settings.firstRun = false;
  const fps = tune.frames / tune.time;
  let q = settings.quality;
  if (fps < 30) q = 'low';
  else if (fps < 55 && (q === 'high' || q === 'ultra')) q = 'medium';
  if (q !== settings.quality) {
    settings.quality = q;
    world.applyQuality();
    game.rebuildEffects();
    world.precompile();
    ui.buildSettings();
    ui.toast(`Graphics set to <b>${QUALITY[q].label}</b> for a smoother frame rate — you can change this in Settings.`);
  }
  saveSettings(settings);
}

function frame(now) {
  requestAnimationFrame(frame);
  const rawDt = Math.max(0, (now - last) / 1000);
  let dt = rawDt;
  last = now;
  if (settings.firstRun) autoTune(rawDt);
  if (dt > 0.05) dt = 0.05;
  if (dt <= 0) dt = 0.0001;

  game.update(dt);
  ui.setIntensity(game.mode === 'match' ? game.intensity : 0);
  ui.lockHint(game.mode === 'match' && !game.paused && game.state !== 'over' && !input.locked);
  world.render();
  input.endFrame();

  fpsFrames++;
  fpsTime += dt;
  if (fpsTime >= 0.5) {
    ui.fps(Math.round(fpsFrames / fpsTime), settings.showFps);
    fpsFrames = 0;
    fpsTime = 0;
  }
}
requestAnimationFrame(frame);

// Debug/testing handle
window.__neonspin = { game, world, audio, settings };
