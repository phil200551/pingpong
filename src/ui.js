import { OPPONENTS, MATCH_LENGTHS, PLAYER, AI } from './config.js';
import { QUALITY } from './settings.js';
import { PADDLES, ARENAS, describeReq } from './cosmetics.js';
import { owns, matchNumbers, refillWait, REFILL_COINS } from './progress.js';
import { PRACTICE_OPTIONS } from './practice.js';
import { matchWinChance, payout, fmtChance, fmtMult } from './odds.js';
import { sideDists, pointsOver, rallyOver, lineRange, scoreOptions } from './sidebets.js';

const css = (hex) => '#' + hex.toString(16).padStart(6, '0');
// The personal bests we keep, in display order.
const RECORD_LABELS = [
  ['rally', 'Longest rally', (v) => `${v}`],
  ['perfectPct', 'PERFECT %', (v) => `${v}%`],
  ['fastest', 'Fastest shot', (v) => `${v} <small>km/h</small>`],
  ['smashes', 'Smashes landed', (v) => `${v}`],
  ['serveWon', 'Points won on serve', (v) => `${v}`],
  ['perfects', 'PERFECTs in a match', (v) => `${v}`],
];

const $ = (id) => document.getElementById(id);

// A small portrait drawn from an opponent's look (build + gear), in the same
// ink-outlined style as the 3D figures. Locked opponents are a dark "?".
export function avatar(o, locked = false) {
  const c = locked ? '#2a2540' : o.color;
  const face = locked ? '#3d3658' : '#ffffff';
  const gear = new Set(o.look.gear);
  const b = o.look.build;
  const w = { small: 21, broad: 26, lean: 18, slim: 16, tall: 22 }[b] || 20;
  const r = { small: 15, broad: 13, lean: 12.5, slim: 12, tall: 13 }[b] || 13;
  const y = { small: 33, tall: 28 }[b] || 30;
  const top = y - r;
  const p = [];
  p.push(`<path d="M${32 - w} 66 C${32 - w} 50 ${32 - w * 0.6} 45 32 45 C${32 + w * 0.6} 45 ${32 + w} 50 ${32 + w} 66 Z" fill="${c}" fill-opacity="0.5"/>`);
  if (gear.has('pads')) p.push(`<ellipse cx="${32 - w + 5}" cy="49" rx="9" ry="5" fill="${c}"/><ellipse cx="${32 + w - 5}" cy="49" rx="9" ry="5" fill="${c}"/>`);
  if (gear.has('spikes')) p.push(`<path d="M${32 - w + 3} 50 L${32 - w - 3} 38 L${32 - w + 9} 47 Z M${32 + w - 3} 50 L${32 + w + 3} 38 L${32 + w - 9} 47 Z" fill="${c}"/>`);
  if (gear.has('horns')) p.push(`<path d="M${32 - r * 0.55} ${top + 4} L${32 - r - 4} ${top - 9} L${32 - r * 0.1} ${top + 1} Z M${32 + r * 0.55} ${top + 4} L${32 + r + 4} ${top - 9} L${32 + r * 0.1} ${top + 1} Z" fill="${c}"/>`);
  if (gear.has('crest')) p.push(`<path d="M25 ${top + 4} L27 ${top - 8} L30 ${top + 1} L32 ${top - 12} L34 ${top + 1} L37 ${top - 8} L39 ${top + 4} Z" fill="${c}"/>`);
  if (gear.has('sprout')) p.push(`<path d="M32 ${top + 1} L32 ${top - 8}" stroke="${c}" stroke-width="2.5"/><circle cx="32" cy="${top - 10}" r="3.2" fill="${c}"/>`);
  p.push(`<circle cx="32" cy="${y}" r="${r}" fill="${c}" fill-opacity="0.8"/>`);
  if (gear.has('band')) p.push(`<path d="M${32 - r + 1} ${y - r * 0.5} L${32 + r - 1} ${y - r * 0.5}" stroke="#05020d" stroke-width="3.5"/>`);
  if (gear.has('goggles')) p.push(`<circle cx="27" cy="${y}" r="4.2" fill="${face}"/><circle cx="37" cy="${y}" r="4.2" fill="${face}"/>`);
  else if (gear.has('shield')) p.push(`<rect x="${32 - r + 1}" y="${y - 4}" width="${r * 2 - 2}" height="8" rx="3" fill="${face}"/>`);
  else p.push(`<rect x="${32 - r * 0.75}" y="${y - 2.5}" width="${r * 1.5}" height="5" rx="2" fill="${face}"/>`);
  if (gear.has('halo')) p.push(`<ellipse cx="32" cy="${top - 5}" rx="${r + 4}" ry="4" fill="none" stroke="${c}" stroke-width="2.5"/>`);
  if (locked) p.push(`<text x="32" y="${y + 6}" text-anchor="middle" font-size="17" font-weight="900" fill="#8a80b0" stroke="none" font-family="Orbitron, sans-serif">?</text>`);
  return `<svg class="avatar" viewBox="-2 -2 68 68" width="58" height="58" aria-hidden="true"><g stroke="#000" stroke-width="1.6" stroke-linejoin="round">${p.join('')}</g></svg>`;
}

// How long each kind of callout stays up, in seconds (hit feedback: 0.6).
const POP_TIME = { gp: 1.2, milestone: 0.9, coins: 1.4 };

// DOM overlay: menus, HUD, banners and pop-up text.
export class UI {
  constructor(settings, progress, handlers) {
    this.settings = settings;
    this.progress = progress;
    this.h = handlers;
    this.current = null;
    this.prevScreen = null;
    this._lastRally = -1;
    this._vig = -1;
    this._pops = {}; // callout currently showing on each line
    this._hushUntil = 0;
    this.buildMenu();
    this.buildSettings();
    this.bind();
  }

  // --------------------------------------------------------------- screens
  show(name) {
    for (const id of ['menu', 'ladder', 'locker', 'practice', 'practiceOver', 'watch', 'watchOver', 'betStats', 'settings', 'howto', 'pause', 'over']) {
      $(id).classList.toggle('hidden', id !== name);
    }
    this.current = name;
    document.body.classList.toggle('in-menu', !!name);
  }

  showHUD(on) {
    $('hud').classList.toggle('hidden', !on);
  }

  buildMenu() {
    const lb = $('lengths');
    lb.innerHTML = '';
    MATCH_LENGTHS.forEach((m) => {
      const el = document.createElement('button');
      el.className = 'len';
      el.textContent = m.label;
      el.dataset.id = m.id;
      el.addEventListener('click', () => {
        this.settings.matchLength = m.id;
        this.h.onSettings();
        this.refreshMenu();
        this.h.sound('move');
      });
      lb.appendChild(el);
    });
    this.buildLadder();
    this.refreshMenu();
  }

