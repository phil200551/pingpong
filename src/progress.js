import { OPPONENTS } from './config.js';
import { PADDLES, ARENAS, meetsReq } from './cosmetics.js';

// Everything you've achieved, saved in the browser: how far up the ladder you
// are, your personal bests, the cosmetics you've unlocked and picked.
// Add ?unlock to the page address to open the whole ladder (for testing).
const KEY = 'neonspin.progress.v1';
const RECORDS = { rally: 0, perfectPct: 0, fastest: 0, smashes: 0, serveWon: 0, perfects: 0 };
// Watch & Bet coins (play money only).
export const START_COINS = 100;
export const REFILL_COINS = 50;
export const REFILL_COOLDOWN = 2 * 60 * 1000; // ms between free refills
const HISTORY = 50; // bets kept in the history
const BET_STATS = { wagered: 0, returned: 0, bets: 0, wins: 0, biggest: 0, streak: 0, bestStreak: 0 };

const isObj = (v) => !!v && typeof v === 'object' && !Array.isArray(v);
// Whole, non-negative numbers only (saved data can be old or corrupted).
const count = (v, def = 0) => (Number.isFinite(v) && v >= 0 ? Math.floor(v) : def);
const counts = (defaults, src) => {
  const out = { ...defaults };
  if (isObj(src)) for (const k of Object.keys(defaults)) out[k] = count(src[k], defaults[k]);
  return out;
};
const flags = (src) => {
  const out = {};
  if (isObj(src)) for (const [k, v] of Object.entries(src)) if (v) out[k] = true;
  return out;
};
const validStake = (l) => isObj(l) && Number.isInteger(l.stake) && l.stake >= 1;
const validBet = (b) => isObj(b) && Array.isArray(b.legs) && b.legs.length > 0 && b.legs.every(validStake) &&
  Number.isInteger(b.a) && b.a >= 0 && b.a < OPPONENTS.length && Number.isInteger(b.b) && b.b >= 0 && b.b < OPPONENTS.length;

export function loadProgress(now = Date.now()) {
  let p = null;
  try {
    p = JSON.parse(localStorage.getItem(KEY) || 'null');
  } catch (e) {
    p = null;
  }
  if (!isObj(p)) p = {};
  const out = {
    unlocked: p.unlocked || 1,
    beaten: flags(p.beaten),
    records: counts(RECORDS, p.records),
    totals: counts({ matches: 0, wins: 0 }, p.totals),
    owned: flags(p.owned),
    paddle: typeof p.paddle === 'string' ? p.paddle : 'red',
    arena: typeof p.arena === 'string' ? p.arena : 'neon',
    coins: Number.isFinite(p.coins) ? Math.max(0, Math.floor(p.coins)) : START_COINS,
    // Only well-formed bets are kept: the stats screen reads every field.
    bets: Array.isArray(p.bets) ? p.bets.filter((b) => validBet(b) && Number.isFinite(b.staked) && Number.isFinite(b.returned)).slice(-HISTORY) : [],
    betStats: counts(BET_STATS, p.betStats),
    openBet: validBet(p.openBet) ? p.openBet : null,
    // A refill time in the future (the clock was changed) would lock the
    // refill for good, so it never counts as later than now.
    refillAt: Number.isFinite(p.refillAt) ? Math.min(p.refillAt, now) : 0,
  };
  // A bet on a match that never finished (the page was closed mid-match) is
  // refunded.
  if (out.openBet) {
    out.refunded = out.openBet.legs.reduce((n, l) => n + l.stake, 0);
    out.coins += out.refunded;
    out.openBet = null;
  }
  if (typeof location !== 'undefined' && /[?&]unlock/.test(location.search)) out.unlocked = OPPONENTS.length;
  out.unlocked = Math.max(1, Math.min(OPPONENTS.length, out.unlocked | 0));
  refreshOwned(out); // starters, plus anything earned before cosmetics existed
  return out;
}

