import { OPPONENTS } from './config.js';

// Your progress through the opponent ladder, saved in the browser.
// Add ?unlock to the page address to open the whole ladder (for testing).
const KEY = 'neonspin.progress.v1';

export function loadProgress() {
  let p = null;
  try {
    p = JSON.parse(localStorage.getItem(KEY) || 'null');
  } catch (e) {
    p = null;
  }
  const out = { unlocked: 1, beaten: {}, ...(p || {}) };
  if (typeof location !== 'undefined' && /[?&]unlock/.test(location.search)) out.unlocked = OPPONENTS.length;
  out.unlocked = Math.max(1, Math.min(OPPONENTS.length, out.unlocked | 0));
  return out;
}

export function saveProgress(p) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch (e) {
    /* storage unavailable: progress just won't persist */
  }
}

// You beat opponent i: mark it and open the next rung. Returns what changed:
// { unlocked: <opponent> | null, ladderDone: bool }.
export function recordWin(p, i) {
  const o = OPPONENTS[i];
  const first = !p.beaten[o.id];
  p.beaten[o.id] = true;
  let unlocked = null;
  if (i + 1 < OPPONENTS.length && p.unlocked < i + 2) {
    p.unlocked = i + 2;
    unlocked = OPPONENTS[i + 1];
  }
  saveProgress(p);
  return { unlocked, ladderDone: first && i === OPPONENTS.length - 1 };
}