  refreshMenu() {
    [...$('lengths').children].forEach((el) => el.classList.toggle('sel', +el.dataset.id === this.settings.matchLength));
    const i = this.settings.difficulty;
    const o = OPPONENTS[i];
    const card = $('oppCard');
    card.style.setProperty('--c', o.color);
    card.innerHTML = `${avatar(o)}
      <span class="oc-text"><span class="oc-name">${o.bot}<small>${o.name}</small></span>
      <span class="oc-tag">${o.tagline}</span></span>
      <span class="oc-side"><b>${i + 1}/${OPPONENTS.length}</b>change ›</span>`;
    $('play').style.setProperty('--c', o.color);
    this.refreshBalance();
  }

  // The ladder: hardest at the top. Unlocked opponents can be picked.
  buildLadder() {
    const box = $('rungs');
    box.innerHTML = '';
    const pr = this.progress;
    // "Next up" is the lowest unlocked opponent you haven't beaten yet.
    const nextUp = OPPONENTS.findIndex((o, k) => k < pr.unlocked && !pr.beaten[o.id]);
    for (let i = OPPONENTS.length - 1; i >= 0; i--) {
      const o = OPPONENTS[i];
      const locked = i >= pr.unlocked;
      const beaten = !!pr.beaten[o.id];
      const el = document.createElement('button');
      el.type = 'button';
      el.className = 'rung' + (locked ? ' locked' : '') + (i === this.settings.difficulty ? ' sel' : '');
      el.style.setProperty('--c', locked ? '#4a4466' : o.color);
      const status = locked
        ? `<span class="rstat lock">LOCKED<small>beat ${OPPONENTS[i - 1].bot}</small></span>`
        : beaten ? '<span class="rstat beaten">✓ BEATEN</span>'
          : i === nextUp ? '<span class="rstat next">▶ NEXT UP</span>' : '<span class="rstat open">UNLOCKED</span>';
      el.innerHTML = `<span class="rn">${i + 1}</span>${avatar(o, locked)}
        <span class="oc-text"><span class="oc-name">${locked ? '? ? ?' : o.bot}<small>${o.name}</small></span>
        <span class="oc-tag">${locked ? o.style : `${o.style} · ${o.tagline}`}</span></span>${status}`;
      if (!locked) {
        el.addEventListener('click', () => {
          this.settings.difficulty = i;
          this.h.onSettings();
          this.buildLadder();
          this.refreshMenu();
          this.h.sound('move');
          this.show('menu');
        });
        el.addEventListener('dblclick', () => this.h.onPlay());
      } else {
        el.addEventListener('click', () => this.h.sound('move'));
      }
      box.appendChild(el);
    }
  }

  // Locker: pick a paddle colour and an arena theme; see your personal bests.
  buildLocker() {
    const pr = this.progress;
    const pick = (type, list, box, render) => {
      box.innerHTML = '';
      for (const it of list) {
        const have = owns(pr, type, it.id);
        const el = document.createElement('button');
        el.type = 'button';
        el.className = `${type === 'paddle' ? 'swatch' : 'arena'}${have ? '' : ' locked'}${pr[type] === it.id ? ' sel' : ''}`;
        el.innerHTML = `${render(it, have)}<span class="sw-name">${it.name}</span>
          <small>${have ? (pr[type] === it.id ? 'IN USE' : 'unlocked') : `🔒 ${describeReq(it.req, OPPONENTS)}`}</small>`;
        el.addEventListener('click', () => {
          this.h.sound('move');
          if (!have) return;
          this.h.onPick(type, it.id);
          this.buildLocker();
        });
        box.appendChild(el);
      }
    };
    pick('paddle', PADDLES, $('paddles'), (it, have) => `<i class="dot" style="--p:${have ? css(it.hex) : '#2a2540'}"></i>`);
    pick('arena', ARENAS, $('arenas'), (it, have) => {
      const [a, b, bg] = have ? [css(it.c1), css(it.c2), css(it.bg)] : ['#2a2540', '#2a2540', '#0c0a14'];
      return `<i class="prev" style="--a:${a};--b:${b};--bg:${bg}"></i>`;
    });
    const r = pr.records;
    $('records').innerHTML = RECORD_LABELS.map(([k, label, fmt]) => `<div><b>${r[k] ? fmt(r[k]) : '–'}</b><span>${label}</span></div>`).join('') +
      `<p class="totals">Matches played <b>${pr.totals.matches}</b> · won <b>${pr.totals.wins}</b> · ladder <b>${Object.keys(pr.beaten).length}/${OPPONENTS.length}</b></p>`;
  }

  // Practice options: rows of choices for the ball machine.
  buildPractice() {
    const box = $('practiceRows');
    box.innerHTML = '';
    const opts = this.settings.practice;
    const rows = [['speed', 'Ball speed'], ['spin', 'Spin'], ['place', 'Placement'], ['rate', 'Feed rate']];
    for (const [key, label] of rows) {
      const row = document.createElement('div');
      row.className = 'srow prow';
      row.innerHTML = `<span>${label}</span>`;
      const seg = document.createElement('div');
      seg.className = 'seg';
      for (const [id, name] of PRACTICE_OPTIONS[key]) {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = name;
        b.classList.toggle('sel', opts[key] === id);
        b.addEventListener('click', () => {
          opts[key] = id;
          [...seg.children].forEach((c) => c.classList.toggle('sel', c === b));
          this.h.onSettings('practice');
          this.h.sound('move');
        });
        seg.appendChild(b);
      }
      row.appendChild(seg);
      box.appendChild(row);
    }
  }

  // Practice HUD (timing counts) in place of the scoreboard.
  setPracticeHUD(on) {
    $('practiceHud').classList.toggle('hidden', !on);
    $('scoreboard').classList.toggle('hidden', on);
    $('gamesTo').classList.toggle('hidden', on);
    document.body.classList.toggle('practice-mode', on);
    $('restart').textContent = on ? 'Reset counts' : 'Restart match';
  }

  // Watch & Bet: pick two bots (all five, whatever the ladder says), a match
  // length, and optionally a bet on either side.
  buildWatch() {
    const w = this.settings.watch;
    const col = (box, key) => {
      box.innerHTML = '';
      OPPONENTS.forEach((o, i) => {
        const el = document.createElement('button');
        el.type = 'button';
        el.className = 'wbot' + (w[key] === i ? ' sel' : '');
        el.style.setProperty('--c', o.color);
        el.innerHTML = `${avatar(o)}<span class="oc-text"><span class="oc-name">${o.bot}</span><span class="oc-tag">${o.style}</span></span>`;
        el.addEventListener('click', () => {
          w[key] = i;
          this.h.onSettings('watch');
          this.h.sound('move');
          this.buildWatch();
        });
        box.appendChild(el);
      });
    };
    col($('wpickA'), 'a');
    col($('wpickB'), 'b');
    const lb = $('wLengths');
    lb.innerHTML = '';
    for (const m of MATCH_LENGTHS) {
      const el = document.createElement('button');
      el.type = 'button';
      el.textContent = m.id === 1 ? '1 game to 11' : m.label;
      el.classList.toggle('sel', w.length === m.id);
      el.addEventListener('click', () => {
        w.length = m.id;
        this.h.onSettings('watch');
        this.h.sound('move');
        this.buildWatch();
      });
      lb.appendChild(el);
    }
    const sides = this.watchSides();
    $('wMatchup').innerHTML = `${avatar(OPPONENTS[w.a])}<span style="--c:${sides.a.color}">${sides.a.html}</span><em>vs</em><span style="--c:${sides.b.color}">${sides.b.html}</span>${avatar(OPPONENTS[w.b])}`;
    [...$('wMatchup').querySelectorAll('.avatar')].forEach((el, i) => el.style.setProperty('--c', OPPONENTS[i ? w.b : w.a].color));
    this.buildBet();
  }

