import { OPPONENTS } from './config.js';
import { PADDLES, ARENAS, meetsReq } from './cosmetics.js';

// Everything you've achieved, saved in the browser: how far up the ladder you
// are, your personal bests, the cosmetics you've unlocked and picked.
// Add ?unlock to the page address to open the whole ladder (for testing).
const KEY = 'neonspin.progress.v1';
const RECORDS = { rally: 0, perfectPct: 0, fastest: 0, smashes: 0, serveWon: 0, perfects: 0 };

export function loadProgress() {
  let p = null;
  try {
    p = JSON.parse(localStorage.getItem(KEY) || 'null');
  } catch (e) {
    p = null;
  }
  p = p || {};
  const out = {
    unlocked: p.unlocked || 1,
    beaten: { ...p.beaten },
    records: { ...RECORDS, ...p.records },
    totals: { matches: 0, wins: 0, ...p.totals },
    owned: { ...p.owned },
    paddle: p.paddle || 'red',
    arena: p.arena || 'neon',
  };
  if (typeof location !== 'undefined' && /[?&]unlock/.test(location.search)) out.unlocked = OPPONENTS.length;
  out.unlocked = Math.max(1, Math.min(OPPONENTS.length, out.unlocked | 0));
  refreshOwned(out); // starters, plus anything earned before cosmetics existed
  return out;
}

export function saveProgress(p) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch (e) {
    /* storage unavailable: progress just won't persist */
  }
}

// Unlock every cosmetic whose requirement is now met. Returns the new ones.
export function refreshOwned(p) {
  const fresh = [];
  for (const [type, list] of [['paddle', PADDLES], ['arena', ARENAS]]) {
    for (const item of list) {
      const key = `${type}:${item.id}`;
      if (!p.owned[key] && meetsReq(item.req, p)) {
        p.owned[key] = true;
        fresh.push({ type, item });
      }
    }
  }
  return fresh;
}

export const owns = (p, type, id) => !!p.owned[`${type}:${id}`];

// Match stats -> the numbers we keep bests for (fastest shot in km/h;
// PERFECT % only counts once you've hit the ball 20 times in the match).
export function matchNumbers(s) {
  return {
    rally: s.longest,
    perfectPct: s.hits >= 20 ? Math.round((100 * s.perfects) / s.hits) : 0,
    fastest: Math.round(s.fastest * 3.6),
    smashes: s.smashesLanded,
    serveWon: s.serveWon,
    perfects: s.perfects,
  };
}

// Compare with your personal bests; returns the keys of new records.
function applyRecords(p, s) {
  const now = matchNumbers(s);
  const fresh = [];
  for (const k of Object.keys(RECORDS)) {
    if (now[k] > (p.records[k] || 0)) {
      p.records[k] = now[k];
      fresh.push(k);
    }
  }
  return fresh;
}

// A match is over. Updates bests, totals, the ladder and cosmetics, saves,
// and reports what's new:
//   { records: [...keys], unlocked: <opponent>|null, ladderDone, cosmetics: [...] }
export function finishMatch(p, stats, oppIndex, won) {
  const records = applyRecords(p, stats);
  p.totals.matches++;
  let unlocked = null, ladderDone = false;
  if (won) {
    p.totals.wins++;
    const o = OPPONENTS[oppIndex];
    ladderDone = !p.beaten[o.id] && oppIndex === OPPONENTS.length - 1;
    p.beaten[o.id] = true;
    if (oppIndex + 1 < OPPONENTS.length && p.unlocked < oppIndex + 2) {
      p.unlocked = oppIndex + 2;
      unlocked = OPPONENTS[oppIndex + 1];
    }
  }
  const cosmetics = refreshOwned(p);
  saveProgress(p);
  return { records, unlocked, ladderDone, cosmetics };
}

// Leaving a match early still keeps any bests and milestone unlocks.
export function abandonMatch(p, stats) {
  applyRecords(p, stats);
  const cosmetics = refreshOwned(p);
  saveProgress(p);
  return cosmetics;
}