export function saveProgress(p) {
  try {
    const { refunded, ...keep } = p;
    localStorage.setItem(KEY, JSON.stringify(keep));
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

// Coins for beating a ladder opponent (easiest first), scaled up for longer
// matches, plus a bonus the first time you beat each one.
export const LADDER_COINS = [5, 10, 15, 20, 30];
const LENGTH_BONUS = { 1: 1, 2: 1.5, 3: 2 };

// A match is over. Updates bests, totals, the ladder, cosmetics and coins,
// saves, and reports what's new:
//   { records: [...keys], unlocked: <opponent>|null, ladderDone, cosmetics: [...],
//     coins: { lines: [[label, n]], total, before, balance } | null }
export function finishMatch(p, stats, oppIndex, won, gamesToWin = 1) {
  const records = applyRecords(p, stats);
  p.totals.matches++;
  let unlocked = null, ladderDone = false, coins = null;
  if (won) {
    p.totals.wins++;
    const o = OPPONENTS[oppIndex];
    const first = !p.beaten[o.id];
    ladderDone = first && oppIndex === OPPONENTS.length - 1;
    const base = LADDER_COINS[oppIndex] || 5;
    const lines = [[`Beat ${o.bot}${gamesToWin > 1 ? ` (best of ${gamesToWin * 2 - 1})` : ''}`, Math.round(base * (LENGTH_BONUS[gamesToWin] || 1))]];
    if (first) lines.push([`First win over ${o.bot}`, base * 2]);
    const total = lines.reduce((n, l) => n + l[1], 0);
    coins = { lines, total, before: p.coins, balance: p.coins + total };
    p.coins += total;
    p.beaten[o.id] = true;
    if (oppIndex + 1 < OPPONENTS.length && p.unlocked < oppIndex + 2) {
      p.unlocked = oppIndex + 2;
      unlocked = OPPONENTS[oppIndex + 1];
    }
  }
  const cosmetics = refreshOwned(p);
  saveProgress(p);
  return { records, unlocked, ladderDone, cosmetics, coins };
}

// Coins earned in practice (milestones, see practice.js).
export function earnCoins(p, n) {
  p.coins += n;
  saveProgress(p);
  return p.coins;
}

// Leaving a match early still keeps any bests and milestone unlocks.
export function abandonMatch(p, stats) {
  applyRecords(p, stats);
  const cosmetics = refreshOwned(p);
  saveProgress(p);
  return cosmetics;
}

// ------------------------------------------------------------ Watch & Bet
// A bet is placed on one match and has one or more legs, each with its own
// stake and chance: { kind, pick, label, stake, p, pays }. Stakes leave your
// balance when you place the bet.
export function placeBet(p, bet) {
  const total = bet.legs.reduce((n, l) => n + l.stake, 0);
  if (!bet.legs.length || total > p.coins || bet.legs.some((l) => !(l.stake >= 1) || l.stake !== Math.floor(l.stake))) return false;
  p.coins -= total;
  p.openBet = { ...bet, at: Date.now() };
  saveProgress(p);
  return true;
}

// The match is over: pay out the legs that came in. outcome(leg) says
// whether a leg won. Returns what happened, leg by leg.
export function settleBet(p, outcome, summary) {
  const bet = p.openBet;
  if (!bet) return null;
  const st = p.betStats;
  const legs = bet.legs.map((l) => ({ ...l, won: !!outcome(l) }));
  let staked = 0, returned = 0;
  for (const l of legs) {
    staked += l.stake;
    st.wagered += l.stake;
    st.bets++;
    if (l.won) {
      returned += l.pays;
      st.returned += l.pays;
      st.wins++;
      st.biggest = Math.max(st.biggest, l.pays - l.stake);
      st.streak++;
      st.bestStreak = Math.max(st.bestStreak, st.streak);
    } else {
      st.streak = 0;
    }
  }
  const before = p.coins + staked;
  p.coins += returned;
  p.bets.push({ at: Date.now(), a: bet.a, b: bet.b, length: bet.length, legs, staked, returned, result: summary });
  if (p.bets.length > HISTORY) p.bets.splice(0, p.bets.length - HISTORY);
  p.openBet = null;
  saveProgress(p);
  return { legs, staked, returned, net: returned - staked, before, balance: p.coins };
}

// Out of coins? A free refill, at most once every REFILL_COOLDOWN.
export function refillWait(p, now = Date.now()) {
  if (p.coins > 0 || p.openBet) return -1; // not needed
  return Math.max(0, p.refillAt + REFILL_COOLDOWN - now);
}

export function claimRefill(p, now = Date.now()) {
  if (refillWait(p, now) !== 0) return false;
  p.coins += REFILL_COINS;
  p.refillAt = now;
  saveProgress(p);
  return true;
}