  // Names and colours for the two sides of the match being set up.
  watchSides() {
    const w = this.settings.watch;
    const mirror = w.a === w.b;
    const side = (i, tag, tagColor) => {
      const o = OPPONENTS[i];
      return {
        name: mirror ? `${o.bot} (${tag})` : o.bot,
        html: mirror ? `${o.bot} <small>(${tag})</small>` : o.bot,
        color: mirror ? tagColor : o.color,
      };
    };
    return { a: side(w.a, 'Red', '#ff3355'), b: side(w.b, 'Blue', '#3d8bff') };
  }

  // The bet panel: who to back (with their chance and what they pay), the
  // stake, optional side bets, and exactly what you'd get back.
  buildBet() {
    const pr = this.progress;
    const bet = this.bet || (this.bet = { pick: null, stake: 10 });
    const sides = this.watchSides();
    const odds = this.matchOdds();
    this.refreshBalance();
    const coins = pr.coins;
    if (coins < 1) bet.pick = null;
    bet.stake = this.clampStake(bet.stake);

    const box = $('betSides');
    box.innerHTML = '';
    const opt = (pick, html, cls = '') => {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = `bet-side ${cls}` + (bet.pick === pick ? ' sel' : '');
      el.innerHTML = html;
      el.disabled = pick !== null && coins < 1;
      el.addEventListener('click', () => {
        bet.pick = pick;
        this.h.sound('move');
        this.buildBet();
      });
      box.appendChild(el);
    };
    const sideHtml = (k) => `<b style="--c:${sides[k].color}">${sides[k].html}</b><span>${fmtChance(odds[k])} to win</span><em>pays ${fmtMult(odds[k])}</em>`;
    opt('a', sideHtml('a'));
    opt(null, '<b>No bet</b><span>on the winner</span>', 'none');
    opt('b', sideHtml('b'));

    const stake = $('stake');
    stake.max = Math.max(1, coins);
    if (document.activeElement !== stake) stake.value = bet.stake;
    $('betStake').classList.toggle('off', !bet.pick);
    const chips = $('stakeChips');
    if (!chips.childElementCount) {
      for (const [label, f] of [['10', () => 10], ['25', () => 25], ['50', () => 50], ['½', (c) => Math.floor(c / 2)], ['All in', (c) => c]]) {
        const el = document.createElement('button');
        el.type = 'button';
        el.textContent = label;
        el.addEventListener('click', () => {
          this.bet.stake = f(this.progress.coins);
          if (!this.bet.pick) this.bet.pick = 'a';
          this.h.sound('move');
          this.buildBet();
        });
        chips.appendChild(el);
      }
    }
    this.buildSideBets();
    this.updateBetSummary();
    this.updateRefill();
  }

  clampStake(v) {
    return Math.max(1, Math.min(Math.floor(v) || 1, Math.max(1, this.progress.coins)));
  }

  matchOdds() {
    const w = this.settings.watch;
    const pA = w.a === w.b ? 0.5 : matchWinChance(w.a, w.b, w.length);
    return { a: pA, b: 1 - pA };
  }

  // Side bets for the match being set up: their distributions, lines and picks
  // (lines start at the most even split; picks clear when the match changes).
  sideState() {
    const w = this.settings.watch;
    const key = `${w.a}-${w.b}-${w.length}`;
    const old = this.side;
    if (!old || old.key !== key) {
      const d = sideDists(w.a, w.b, w.length);
      const pr = lineRange((x) => pointsOver(d, x), d.total.length);
      const rr = lineRange((x) => rallyOver(d, x), d.rallyCdf.length);
      this.side = {
        key, d,
        score: { sel: null, stake: old ? old.score.stake : 10 },
        points: { pick: null, ...pr, stake: old ? old.points.stake : 10 },
        rally: { pick: null, ...rr, stake: old ? old.rally.stake : 10 },
      };
    }
    return this.side;
  }

  // The chance of each pick on an over/under side bet.
  ouChance(kind, pick, line) {
    const sd = this.sideState();
    const over = kind === 'points' ? pointsOver(sd.d, line) : rallyOver(sd.d, line);
    return pick === 'over' ? over : 1 - over;
  }

