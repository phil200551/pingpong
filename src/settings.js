import { PRACTICE_OPTIONS } from './practice.js';

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
  difficulty: 0,
  matchLength: 1,
  practice: { speed: 'medium', spin: 'random', place: 'random', rate: 'steady' },
  watch: { a: 1, b: 2, length: 1 }, // Watch & Bet: bot 1, bot 2, match length
};

const isObj = (v) => !!v && typeof v === 'object' && !Array.isArray(v);
const num = (v, def, lo, hi) => (Number.isFinite(+v) && v !== null && v !== '' ? Math.min(hi, Math.max(lo, +v)) : def);

export function loadSettings() {
  let s = null;
  try {
    s = JSON.parse(localStorage.getItem(KEY) || 'null');
  } catch (e) {
    s = null;
  }
  if (!isObj(s)) s = null;
  const out = { ...DEFAULTS, ...(s || {}) };
  // First run: let the game measure the frame rate and pick a quality level.
  out.firstRun = !s || !('quality' in s);
  // Saved data can be old, hand-edited or corrupted: every value is checked
  // (a string field of view, say, would otherwise break the camera).
  if (!QUALITY[out.quality]) out.quality = DEFAULTS.quality;
  for (const k of ['master', 'music', 'sfx', 'crowd']) out[k] = num(out[k], DEFAULTS[k], 0, 1);
  out.fov = Math.round(num(out.fov, DEFAULTS.fov, 55, 100));
  for (const k of ['muted', 'msaa', 'timingGuide', 'shake', 'slowmo', 'announcer', 'showFps']) out[k] = !!out[k];
  out.difficulty = Math.floor(num(out.difficulty, 0, 0, 99));
  if (![1, 2, 3].includes(out.matchLength)) out.matchLength = DEFAULTS.matchLength;
  const pr = isObj(out.practice) ? out.practice : {};
  out.practice = { ...DEFAULTS.practice };
  for (const [k, list] of Object.entries(PRACTICE_OPTIONS)) if (list.some((o) => o[0] === pr[k])) out.practice[k] = pr[k];
  const w = isObj(out.watch) ? out.watch : {};
  out.watch = { ...DEFAULTS.watch };
  for (const k of ['a', 'b']) if (Number.isInteger(w[k])) out.watch[k] = w[k];
  if ([1, 2, 3].includes(w.length)) out.watch.length = w.length;
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
