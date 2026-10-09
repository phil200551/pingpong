// Coins live in one browser tab at a time. Two tabs each holding their own
// copy of the balance would otherwise overwrite each other (and a bet could
// be paid twice). The first tab to open takes the lock; the others say so and
// can still play and watch. When the owner closes, the next tab takes over.
//
// The Web Locks API does this exactly (a lock dies with its tab). Where it is
// missing the fallback is a heartbeat in localStorage: the owner renews it,
// and a lock that stops being renewed is free again.
const NAME = 'neonspin.coins';
const KEY = 'neonspin.lock.v1';
const TTL = 75 * 1000;  // a hidden tab's timers can be held back by a minute
const BEAT = 5 * 1000;

export class TabLock {
  // onAcquire() runs when this tab becomes the owner (at once if it is the
  // first tab), onLose() if the heartbeat fallback ever loses the lock.
  constructor(onAcquire, onLose) {
    this.owner = false;
    this.onAcquire = onAcquire;
    this.onLose = onLose;
    this.id = Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  start() {
    const locks = typeof navigator !== 'undefined' && navigator.locks;
    if (locks && typeof locks.request === 'function') {
      const hold = () => new Promise(() => {}); // held until the tab closes
      locks.request(NAME, { ifAvailable: true }, (lock) => {
        if (lock) { this._own(); return hold(); }
        // Someone else has it: queue up and take over when they close.
        locks.request(NAME, () => { this._own(); return hold(); }).catch(() => this._beat());
        return null;
      }).catch(() => this._beat());
      return;
    }
    this._beat();
  }

  _own() {
    if (this.owner) return;
    this.owner = true;
    if (this.onAcquire) this.onAcquire();
  }

  _lose() {
    if (!this.owner) return;
    this.owner = false;
    if (this.onLose) this.onLose();
  }

  // ---- heartbeat fallback
  _beat() {
    if (this._beating) return;
    this._beating = true;
    this._tick();
    this._timer = setInterval(() => this._tick(), BEAT);
    window.addEventListener('storage', (e) => { if (e.key === KEY) this._tick(); });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) this._tick(); });
    window.addEventListener('pagehide', () => this.release());
  }

  _read() {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || 'null');
      return v && typeof v === 'object' && typeof v.id === 'string' && Number.isFinite(v.t) ? v : null;
    } catch (e) {
      return null;
    }
  }

  _tick() {
    const now = Date.now();
    let cur = this._read();
    const free = !cur || cur.id === this.id || now - cur.t >= TTL;
    if (free) {
      try { localStorage.setItem(KEY, JSON.stringify({ id: this.id, t: now })); } catch (e) { this._own(); return; }
      cur = this._read();
    }
    if (cur && cur.id === this.id) this._own(); else this._lose();
  }

  release() {
    if (!this.owner) return;
    const cur = this._read();
    if (cur && cur.id === this.id) { try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ } }
  }
}
