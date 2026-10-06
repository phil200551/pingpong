const KEY = 'neonspin.settings.v1';

// No level uses multisampled (MSAA) render targets: anti-aliasing is a
// post-process (FXAA/SMAA) and higher levels render more pixels instead.
export const QUALITY = {
  low:    { label: 'Low',    pixelRatio: 0.75, bloom: false, aa: 'fxaa', particles: 0.35, ballLight: false, crowd: 600,  trail: 24 },
  medium: { label: 'Medium', pixelRatio: 1,    bloom: true,  aa: 'fxaa', particles: 0.65, ballLight: true,  crowd: 1500, trail: 36, bloomScale: 0.5, bloomStrength: 0.85 },
  high:   { label: 'High',   pixelRatio: 1.5,  bloom: true,  aa: 'smaa', particles: 1,    ballLight: true,  crowd: 3000, trail: 48, bloomScale: 1 },
  ultra:  { label: 'Ultra',  pixelRatio: 2,    bloom: true,  aa: 'smaa', particles: 1.4,  ballLight: true,  crowd: 5000, trail: 64, bloomScale: 1 },
};

export const QUALITY_ORDER = ['low', 'medium', 'high', 'ultra'];

export const DEFAULTS = {
  master: 0.8,
  music: 0.5,
  sfx: 0.9,
  crowd: 0.7,
  muted: false,
  quality: 'high',
  msaa: false,
  fov: 72,
  timingGuide: true,
  shake: true,
  slowmo: true,
  announcer: true,
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
