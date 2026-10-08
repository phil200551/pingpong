import { gameRecords } from './odds.js';

// Watch & Bet side bets: exact final score (single games), total points
// over/under and longest rally over/under. Their chances are worked out
// exactly from the same simulated games as the match odds: each game of a
// match is an independent draw from the simulated games for that pair, so
// the match totals are summed over every way the games can fall.

const cache = new Map();
const SIDES = ['A', 'B']; // A = bot 1, B = bot 2

// Per-game distributions, each joint with who won the game:
// pts[w][t] total points, rally[w][x] longest rally, score[w][s] loser's score.
function gameDists(a, b) {
  const recs = gameRecords(a, b);
  const n = recs.length || 1;
  const mk = () => ({ A: [], B: [] });
  const pts = mk(), rally = mk(), score = mk();
  const add = (arr, i, v) => { arr[i] = (arr[i] || 0) + v; };
  for (const g of recs) {
    // A mirror match is symmetric: count every game once each way round.
    const ways = a === b ? [['A', 0.5], ['B', 0.5]] : [[g.won ? 'A' : 'B', 1]];
    for (const [w, k] of ways) {
      add(pts[w], g.ws + g.ls, k / n);
      add(rally[w], g.longest, k / n);
      add(score[w], g.ls, k / n);
    }
  }
  for (const d of [pts, rally, score]) for (const w of SIDES) for (let i = 0; i < d[w].length; i++) d[w][i] = d[w][i] || 0;
  return { pts, rally, score };
}

function conv(x, y) {
  // (A side that never won a simulated game has an empty distribution.)
  if (!x.length || !y.length) return [];
  const out = new Array(x.length + y.length - 1).fill(0);
  for (let i = 0; i < x.length; i++) if (x[i]) for (let j = 0; j < y.length; j++) out[i + j] += x[i] * y[j];
  return out;
}

function addInto(map, key, arr) {
  const cur = map.get(key);
  if (!cur) { map.set(key, arr); return; }
  for (let i = 0; i < arr.length; i++) cur[i] = (cur[i] || 0) + arr[i];
}

// Walks every scoreline of a first-to-L match. step(value, w) carries a
// value through a game won by w; join adds values that reach the same score.
function walk(L, start, step, join, finish) {
  let layer = new Map([['0,0', start]]);
  for (let k = 0; k < 2 * L - 1; k++) {
    const next = new Map();
    for (const [st, v] of layer) {
      const [i, j] = st.split(',').map(Number);
      for (const w of SIDES) {
        const nv = step(v, w);
        const ni = i + (w === 'A' ? 1 : 0), nj = j + (w === 'B' ? 1 : 0);
        if (ni === L || nj === L) finish(nv);
        else join(next, `${ni},${nj}`, nv);
      }
    }
    layer = next;
  }
}

// Match-level distributions for bots a (bot 1) and b (bot 2), first to L games.
export function sideDists(a, b, L) {
  const key = `${a}-${b}-${L}`;
  if (cache.has(key)) return cache.get(key);
  const d = gameDists(a, b);
  // Total points in the match (pmf).
  const total = [];
  walk(L, [1], (v, w) => conv(v, d.pts[w]), addInto, (v) => v.forEach((x, t) => { total[t] = (total[t] || 0) + x; }));
  for (let t = 0; t < total.length; t++) total[t] = total[t] || 0;
  // Longest rally in the match: P(longest <= x) is the same walk with each
  // game weighted by P(its winner, and its longest rally <= x).
  const maxR = Math.max(d.rally.A.length, d.rally.B.length);
  const cum = { A: 0, B: 0 };
  const rallyCdf = [];
  for (let x = 0; x < maxR; x++) {
    cum.A += d.rally.A[x] || 0;
    cum.B += d.rally.B[x] || 0;
    let p = 0;
    walk(L, 1, (v, w) => v * cum[w], (m, k, v) => m.set(k, (m.get(k) || 0) + v), (v) => { p += v; });
    rallyCdf.push(p);
  }
  const out = { total, rallyCdf, score: d.score };
  cache.set(key, out);
  return out;
}

// Chance the total points / longest rally finish over a (half-point) line.
export function pointsOver(dist, line) {
  let s = 0;
  for (let t = Math.floor(line) + 1; t < dist.total.length; t++) s += dist.total[t];
  return s;
}

export function rallyOver(dist, line) {
  const c = dist.rallyCdf;
  const x = Math.floor(line);
  return x >= c.length ? 0 : 1 - c[x];
}

// The line closest to an even split, and how far it may be moved (both
// sides keep at least a 2% chance).
export function lineRange(over, maxT) {
  let best = 0.5, bestD = Infinity, lo = Infinity, hi = -Infinity;
  for (let t = 0; t <= maxT; t++) {
    const p = over(t + 0.5);
    if (p >= 0.02 && p <= 0.98) { lo = Math.min(lo, t + 0.5); hi = Math.max(hi, t + 0.5); }
    const dd = Math.abs(p - 0.5);
    if (dd < bestD) { bestD = dd; best = t + 0.5; }
  }
  if (lo > hi) { lo = hi = best; }
  return { line: best, lo, hi };
}

// Every final score of a single game with its chance, most likely first per
// winner: [{ pick: 'A'|'B', ws, ls, p }]. Regular scores 11-0 .. 11-9 are
// always listed; deuce scores (12-10, 13-11, ...) as far as the sims went.
export function scoreOptions(dist) {
  const out = [];
  for (const w of SIDES) {
    const sc = dist.score[w];
    const maxLs = Math.max(9, sc.length - 1);
    for (let ls = 0; ls <= maxLs; ls++) out.push({ pick: w, ws: Math.max(11, ls + 2), ls, p: sc[ls] || 0 });
  }
  return out;
}
