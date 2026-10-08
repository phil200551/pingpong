import { ODDS_DATA } from './odds-data.js';

// Watch & Bet odds, straight from the simulations in odds-data.js (see
// tools/odds.mjs): thousands of headless games for every pair of bots, played
// exactly as you watch them (form, momentum and all). No house cut: a bet
// pays its stake divided by its chance, rounded down to whole coins.

// The shortest chance we price. Anything rarer (it never or almost never
// happened in the sims) pays at most 1000x.
export const P_MIN = 0.001;

const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const IDX = Object.fromEntries([...B64].map((c, i) => [c, i]));
const cache = new Map();

// Every simulated game between bots a and b, from a's point of view:
// { won, ws, ls, longest } (a's result, winner's and loser's score, longest rally).
export function gameRecords(a, b) {
  const lo = Math.min(a, b), hi = Math.max(a, b);
  const key = `${lo}-${hi}`;
  if (!cache.has(key)) {
    const s = ODDS_DATA.games[key] || '';
    const list = [];
    for (let i = 0; i + 2 < s.length; i += 3) {
      const v = IDX[s[i]] | (IDX[s[i + 1]] << 6) | (IDX[s[i + 2]] << 12);
      const ls = (v >> 1) & 63;
      list.push({ loWon: (v & 1) === 1, ws: Math.max(11, ls + 2), ls, longest: v >> 7 });
    }
    cache.set(key, list);
  }
  const flip = a > b;
  return cache.get(key).map((g) => ({ won: flip ? !g.loWon : g.loWon, ws: g.ws, ls: g.ls, longest: g.longest }));
}

export function simCount(a, b) {
  const s = ODDS_DATA.games[`${Math.min(a, b)}-${Math.max(a, b)}`] || '';
  return Math.floor(s.length / 3);
}

// Chance bot a wins a single game against bot b. A mirror match is a coin
// flip by construction (the sims agree to within their noise).
export function gameWinChance(a, b) {
  if (a === b) return 0.5;
  const g = gameRecords(a, b);
  if (!g.length) return 0.5;
  return g.reduce((n, x) => n + (x.won ? 1 : 0), 0) / g.length;
}

// Chance of winning the match from the single-game chance g. Games are
// independent (each one starts with a fresh form), so a best of 3 is
// g^2 (3 - 2g) and a best of 5 is g^3 (10 - 15g + 6g^2). Real best-of-3/5
// simulations agree (tools/odds.mjs --validate).
export function seriesChance(g, gamesToWin) {
  if (gamesToWin === 2) return g * g * (3 - 2 * g);
  if (gamesToWin === 3) return g ** 3 * (10 - 15 * g + 6 * g * g);
  return g;
}

export function matchWinChance(a, b, gamesToWin) {
  return seriesChance(gameWinChance(a, b), gamesToWin);
}

// What a winning bet pays back (stake included), in whole coins.
export function payout(stake, p) {
  return Math.floor(stake / Math.max(p, P_MIN) + 1e-9);
}

export function fmtChance(p) {
  if (p < P_MIN) return '<0.1%';
  if (p > 1 - P_MIN) return '>99.9%';
  return `${(p * 100).toFixed(p < 0.1 || p > 0.9 ? 1 : 0)}%`;
}

export function fmtMult(p) {
  const m = 1 / Math.max(p, P_MIN);
  return `${m >= 100 ? Math.floor(m) : m.toFixed(2)}×`;
}
