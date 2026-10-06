// Keyboard + mouse state with edge detection. Mouse movement is accumulated
// from pointer-lock deltas (or absolute movement when the lock is unavailable).
export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.down = new Set();
    this.pressed = new Set();
    this.mdx = 0;
    this.mdy = 0;
    this.mouseDown = [false, false, false];
    this.mousePressed = [false, false, false];
    this.locked = false;
    this.lastMouse = null;
    this.onLockChange = null;

    window.addEventListener('keydown', (e) => {
      // Stop Space/arrows scrolling the page, but let them work on menu buttons.
      if ((e.code === 'Space' || e.code.startsWith('Arrow')) && (this.active || e.target === document.body)) e.preventDefault();
      if (!this.down.has(e.code)) this.pressed.add(e.code);
      this.down.add(e.code);
    });
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Space' && this.active) e.preventDefault();
      this.down.delete(e.code);
    });
    window.addEventListener('blur', () => {
      this.down.clear();
    });
    window.addEventListener('mousemove', (e) => {
      if (this.locked) {
        this.mdx += e.movementX || 0;
        this.mdy += e.movementY || 0;
      } else if (this.active) {
        if (this.lastMouse) {
          this.mdx += e.clientX - this.lastMouse.x;
          this.mdy += e.clientY - this.lastMouse.y;
        }
        this.lastMouse = { x: e.clientX, y: e.clientY };
      }
    });
    canvas.addEventListener('mousedown', (e) => {
      if (e.button < 3) {
        this.mouseDown[e.button] = true;
        this.mousePressed[e.button] = true;
      }
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button < 3) this.mouseDown[e.button] = false;
    });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.canvas;
      this.lastMouse = null;
      if (this.onLockChange) this.onLockChange(this.locked);
    });
    this.active = false;
  }

  requestLock() {
    try {
      const p = this.canvas.requestPointerLock({ unadjustedMovement: true });
      if (p && p.catch) {
        p.catch(() => {
          // unadjustedMovement isn't supported everywhere; retry plainly
          try {
            const p2 = this.canvas.requestPointerLock();
            if (p2 && p2.catch) p2.catch(() => {});
          } catch (e) { /* ignore */ }
        });
      }
    } catch (e) {
      /* pointer lock unavailable: fall back to absolute mouse movement */
    }
  }

  releaseLock() {
    if (document.pointerLockElement) document.exitPointerLock();
  }

  isDown(code) {
    return this.down.has(code);
  }

  wasPressed(code) {
    return this.pressed.has(code);
  }

  consumeMouse() {
    const d = { x: this.mdx, y: this.mdy };
    this.mdx = 0;
    this.mdy = 0;
    return d;
  }

  // Call at the end of every frame.
  endFrame() {
    this.pressed.clear();
    this.mousePressed[0] = this.mousePressed[1] = this.mousePressed[2] = false;
  }
}
