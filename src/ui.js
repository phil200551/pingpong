import { DIFFICULTIES, MATCH_LENGTHS, PLAYER, AI } from './config.js';
import { QUALITY } from './settings.js';

const $ = (id) => document.getElementById(id);

// DOM overlay: menus, HUD, banners and pop-up text.
export class UI {
  constructor(settings, handlers) {
    this.settings = settings;
    this.h = handlers;
    this.current = null;
    this.prevScreen = null;
    this._lastRally = -1;
    this._vig = -1;
    this.buildMenu();
    this.buildSettings();
    this.bind();
  }

  // --------------------------------------------------------------- screens
  show(name) {
    for (const id of ['menu', 'settings', 'howto', 'pause', 'over']) {
      $(id).classList.toggle('hidden', id !== name);
    }
    this.current = name;
    document.body.classList.toggle('in-menu', !!name);
  }

  showHUD(on) {
    $('hud').classList.toggle('hidden', !on);
  }

  buildMenu() {
    const box = $('diffs');
    box.innerHTML = '';
    DIFFICULTIES.forEach((d, i) => {
      const el = document.createElement('button');
      el.className = 'diff';
      el.style.setProperty('--c', d.color);
      el.innerHTML = `<span class="lvl">${'◆'.repeat(i + 1)}${'◇'.repeat(4 - i)}</span>
        <span class="dname">${d.name}</span><span class="bot">vs ${d.bot}</span>
        <span class="tagline">${d.tagline}</span>`;
      el.addEventListener('click', () => {
        this.settings.difficulty = i;
        this.h.onSettings();
        this.refreshMenu();
        this.h.sound('move');
      });
      el.addEventListener('dblclick', () => this.h.onPlay());
      box.appendChild(el);
    });
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
    this.refreshMenu();
  }

  refreshMenu() {
    [...$('diffs').children].forEach((el, i) => el.classList.toggle('sel', i === this.settings.difficulty));
    [...$('lengths').children].forEach((el) => el.classList.toggle('sel', +el.dataset.id === this.settings.matchLength));
    const d = DIFFICULTIES[this.settings.difficulty];
    $('play').style.setProperty('--c', d.color);
  }

  buildSettings() {
    const s = this.settings;
    const rows = [
      { key: 'master', label: 'Master volume', type: 'range', min: 0, max: 1, step: 0.01, fmt: (v) => Math.round(v * 100) + '%' },
      { key: 'music', label: 'Music volume', type: 'range', min: 0, max: 1, step: 0.01, fmt: (v) => Math.round(v * 100) + '%' },
      { key: 'sfx', label: 'Effects volume', type: 'range', min: 0, max: 1, step: 0.01, fmt: (v) => Math.round(v * 100) + '%' },
      { key: 'quality', label: 'Graphics quality', type: 'select', options: Object.keys(QUALITY).map((k) => [k, QUALITY[k].label]) },
      { key: 'msaa', label: 'MSAA anti-aliasing (test)', type: 'toggle' },
      { key: 'fov', label: 'Field of view', type: 'range', min: 55, max: 100, step: 1, fmt: (v) => v + '°' },
      { key: 'timingGuide', label: 'Timing guide ring', type: 'toggle' },
      { key: 'shake', label: 'Camera shake', type: 'toggle' },
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

  pop(text, cls = 'ok') {
    const el = document.createElement('div');
    el.className = `pop ${cls}`;
    el.textContent = text;
    $('pops').appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }

  milestone(n) {
    this.pop(`🔥 ${n} RALLY! 🔥`, 'milestone');
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

  gameOver(game) {
    const m = game.match;
    const won = m.winner === PLAYER;
    const st = game.stats;
    $('overTitle').textContent = won ? 'VICTORY!' : 'DEFEAT';
    $('over').classList.toggle('won', won);
    $('overSub').textContent = won ? `You beat ${game.profile.bot} on ${game.profile.name}` : `${game.profile.bot} (${game.profile.name}) takes it`;
    $('overScore').innerHTML = m.history
      .map((h) => `<span class="${h[PLAYER] > h[AI] ? 'w' : 'l'}">${h[PLAYER]}–${h[AI]}</span>`)
      .join('');
    $('overStats').innerHTML = [
      ['Points won', st.won],
      ['Points lost', st.lost],
      ['Longest rally', st.longest],
      ['Perfect hits', st.perfects],
      ['Smashes', st.smashes],
      ['Aces', st.aces],
    ].map(([k, v]) => `<div><b>${v}</b><span>${k}</span></div>`).join('');
    this.show('over');
    this.showHUD(false);
  }
}
