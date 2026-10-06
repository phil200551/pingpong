const KEY = 'neonspin.settings.v1';

export const QUALITY = {
  low:    { label: 'Low',    pixelRatio: 0.75, bloom: false, msaa: 0, particles: 0.35, ballLight: false, crowd: 600,  trail: 24 },
  medium: { label: 'Medium', pixelRatio: 1,    bloom: true,  msaa: 0, particles: 0.65, ballLight: true,  crowd: 1500, trail: 36, bloomScale: 0.5 },
  high:   { label: 'High',   pixelRatio: 1.5,  bloom: true,  msaa: 4, particles: 1,    ballLight: true,  crowd: 3000, trail: 48, bloomScale: 1 },
  ultra:  { label: 'Ultra',  pixelRatio: 2,    bloom: true,  msaa: 4, particles: 1.4,  ballLight: true,  crowd: 5000, trail: 64, bloomScale: 1 },
};

export const DEFAULTS = {
  sensitivity: 1,
  master: 0.8,
  music: 0.5,
  sfx: 0.9,
  quality: 'high',
  fov: 72,
  timingGuide: true,
  shake: true,
  slowmo: true,
  showFps: false,
  difficulty: 1,
  matchLength: 1,
};

export function loadSettings() {
  let s = null;
  try {
    s = JSON.parse(localStorage.getItem(KEY) || 'null');
  } catch (e) {
    s = null;
  }
  const out = { ...DEFAULTS, ...(s || {}) };
  // First run: let the game measure the frame rate and pick a quality level.
  out.firstRun = !s || !('quality' in s);
  if (!QUALITY[out.quality]) out.quality = DEFAULTS.quality;
  return out;
}

export function saveSettings(s) {
  try {
    const { firstRun, ...rest } = s;
    localStorage.setItem(KEY, JSON.stringify(rest));
  } catch (e) {
    /* storage unavailable: settings just won't persist */
  }
}
