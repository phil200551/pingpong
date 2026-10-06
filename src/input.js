// Keyboard + mouse-button state with edge detection. (Shots are aimed with
// the movement keys, so mouse movement isn't used.)
export class Input {
  constructor(canvas) {
    this.canvas = canvas;
    this.down = new Set();
    this.pressed = new Set();
    this.mouseDown = [false, false, false];
    this.mousePressed = [false, false, false];

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
    this.active = false;
  }

  isDown(code) {
    return this.down.has(code);
  }

  wasPressed(code) {
    return this.pressed.has(code);
  }

  // Call at the end of every frame.
  endFrame() {
    this.pressed.clear();
    this.mousePressed[0] = this.mousePressed[1] = this.mousePressed[2] = false;
  }
}
