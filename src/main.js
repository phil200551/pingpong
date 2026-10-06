import { World } from './scene.js';
import { Audio } from './audio.js';
import { Input } from './input.js';
import { Game } from './game.js';
import { UI } from './ui.js';
import { ImpactFX } from './impact.js';
import { loadSettings, saveSettings, QUALITY, QUALITY_ORDER } from './settings.js';
import { loadProgress, recordWin } from './progress.js';
import { OPPONENTS, PLAYER } from './config.js';

const settings = loadSettings();
const progress = loadProgress();
// You can only pick opponents you have unlocked on the ladder.
settings.difficulty = Math.max(0, Math.min(settings.difficulty | 0, progress.unlocked - 1));
const canvas = document.getElementById('c');
const world = new World(canvas, settings);
const audio = new Audio();
const VOLUME_KEYS = ['master', 'music', 'sfx', 'crowd'];
const applyVolumes = () => audio.setVolumes(Object.fromEntries(VOLUME_KEYS.map((k) => [k, settings[k]])));
applyVolumes();
audio.setMuted(settings.muted);
audio.announcer = settings.announcer;
const input = new Input(canvas);

let game = null;

const ui = new UI(settings, progress, {
  onPlay() {
    startMatch(settings.difficulty);
  },
  onResume() {
    audio.unlock();
    audio.ui('select');
    resume();
  },
  onRestart() {
    // Rematch / restart: the same opponent again.
    startMatch(game.oppIndex ?? settings.difficulty);
  },
  onNext() {
    // Straight on to the opponent you just unlocked.
    startMatch(settings.difficulty);
  },
  onQuit() {
    audio.ui('select');
    input.active = false;
    ui.showHUD(false);
    ui.hint('');
    ui.show('menu');
    game.startDemo();
    game.drawScreen();
  },
  onSettings(key) {
    saveSettings(settings);
    if (VOLUME_KEYS.includes(key)) {
      applyVolumes();
    } else if (key === 'muted') {
      audio.setMuted(settings.muted);
      ui.setMuted(settings.muted);
    } else if (key === 'quality') {
      settings.firstRun = false;
      applyQualityChange();
    } else if (key === 'msaa') {
      applyQualityChange();
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

function startMatch(index) {
  audio.unlock();
  audio.ui('select');
  ui.show(null);
  ui.showHUD(true);
  game.startMatch(index, settings.matchLength);
  focusGame();
  armWatchdog();
}

game = new Game(world, audio, ui, input, settings);
// Winning a match moves you up the ladder.
game.onMatchEnd = (g) => {
  if (g.match.winner !== PLAYER) return null;
  const result = recordWin(progress, g.oppIndex);
  if (result.unlocked) {
    settings.difficulty = OPPONENTS.indexOf(result.unlocked);
    saveSettings(settings);
  }
  ui.buildLadder();
  ui.refreshMenu();
  return result;
};
const impact = new ImpactFX(document.getElementById('impact'));
game.impact = impact;
world.precompile();
ui.show('menu');
ui.setMuted(settings.muted);

function toggleMute() {
  settings.muted = !settings.muted;
  audio.setMuted(settings.muted);
  ui.setMuted(settings.muted);
  saveSettings(settings);
  ui.buildSettings(); // keep the Mute checkbox in step
  ui.toast(settings.muted ? 'Sound <b>muted</b>. Press <b>M</b> to turn it back on.' : 'Sound <b>on</b>.', 2.5);
}

function applyQualityChange() {
  world.applyQuality();
  game.rebuildEffects();
  world.precompile();
  armWatchdog();
}

function setQuality(q) {
  settings.quality = q;
  applyQualityChange();
  ui.buildSettings();
  saveSettings(settings);
}

// Black-frame watchdog. Some GPU/driver combinations can render a black
// picture at a particular quality level. For a few seconds after the quality
// changes (or a match starts) sample the rendered frame; if it keeps coming
// out black, step the quality down instead of leaving you with a black screen.
const watchdog = { active: false, next: 0, checks: 0, black: 0 };
function armWatchdog(delayMs = 1200) {
  watchdog.active = true;
  watchdog.next = performance.now() + delayMs;
  watchdog.checks = 0;
  watchdog.black = 0;
}
function runWatchdog(now) {
  if (!watchdog.active || now < watchdog.next || world.contextLost) return;
  watchdog.next = now + 350;
  const blackShare = world.sampleBlackness();
  if (blackShare === null) return;
  watchdog.checks++;
  if (blackShare > 0.6) watchdog.black++;
  if (watchdog.black >= 3) {
    watchdog.active = false;
    const i = QUALITY_ORDER.indexOf(settings.quality);
    if (settings.msaa) {
      // Multisampled buffers are the prime suspect: turn them off first.
      settings.msaa = false;
      applyQualityChange();
      ui.buildSettings();
      saveSettings(settings);
      ui.toast('The picture was coming out black with <b>MSAA</b> on, so I turned MSAA off.', 8);
    } else if (i > 0) {
      const from = QUALITY[settings.quality].label;
      setQuality(QUALITY_ORDER[i - 1]);
      ui.toast(`The picture was coming out black on <b>${from}</b> graphics on this computer, so I switched to <b>${QUALITY[settings.quality].label}</b>.`, 8);
    }
  } else if (watchdog.checks >= 10) {
    watchdog.active = false; // frames look healthy
  }
}
armWatchdog(1500);

// If the GPU driver resets, three.js restores the context; rebuild our
// buffers and step down from the heaviest levels.
world.onContextLost = () => ui.toast('The graphics driver reset — recovering…', 4);
world.onContextRestored = () => {
  game.rebuildEffects();
  const i = QUALITY_ORDER.indexOf(settings.quality);
  if (i >= 2) {
    setQuality(QUALITY_ORDER[i - 1]);
    ui.toast(`Recovered from a graphics reset — switched to <b>${QUALITY[settings.quality].label}</b> graphics.`, 6);
  } else {
    world.precompile();
    armWatchdog();
  }
};

function focusGame() {
  // A menu button keeping focus would otherwise be "pressed" by Space.
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  input.active = true;
}

function pause() {
  if (game.mode !== 'match' || game.paused || game.state === 'over') return;
  game.paused = true;
  input.active = false;
  audio.setMuffle(true);
  ui.show('pause');
  ui.hint('');
}

function resume() {
  ui.show(null);
  game.paused = false;
  if (!game.replay) audio.setMuffle(false);
  focusGame();
  armWatchdog(600);
  if (game.rally.phase === 'serve' && game.rally.server === 'player') {
    game.rally.serveReadyAt = game.time + 0.3;
  }
}

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyM' && !e.repeat && !e.ctrlKey && !e.metaKey && !e.altKey) {
    audio.unlock();
    toggleMute();
    return;
  }
  if (e.code === 'Escape' || e.code === 'KeyP') {
    if (game.mode !== 'match' || game.state === 'over') return;
    if (game.paused) {
      if (ui.current === 'pause') resume();
      else if (ui.current === 'settings' || ui.current === 'howto') ui.show('pause');
    } else {
      pause();
    }
  }
});

// Pause if you switch away from the game.
document.addEventListener('visibilitychange', () => {
  if (document.hidden) pause();
});
window.addEventListener('blur', pause);

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
    setQuality(q);
    ui.toast(`Graphics set to <b>${QUALITY[q].label}</b> for a smoother frame rate — you can change this in Settings.`);
  } else {
    saveSettings(settings);
  }
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
  ui.setPlaying(game.mode === 'match' && !game.paused && game.state !== 'over');
  world.render();
  impact.update(now, world.camera);
  runWatchdog(now);
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
window.__neonspin = { game, world, audio, settings, impact, progress, ui };
