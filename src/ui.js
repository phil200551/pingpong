import { OPPONENTS, MATCH_LENGTHS, PLAYER, AI } from './config.js';
import { QUALITY } from './settings.js';
import { PADDLES, ARENAS, describeReq } from './cosmetics.js';
import { owns, matchNumbers } from './progress.js';
import { PRACTICE_OPTIONS } from './practice.js';

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
const POP_TIME = { gp: 1.2, milestone: 0.9 };

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
    for (const id of ['menu', 'ladder', 'locker', 'practice', 'settings', 'howto', 'pause', 'over']) {
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
    $('oname').textContent = game.profile.bot;
    $('hud').style.setProperty('--opp', game.profile.color);
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
    const line = cls === 'milestone' ? 'milestone' : 'main';
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

  banner(title, sub, cls, dur = 1.6) {
    const b = $('banner');
    b.className = '';
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
  }
}