  buildSideBets() {
    const w = this.settings.watch;
    const sd = this.sideState();
    const sides = this.watchSides();
    const coins = this.progress.coins;
    const box = $('sideRows');
    box.innerHTML = '';
    const stakeInput = (k) => {
      const st = sd[k];
      st.stake = this.clampStake(st.stake);
      const inp = document.createElement('input');
      inp.type = 'number';
      inp.min = 1;
      inp.step = 1;
      inp.className = 'sb-stake';
      inp.value = st.stake;
      inp.disabled = coins < 1;
      inp.title = 'Stake';
      inp.addEventListener('input', () => {
        const v = Math.floor(+inp.value);
        if (v >= 1) {
          st.stake = this.clampStake(v);
          if (st.stake !== v) inp.value = st.stake;
          this.updateBetSummary();
        }
      });
      inp.addEventListener('change', () => { inp.value = st.stake; });
      return inp;
    };
    const row = (k, name) => {
      const el = document.createElement('div');
      el.className = 'sb-row';
      el.dataset.k = k;
      el.innerHTML = `<span class="sb-name"><span>${name}</span></span><span class="sb-ctl"></span>`;
      box.appendChild(el);
      return el;
    };
    // Exact final score (single games only).
    const r1 = row('score', 'Exact score');
    if (w.length !== 1) {
      r1.querySelector('.sb-ctl').innerHTML = '<span class="sb-off">single-game matches only</span>';
    } else {
      const sel = document.createElement('select');
      sel.className = 'sb-select';
      sel.disabled = coins < 1;
      const opts = scoreOptions(sd.d);
      let html = '<option value="">No bet</option>';
      for (const k of ['A', 'B']) {
        const side = sides[k === 'A' ? 'a' : 'b'];
        html += `<optgroup label="${side.name} wins">`;
        for (const o of opts.filter((x) => x.pick === k)) {
          const v = `${k}:${o.ls}`;
          html += `<option value="${v}"${sd.score.sel === v ? ' selected' : ''}>${side.name} ${o.ws}–${o.ls} · ${fmtChance(o.p)} · ${fmtMult(o.p)}</option>`;
        }
        html += '</optgroup>';
      }
      sel.innerHTML = html;
      sel.addEventListener('change', () => {
        sd.score.sel = sel.value || null;
        this.h.sound('move');
        this.updateBetSummary();
      });
      r1.querySelector('.sb-ctl').appendChild(sel);
      r1.appendChild(stakeInput('score'));
    }
    r1.insertAdjacentHTML('beforeend', '<span class="sb-pays"></span>');
    // Total points / longest rally over or under a line.
    for (const [k, name] of [['points', 'Total points'], ['rally', 'Longest rally']]) {
      const st = sd[k];
      const r = row(k, name);
      const ctl = r.querySelector('.sb-ctl');
      const step = (dir) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'ln-step';
        b.textContent = dir < 0 ? '‹' : '›';
        b.disabled = dir < 0 ? st.line <= st.lo : st.line >= st.hi;
        b.title = dir < 0 ? 'Lower the line' : 'Raise the line';
        b.addEventListener('click', () => {
          st.line = Math.max(st.lo, Math.min(st.hi, st.line + dir));
          this.h.sound('move');
          this.buildSideBets();
          this.updateBetSummary();
        });
        return b;
      };
      // The line sits under the name, with ‹ › to move it.
      const set = document.createElement('span');
      set.className = 'sb-lineset';
      set.appendChild(step(-1));
      set.insertAdjacentHTML('beforeend', `<b class="sb-line">${st.line}</b>`);
      set.appendChild(step(1));
      r.querySelector('.sb-name').appendChild(set);
      for (const pick of ['over', 'under']) {
        const p = this.ouChance(k, pick, st.line);
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'ou' + (st.pick === pick ? ' sel' : '');
        b.disabled = coins < 1;
        b.innerHTML = `${pick === 'over' ? 'Over' : 'Under'}<small>${fmtChance(p)} · ${fmtMult(p)}</small>`;
        b.addEventListener('click', () => {
          st.pick = st.pick === pick ? null : pick;
          this.h.sound('move');
          this.buildSideBets();
          this.updateBetSummary();
        });
        ctl.appendChild(b);
      }
      r.appendChild(stakeInput(k));
      r.insertAdjacentHTML('beforeend', '<span class="sb-pays"></span>');
    }
  }

  // Every leg of the bet as it stands on the setup screen, priced.
  betLegs() {
    const w = this.settings.watch;
    const sides = this.watchSides();
    const legs = [];
    const bet = this.bet || { pick: null };
    if (bet.pick) {
      const p = this.matchOdds()[bet.pick];
      legs.push({ kind: 'match', pick: bet.pick, label: `${sides[bet.pick].name} to win`, stake: bet.stake, p });
    }
    const sd = this.sideState();
    if (w.length === 1 && sd.score.sel) {
      const [k, ls] = sd.score.sel.split(':');
      const lsn = +ls;
      const ws = Math.max(11, lsn + 2);
      const pick = k === 'A' ? 'a' : 'b';
      legs.push({ kind: 'score', pick, ws, ls: lsn, label: `${sides[pick].name} wins ${ws}–${lsn}`, stake: sd.score.stake, p: sd.d.score[k][lsn] || 0 });
    }
    for (const [k, name] of [['points', 'Total points'], ['rally', 'Longest rally']]) {
      const st = sd[k];
      if (st.pick) legs.push({ kind: k, pick: st.pick, line: st.line, label: `${name} ${st.pick} ${st.line}`, stake: st.stake, p: this.ouChance(k, st.pick, st.line) });
    }
    for (const l of legs) l.pays = payout(l.stake, l.p);
    return legs;
  }

  // Refresh what every leg pays, the total stake and the Watch button.
  updateBetSummary() {
    const coins = this.progress.coins;
    const legs = this.betLegs();
    const sides = this.watchSides();
    const bet = this.bet;
    const line = $('betLine');
    const main = legs.find((l) => l.kind === 'match');
    if (main) {
      line.innerHTML = `Bet <b>${main.stake}</b> on <b style="color:${sides[main.pick].color}">${sides[main.pick].name}</b> → pays <b class="gold">${main.pays}</b> <small>(${main.pays - main.stake >= 0 ? '+' : ''}${main.pays - main.stake})</small>`;
    } else {
      line.innerHTML = coins < 1 ? 'You\'re out of coins — you can still watch.' : bet && bet.pick === null ? 'No bet on the winner.' : '';
    }
    for (const r of $('sideRows').children) {
      const leg = legs.find((l) => l.kind === r.dataset.k);
      const el = r.querySelector('.sb-pays');
      r.classList.toggle('on', !!leg);
      el.innerHTML = leg ? `pays <b>${leg.pays}</b>` : '';
    }
    const side = legs.filter((l) => l.kind !== 'match');
    $('sideSum').textContent = side.length ? `${side.length} picked` : 'optional — each with its own odds';
    const total = legs.reduce((n, l) => n + l.stake, 0);
    const over = total > coins;
    const tot = $('betTotal');
    tot.classList.toggle('over', over);
    tot.innerHTML = legs.length > 1 || over
      ? `Total stake <b>${total}</b> of your <i class="coin"></i> ${coins}${over ? ' — too much!' : ''} · best case pays <b class="gold">${legs.reduce((n, l) => n + l.pays, 0)}</b>`
      : '';
    const start = $('watchStart');
    start.textContent = legs.length ? `Bet ${total} & watch` : 'Watch';
    start.disabled = over;
  }

  // The bet as it stands on the setup screen (null for no bet).
  currentBet() {
    const w = this.settings.watch;
    if (this.progress.coins < 1) return null;
    const legs = this.betLegs();
    if (!legs.length) return null;
    return { a: w.a, b: w.b, length: w.length, legs };
  }

  refreshBalance() {
    const c = this.progress.coins;
    $('wBal').textContent = c;
    $('menuBal').textContent = c;
  }

  // Out of coins: a free refill, or how long until the next one.
  updateRefill() {
    const el = $('refill');
    const wait = refillWait(this.progress);
    clearTimeout(this._refillT);
    el.classList.toggle('hidden', wait < 0);
    if (wait < 0) return;
    if (wait === 0) {
      el.innerHTML = `<span>Out of coins!</span><button type="button" id="refillBtn">Claim ${REFILL_COINS} free coins</button>`;
      $('refillBtn').addEventListener('click', () => this.h.onRefill());
    } else {
      const s = Math.ceil(wait / 1000);
      el.innerHTML = `<span>Out of coins — a free refill of ${REFILL_COINS} is ready in <b>${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}</b></span>`;
      // Only the countdown changes each second; rebuilding the whole bet panel
      // would throw away what's being typed in it.
      this._refillT = setTimeout(() => { if (this.current === 'watch') this.updateRefill(); }, 1000);
    }
  }

  // The spectator bar (speed, camera, skip) in place of the controls line.
  setWatchHUD(on, game = null) {
    $('watchBar').classList.toggle('hidden', !on);
    document.body.classList.toggle('watch-mode', on);
    if (on && game) this.setWatchCam(game.watchCamLabel());
  }

  // What's riding on the match, top right while you watch.
  setBetChip(bet) {
    const el = $('betChip');
    el.classList.toggle('hidden', !bet);
    if (!bet) return;
    const stake = bet.legs.reduce((n, l) => n + l.stake, 0);
    el.innerHTML = `<span class="bc-title">YOUR BET <i class="coin"></i> ${stake}</span>` +
      bet.legs.map((l) => `<span class="bc-leg">${l.label} <b>→ ${l.pays}</b></span>`).join('');
  }

  setWatchSpeed(n) {
    [...$('wSpeed').children].forEach((b) => b.classList.toggle('sel', +b.dataset.speed === n));
  }

  setWatchCam(label) {
    $('wCam').innerHTML = `📷 ${label} <b>C</b>`;
  }

  setSkipping(on) {
    $('wSkip').textContent = on ? 'Skipping…' : 'Skip to result';
    $('wSkip').disabled = on;
    document.body.classList.toggle('skipping', on);
  }

  updatePractice(m) {
    const c = m.counts;
    $('cPerfect').textContent = c.perfect;
    $('cGreat').textContent = c.great;
    $('cGood').textContent = c.good;
    $('cEarly').textContent = c.early;
    $('cLate').textContent = c.late;
    $('cMiss').textContent = c.miss;
    $('cIn').textContent = `${m.landed}/${m.returned}`;
    $('cStreak').textContent = m.bestStreak > m.streak ? `${m.streak} (best ${m.bestStreak})` : m.streak;
    $('cCoins').textContent = `+${m.session ? m.session.coins : 0}`;
    const o = m.opts;
    const name = (key) => PRACTICE_OPTIONS[key].find((x) => x[0] === o[key])[1].toLowerCase();
    $('phOpts').textContent = `${name('speed')} · ${o.spin === 'random' ? 'random spin' : o.spin === 'none' ? 'no spin' : name('spin')} · ${o.place === 'random' ? 'anywhere' : name('place')} · ${name('rate')}`;
  }

  buildSettings() {
    const s = this.settings;
    const rows = [
      { key: 'master', label: 'Master volume', type: 'range', min: 0, max: 1, step: 0.01, fmt: (v) => Math.round(v * 100) + '%' },
      { key: 'music', label: 'Music volume', type: 'range', min: 0, max: 1, step: 0.01, fmt: (v) => Math.round(v * 100) + '%' },
      { key: 'sfx', label: 'Effects volume', type: 'range', min: 0, max: 1, step: 0.01, fmt: (v) => Math.round(v * 100) + '%' },
      { key: 'crowd', label: 'Crowd volume', type: 'range', min: 0, max: 1, step: 0.01, fmt: (v) => Math.round(v * 100) + '%' },
      { key: 'muted', label: 'Mute all sound (M)', type: 'toggle' },
      { key: 'quality', label: 'Graphics quality', type: 'select', options: Object.keys(QUALITY).map((k) => [k, QUALITY[k].label]) },
      { key: 'msaa', label: 'MSAA anti-aliasing (test)', type: 'toggle' },
      { key: 'fov', label: 'Field of view', type: 'range', min: 55, max: 100, step: 1, fmt: (v) => v + '°' },
      { key: 'timingGuide', label: 'Timing guide ring', type: 'toggle' },
      { key: 'shake', label: 'Screen shake', type: 'toggle' },
      { key: 'slowmo', label: 'Slow-mo on great shots', type: 'toggle' },
      { key: 'announcer', label: 'Announcer voice', type: 'toggle' },
      { key: 'showFps', label: 'Show FPS', type: 'toggle' },
    ];
    const box = $('settingsRows');
    box.innerHTML = '';
    for (const r of rows) {
      const row = document.createElement('label');
      row.className = 'srow';
      const name = document.createElement('span');
      name.textContent = r.label;
      row.appendChild(name);
      let input;
      const out = document.createElement('span');
      out.className = 'sval';
      if (r.type === 'range') {
        input = document.createElement('input');
        input.type = 'range';
        input.min = r.min; input.max = r.max; input.step = r.step;
        input.value = s[r.key];
        out.textContent = r.fmt(+s[r.key]);
        input.addEventListener('input', () => {
          s[r.key] = +input.value;
          out.textContent = r.fmt(+input.value);
          this.h.onSettings(r.key);
        });
      } else if (r.type === 'select') {
        input = document.createElement('div');
        input.className = 'seg';
        for (const [val, lab] of r.options) {
          const b = document.createElement('button');
          b.type = 'button';
          b.textContent = lab;
          b.classList.toggle('sel', s[r.key] === val);
          b.addEventListener('click', (e) => {
            e.preventDefault();
            s[r.key] = val;
            [...input.children].forEach((c) => c.classList.toggle('sel', c === b));
            this.h.onSettings(r.key);
            this.h.sound('move');
          });
          input.appendChild(b);
        }
      } else {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'tog';
        input.checked = !!s[r.key];
        input.addEventListener('change', () => {
          s[r.key] = input.checked;
          this.h.onSettings(r.key);
          this.h.sound('move');
        });
      }
      row.appendChild(input);
      row.appendChild(out);
      box.appendChild(row);
    }
  }

  bind() {
    $('play').addEventListener('click', () => this.h.onPlay());
    const openLadder = () => { this.buildLadder(); this.show('ladder'); this.h.sound('move'); };
    $('ladderBtn').addEventListener('click', openLadder);
    $('oppCard').addEventListener('click', openLadder);
    $('ladderBack').addEventListener('click', () => { this.show('menu'); this.h.sound('move'); });
    $('overNext').addEventListener('click', () => this.h.onNext());
    $('lockerBtn').addEventListener('click', () => { this.buildLocker(); this.show('locker'); this.h.sound('move'); });
    $('practiceBtn').addEventListener('click', () => { this.prevScreen = 'menu'; this.buildPractice(); this.show('practice'); this.h.sound('move'); });
    $('pPractice').addEventListener('click', () => { this.prevScreen = 'pause'; this.buildPractice(); this.show('practice'); this.h.sound('move'); });
    $('practiceBack').addEventListener('click', () => { this.show(this.prevScreen || 'menu'); this.h.sound('move'); });
    $('practiceStart').addEventListener('click', () => this.h.onPracticeStart());
    $('watchBtn').addEventListener('click', () => { this.buildWatch(); this.show('watch'); this.h.sound('move'); });
    $('watchBack').addEventListener('click', () => { this.show('menu'); this.h.sound('move'); });
    $('watchStart').addEventListener('click', () => this.h.onWatchStart());
    // (Blur the bar's buttons after a click so Space never "presses" them.)
    [...$('wSpeed').children].forEach((b) => b.addEventListener('click', () => { b.blur(); this.h.onWatchSpeed(+b.dataset.speed); }));
    $('wCam').addEventListener('click', (e) => { e.currentTarget.blur(); this.h.onWatchCam(); });
    $('wSkip').addEventListener('click', (e) => { e.currentTarget.blur(); this.h.onWatchSkip(); });
    $('wMenu').addEventListener('click', (e) => { e.currentTarget.blur(); this.h.onPause(); });
    $('woAgain').addEventListener('click', () => this.h.onWatchNew());
    $('betStatsBtn').addEventListener('click', () => { this.buildBetStats(); this.show('betStats'); this.h.sound('move'); });
    $('betStatsBack').addEventListener('click', () => { this.buildWatch(); this.show('watch'); this.h.sound('move'); });
    $('poAgain').addEventListener('click', () => this.h.onPracticeAgain());
    $('poMenu').addEventListener('click', () => { this.show('menu'); this.h.sound('move'); });
    const stake = $('stake');
    stake.addEventListener('input', () => {
      const v = Math.floor(+stake.value);
      if (v >= 1) {
        this.bet.stake = Math.min(v, Math.max(1, this.progress.coins));
        if (!this.bet.pick && this.progress.coins >= 1) this.bet.pick = 'a';
        // A number above the balance is clamped: show the stake actually bet.
        if (this.bet.stake !== v) stake.value = this.bet.stake;
        this.buildBet();
      }
    });
    stake.addEventListener('change', () => { stake.value = this.bet.stake; });
    $('stakeMinus').addEventListener('click', () => { this.bet.stake = Math.max(1, this.bet.stake - (this.bet.stake > 10 ? 5 : 1)); this.h.sound('move'); this.buildBet(); });
    $('stakePlus').addEventListener('click', () => { this.bet.stake += this.bet.stake >= 10 ? 5 : 1; this.h.sound('move'); this.buildBet(); });
    $('woMenu').addEventListener('click', () => this.h.onQuit());
    $('lockerBack').addEventListener('click', () => { this.show('menu'); this.h.sound('move'); });
    $('howBtn').addEventListener('click', () => { this.prevScreen = 'menu'; this.show('howto'); this.h.sound('move'); });
    $('setBtn').addEventListener('click', () => { this.prevScreen = 'menu'; this.show('settings'); this.h.sound('move'); });
    $('setBack').addEventListener('click', () => { this.show(this.prevScreen || 'menu'); this.h.sound('move'); });
    $('howBack').addEventListener('click', () => { this.show(this.prevScreen || 'menu'); this.h.sound('move'); });
    $('resume').addEventListener('click', () => this.h.onResume());
    $('pSettings').addEventListener('click', () => { this.prevScreen = 'pause'; this.show('settings'); this.h.sound('move'); });
    $('pHow').addEventListener('click', () => { this.prevScreen = 'pause'; this.show('howto'); this.h.sound('move'); });
    $('restart').addEventListener('click', () => this.h.onRestart());
    $('quit').addEventListener('click', () => this.h.onQuit());
    $('rematch').addEventListener('click', () => this.h.onRestart());
    $('overMenu').addEventListener('click', () => this.h.onQuit());
    document.querySelectorAll('button').forEach((b) => b.addEventListener('mouseenter', () => this.h.sound('hover')));
  }

  // ------------------------------------------------------------------- HUD
  updateHUD(game) {
    const m = game.match;
    $('ps').textContent = m.score[PLAYER];
    $('os').textContent = m.score[AI];
    $('pg').textContent = m.games[PLAYER];
    $('og').textContent = m.games[AI];
    $('pname').textContent = game.sideName(PLAYER);
    $('oname').textContent = game.sideName(AI);
    $('hud').style.setProperty('--opp', game.sideColor(AI));
    $('hud').style.setProperty('--you', game.sideColor(PLAYER));
    const srv = game.rally.phase === 'dead' ? null : m.server;
    const server = game.rally && game.rally.phase === 'serve' ? game.rally.server : srv;
    $('pserve').classList.toggle('on', server === PLAYER);
    $('oserve').classList.toggle('on', server === AI);
    $('gamesTo').textContent = m.gamesToWin > 1 ? `GAME ${m.gameNumber} · FIRST TO ${m.gamesToWin}` : 'GAME TO 11';
  }

  setRally(n, intensity) {
    const el = $('rally');
    if (n < 3) {
      el.classList.remove('on');
      this._lastRally = n;
      return;
    }
    el.classList.add('on');
    $('rallyN').textContent = n;
    el.style.setProperty('--k', (1 + Math.min(1, intensity) * 0.8).toFixed(2));
    el.style.setProperty('--hue', String(Math.round(185 + intensity * 150)));
    if (n !== this._lastRally) {
      el.classList.remove('bump');
      void el.offsetWidth;
      el.classList.add('bump');
    }
    this._lastRally = n;
  }

  setIntensity(v) {
    if (Math.abs(v - this._vig) < 0.02) return;
    this._vig = v;
    // Scoped to the vignette so it doesn't restyle the whole page each time.
    $('vignette').style.setProperty('--int', v.toFixed(2));
  }

  timing(show, x, y, core, outer, state, alpha) {
    const el = this._timing || (this._timing = {
      root: $('timing'), core: document.querySelector('#timing .core'), ring: document.querySelector('#timing .ring'), on: false, state: '',
    });
    if (!show) {
      if (el.on) { el.root.style.display = 'none'; el.on = false; }
      return;
    }
    if (!el.on) { el.root.style.display = 'block'; el.on = true; }
    if (el.state !== state) { el.root.className = state; el.state = state; }
    el.root.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    el.root.style.opacity = alpha.toFixed(2);
    const c = core * 2, o = outer * 2;
    el.core.style.width = el.core.style.height = `${c.toFixed(1)}px`;
    el.ring.style.width = el.ring.style.height = `${o.toFixed(1)}px`;
  }

  // A new callout replaces the one still showing on its line, so they never
  // pile up on top of each other.
  pop(text, cls = 'ok') {
    const line = cls === 'milestone' || cls === 'coins' ? 'milestone' : 'main';
    const old = this._pops[line];
    if (old) { clearTimeout(old.timer); old.el.remove(); }
    const el = document.createElement('div');
    el.className = `pop ${cls}`;
    el.textContent = text;
    const secs = POP_TIME[cls] || 0.6;
    el.style.animationDuration = `${secs}s`;
    $('pops').appendChild(el);
    const entry = { el, timer: 0 };
    entry.timer = setTimeout(() => {
      el.remove();
      if (this._pops[line] === entry) this._pops[line] = null;
    }, secs * 1000 + 100); // a beat after the fade-out ends
    this._pops[line] = entry;
    this._hushRally(secs);
  }

  milestone(n) {
    this.pop(`🔥 ${n} RALLY! 🔥`, 'milestone');
  }

  // The rally counter sits in the same spot as the callouts, so it steps aside
  // until the last one showing is gone.
  _hushRally(secs) {
    const until = performance.now() + secs * 1000;
    if (until <= this._hushUntil) return;
    this._hushUntil = until;
    const r = $('rally');
    r.classList.add('hush');
    clearTimeout(this._hush);
    this._hush = setTimeout(() => r.classList.remove('hush'), secs * 1000);
  }

  banner(title, sub, cls, dur = 1.6, color = null) {
    const b = $('banner');
    b.className = '';
    if (color) b.style.setProperty('--bc', color);
    b.querySelector('h1').textContent = title;
    b.querySelector('p').textContent = sub || '';
    void b.offsetWidth;
    b.className = `show ${cls || ''}`;
    clearTimeout(this._bt);
    this._bt = setTimeout(() => { b.className = ''; }, dur * 1000);
  }

  setMuted(on) {
    $('muteBadge').classList.toggle('hidden', !on);
  }

  // Letterbox bars (and no HUD) while a game-winning point replays.
  setReplay(on) {
    document.body.classList.toggle('replay', on);
  }

  // Hide the mouse cursor while a point is being played.
  setPlaying(on) {
    if (on === this._playing) return;
    this._playing = on;
    document.body.classList.toggle('playing', on);
  }

  toast(html, seconds = 5) {
    const el = $('toast');
    el.innerHTML = html;
    el.classList.add('on');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => el.classList.remove('on'), seconds * 1000);
  }

  hint(html) {
    const el = $('hint');
    el.innerHTML = html;
    el.classList.toggle('on', !!html);
  }

  flash(color, strength) {
    const f = $('flash');
    f.style.transition = 'none';
    f.style.background = color;
    f.style.opacity = String(strength);
    void f.offsetWidth;
    f.style.transition = 'opacity 0.35s ease-out';
    f.style.opacity = '0';
  }

  fps(v, show) {
    const el = $('fps');
    el.classList.toggle('hidden', !show);
    if (show) el.textContent = `${v} FPS`;
  }

  gameOver(game, result = null) {
    const m = game.match;
    const won = m.winner === PLAYER;
    const res = result || { records: [], cosmetics: [] };
    // Ladder and Locker news: a new opponent, the whole ladder, new cosmetics.
    const blocks = [];
    const nu = res.unlocked;
    if (nu) {
      blocks.push(`<div class="unlock-card" style="--c:${nu.color}">${avatar(nu)}<span class="oc-text"><span class="un-title">NEW OPPONENT UNLOCKED</span>
        <span class="oc-name">${nu.bot}<small>${nu.name}</small></span><span class="oc-tag">${nu.tagline}</span></span></div>`);
    } else if (res.ladderDone) {
      blocks.push(`<div class="unlock-card" style="--c:#ffe600"><span class="oc-text"><span class="un-title">LADDER COMPLETE</span>
        <span class="oc-tag">You beat all five. Every opponent stays open for rematches.</span></span></div>`);
    }
    if (res.cosmetics && res.cosmetics.length) {
      const items = res.cosmetics.map(({ type, item }) => {
        const sw = type === 'paddle' ? `<i class="dot" style="--p:${css(item.hex)}"></i>`
          : `<i class="prev" style="--a:${css(item.c1)};--b:${css(item.c2)};--bg:${css(item.bg)}"></i>`;
        return `<span class="un-item">${sw}${item.name} ${type}</span>`;
      }).join('');
      blocks.push(`<div class="unlock-items"><span class="un-title">UNLOCKED IN THE LOCKER</span><div>${items}</div></div>`);
    }
    const un = $('overUnlock');
    un.innerHTML = blocks.join('');
    un.classList.toggle('hidden', !blocks.length);
    this.showCoinsEarned($('overCoins'), res.coins);
    const next = $('overNext');
    next.classList.toggle('hidden', !nu);
    if (nu) {
      next.textContent = `Next: ${nu.bot}`;
      next.style.setProperty('--c', nu.color);
    }
    $('overTitle').textContent = won ? 'VICTORY!' : 'DEFEAT';
    $('over').classList.toggle('won', won);
    $('overSub').textContent = won ? `You beat ${game.profile.bot}, ${game.profile.name}` : `${game.profile.bot}, ${game.profile.name}, takes it`;
    $('overScore').innerHTML = m.history
      .map((h) => `<span class="${h[PLAYER] > h[AI] ? 'w' : 'l'}">${h[PLAYER]}–${h[AI]}</span>`)
      .join('');
    // Match stats, with your best for each; new records light up.
    const st = game.stats;
    const now = matchNumbers(st);
    const best = this.progress.records;
    const fresh = new Set(res.records || []);
    const tile = (key, value, label, sub = '') => {
      const rec = key && fresh.has(key);
      const b = key ? `<em>${rec ? 'NEW BEST!' : `best ${best[key] || 0}${key === 'perfectPct' ? '%' : key === 'fastest' ? ' km/h' : ''}`}</em>` : '';
      return `<div class="${rec ? 'rec' : ''}"><b>${value}</b><span>${label}${sub ? ` <small>${sub}</small>` : ''}</span>${b}</div>`;
    };
    const pct = st.hits ? Math.round((100 * st.perfects) / st.hits) : 0;
    $('overStats').innerHTML = [
      tile('rally', st.longest, 'Longest rally'),
      tile(st.hits >= 20 ? 'perfectPct' : null, `${pct}%`, 'PERFECT', `${st.perfects}/${st.hits}`),
      tile('fastest', `${now.fastest}<small> km/h</small>`, 'Fastest shot'),
      tile('smashes', st.smashesLanded, 'Smashes landed', st.smashes ? `of ${st.smashes}` : ''),
      tile('serveWon', `${st.serveWon}/${st.servePts}`, 'Won on serve'),
      tile(null, `${st.won}–${st.lost}`, 'Points'),
    ].join('');
    this.show('over');
    this.showHUD(false);
    if (res.coins) this.countCoins($('overCoins'), res.coins.before, res.coins.balance, res.coins.total);
  }

  // Coins earned from playing (a ladder win, practice milestones), line by line.
  showCoinsEarned(box, coins) {
    box.classList.toggle('hidden', !coins || !coins.total);
    if (!coins || !coins.total) return;
    box.innerHTML = `<span class="un-title">COINS EARNED</span>` +
      coins.lines.map(([label, n]) => `<div class="ce-line"><span>${label}</span><b>+${n}</b></div>`).join('') +
      `<div class="wb-bal"><span>Balance</span><i class="coin big"></i><b class="ce-bal">${coins.before}</b></div>`;
  }

  // Counts a balance up (or down) with the coin sound and, for a gain, a
  // little shower of coins.
  countCoins(box, from, to, net) {
    const el = box.querySelector('.ce-bal, #woBal');
    if (!el) return;
    const t0 = performance.now(), dur = 1300;
    const tick = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    this.h.coins(net);
    if (net <= 0) return;
    const n = Math.min(26, 8 + Math.round(Math.log2(1 + net) * 2));
    for (let i = 0; i < n; i++) {
      const c = document.createElement('i');
      c.className = 'coin fly';
      c.style.setProperty('--dx', `${Math.round((Math.random() - 0.5) * 320)}px`);
      c.style.setProperty('--dy', `${Math.round(-60 - Math.random() * 140)}px`);
      c.style.animationDelay = `${(Math.random() * 0.5).toFixed(2)}s`;
      box.appendChild(c);
      setTimeout(() => c.remove(), 2200);
    }
  }

  // End of a practice session: the counts, and the coins it earned.
  practiceOver(m, balance) {
    const c = m.counts;
    const graded = c.perfect + c.great + c.good + c.early + c.late + c.miss;
    $('poSub').textContent = `${graded} ball${graded === 1 ? '' : 's'} graded · best PERFECT streak ${m.bestStreak}`;
    const tile = (v, label, cls = '') => `<div class="${cls}"><b>${v}</b><span>${label}</span></div>`;
    $('poStats').innerHTML = [
      tile(c.perfect, 'PERFECT', 'c-perfect'), tile(c.great, 'GREAT', 'c-great'), tile(c.good, 'GOOD', 'c-good'),
      tile(c.early + c.late, 'EARLY / LATE', 'c-early'), tile(c.miss, 'MISS', 'c-miss'), tile(`${m.landed}/${m.returned}`, 'On the table'),
    ].join('');
    const s = m.session;
    const coins = s.coins ? { lines: s.lines, total: s.coins, before: balance - s.coins, balance } : null;
    this.showCoinsEarned($('poCoins'), coins);
    this.show('practiceOver');
    this.showHUD(false);
    if (coins) this.countCoins($('poCoins'), coins.before, coins.balance, coins.total);
  }

  // Betting stats: totals, win rate, streaks and the latest bets.
  buildBetStats() {
    const pr = this.progress;
    const st = pr.betStats;
    const net = st.returned - st.wagered;
    const rate = st.bets ? Math.round((100 * st.wins) / st.bets) : 0;
    const tile = (v, label) => `<div><b>${v}</b><span>${label}</span></div>`;
    $('bsTiles').innerHTML = [
      tile(`<i class="coin"></i> ${st.wagered}`, 'Total wagered'),
      tile(`<i class="coin"></i> ${st.returned}`, 'Total won <small>(paid back)</small>'),
      tile(`${net >= 0 ? '+' : '−'}${Math.abs(net)}`, 'Net profit'),
      tile(st.biggest ? `+${st.biggest}` : '–', 'Biggest win'),
      tile(st.bets ? `${rate}%` : '–', `Win rate <small>${st.wins}/${st.bets} bets</small>`),
      tile(`${st.streak} <small>/ best ${st.bestStreak}</small>`, 'Winning streak'),
    ].join('') + `<p class="totals">Balance <b><i class="coin"></i> ${pr.coins}</b> · every side bet counts as a bet of its own</p>`;
    const bot = (i) => OPPONENTS[i].bot;
    const len = (L) => (L === 1 ? '1 game' : `best of ${L * 2 - 1}`);
    const rows = pr.bets.slice(-12).reverse().map((b) => {
      const net = b.returned - b.staked;
      const legs = b.legs.map((l) => `<span class="${l.won ? 'w' : 'l'}">${l.label} · ${l.stake} → ${l.won ? `+${l.pays - l.stake}` : `−${l.stake}`}</span>`).join('');
      return `<div class="bs-row ${net > 0 ? 'w' : net < 0 ? 'l' : ''}"><div class="bs-top"><span>${bot(b.a)} vs ${bot(b.b)} · ${len(b.length)}</span><b>${net > 0 ? '+' : net < 0 ? '−' : '±'}${Math.abs(net)}</b></div><div class="bs-legs">${legs}</div></div>`;
    });
    $('bsHistory').innerHTML = rows.length ? rows.join('') : '<p class="note">No bets yet. Pick a match on the Watch &amp; Bet screen and back a side.</p>';
  }

  // Result of a bot-vs-bot match, and how your bet did.
  watchOver(game, bet = null) {
    this.showBetResult(bet);
    const m = game.match;
    const w = m.winner, l = w === PLAYER ? AI : PLAYER;
    const W = game.sides[w], L = game.sides[l];
    const title = $('woTitle');
    title.textContent = `${W.name} WINS`;
    title.style.setProperty('--c', W.color);
    const games = m.gamesToWin > 1 ? `${m.games[w]}–${m.games[l]} in games` : `${m.history[0][w]}–${m.history[0][l]}`;
    $('woSub').innerHTML = `<b style="color:${W.color}">${W.name}</b> beat <b style="color:${L.color}">${L.name}</b> ${games}`;
    $('woScore').innerHTML = m.history
      .map((h) => {
        const k = h[PLAYER] > h[AI] ? PLAYER : AI;
        return `<span style="--c:${game.sides[k].color}">${h[PLAYER]}–${h[AI]}</span>`;
      })
      .join('');
    const st = game.wstats;
    const kmh = (v) => Math.round(v * 3.6);
    const pair = (k, fmt = (v) => v) => `<b><i style="color:${game.sides[PLAYER].color}">${fmt(st[k][PLAYER])}</i> · <i style="color:${game.sides[AI].color}">${fmt(st[k][AI])}</i></b>`;
    $('woStats').innerHTML = [
      `<div><b>${st.longest}</b><span>Longest rally</span></div>`,
      `<div><b>${st.points}</b><span>Total points</span></div>`,
      `<div>${pair('fastest', kmh)}<span>Fastest shot <small>km/h</small></span></div>`,
      `<div>${pair('smashesLanded')}<span>Smashes landed</span></div>`,
      `<div>${pair('aces')}<span>Aces</span></div>`,
      `<div>${pair('pointsWon')}<span>Points won</span></div>`,
    ].join('');
    this.show('watchOver');
    this.showHUD(false);
    if (bet) this.countCoins($('woBet'), bet.before, bet.balance, bet.net);
  }

  showBetResult(bet) {
    const box = $('woBet');
    box.classList.toggle('hidden', !bet);
    if (!bet) return;
    const legs = bet.legs.map((l) => `<div class="leg ${l.won ? 'won' : 'lost'}"><span>${l.label}</span><span>${l.stake} <i class="coin"></i></span>
      <b>${l.won ? `+${l.pays - l.stake}` : `−${l.stake}`}</b></div>`).join('');
    const net = bet.net;
    const verdict = net > 0 ? `YOU WON <b>+${net}</b>` : net < 0 ? `YOU LOST <b>−${-net}</b>` : 'BROKE EVEN';
    box.className = net > 0 ? 'won' : net < 0 ? 'lost' : 'even';
    box.innerHTML = `<div class="wb-legs">${legs}</div><div class="wb-verdict">${verdict}</div>
      <div class="wb-bal"><span>Balance</span><i class="coin big"></i><b id="woBal">${bet.before}</b></div>`;
  }
}
