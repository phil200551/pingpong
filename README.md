# NEON SPIN — first-person table tennis

A neon-drenched, first-person ping pong game that runs in your web browser.
Real ball physics (gravity, air drag, spin/Magnus curve, table friction, net
cords), official scoring, five distinct computer opponents, synthesised sound
and music, and a rally system that gets louder, brighter and faster the longer
the point goes on.

## Run it

**Quickest:** open `index.html` in Chrome, Edge or Firefox (double-click it).
The game is pre-built into `dist/game.js`, so no install is needed.

**Or serve it locally** (recommended — some browsers are stricter with
`file://` pages):

```bash
npm install
npm start          # builds, then serves on http://localhost:8080
```

Any static server works too, e.g. `python3 -m http.server 8080`, then open
<http://localhost:8080>.

Click **PLAY** — the game captures your mouse for aiming. Press **Esc** to
pause and get the cursor back.

## Controls

| Input | Action |
| --- | --- |
| **W A S D** | Move around your end of the table |
| **Mouse** (or arrow keys) | Move the aim marker on your opponent's half — your shot goes there |
| **Space** (or left click) | Swing |
| **Shift + Space** (or right click) | Backspin chop: slower, lower, safer |
| **A / D while swinging** | Brush sidespin onto the ball so it curves |
| **Esc** / **P** | Pause menu |

## How to play well

- **Line up.** Move so the incoming ball arrives to your right (forehand) or
  left (backhand), within arm's reach. Your paddle tracks the ball's height
  for you; your job is footwork and timing.
- **Timing is everything.** A ring shrinks onto the incoming ball. Swing as it
  closes and turns **green** for a **PERFECT** hit. Red means it's out of reach,
  so move. Early or late swings are slower and scatter, and can find the net.
- **SMASH.** A perfectly timed hit on a high ball is a huge, fast kill shot,
  with slow-mo and fireworks.
- **Spin matters.** Heavy topspin kicks your return long, and backspin drags it
  into the net. Chop (Shift) to stay safe against spin.
- **Serving.** Press Space to toss, then Space again as the ball drops back to
  about hand height. It must bounce on your side, then theirs. A serve that
  clips the net and lands in is a **let** and is replayed.
- **Rules.** Games go to 11 and you must win by 2. Serve switches every 2
  points, and every point from 10–10. Pick a single game, best of 3 or best
  of 5.

## Opponents

| Level | Bot | Style |
| --- | --- | --- |
| Rookie | PIP | Slow, loopy, central shots. Slow to react, makes plenty of errors. |
| Amateur | DASH | Steady. Likes long rallies, some spin, the occasional smash. |
| Pro | VOLT | Aggressive topspin, sharper angles, punishes high balls. |
| Champion | NOVA | Fast feet, heavy spin, aims away from you, drop shots. |
| Legend | ZERO | Lightning reactions and pace. Still human: it misreads, gets stretched and cracks under pressure in long rallies. |

Every opponent plays like a person: it needs time to react, misjudges the
ball at first and refines its read as the ball approaches, has to run to the
ball, and hits strokes of varying quality. It makes more errors when you
hit hard, stretch it wide, load the ball with spin, or drag it into a long
rally.

## Settings

Aim sensitivity, master/music/effects volume, graphics quality, field of view,
the timing-guide ring, camera shake, slow-mo on great shots, and an FPS
counter. Settings are saved in your browser.

**Graphics quality:** if it isn't silky smooth, step down. **Low** turns off
the bloom/glow pass, renders at a lower resolution and cuts particles and the
crowd. **Medium** keeps the glow at half resolution. **High/Ultra** add
multisampling and higher resolution.

## Development

```
src/
  main.js      bootstrap + render loop
  game.js      rules, rally/serve state machine, scoring, effects orchestration
  physics.js   ball flight (drag, Magnus), table/net/floor collisions, shot solver
  player.js    you: movement, aiming, swing timing, first-person camera
  ai.js        computer opponents
  match.js     scoring (11 points, win by 2, service rotation, deuce)
  scene.js     Three.js arena, table, paddles, opponent avatar, bloom
  effects.js   sparks, ball trail, shockwaves, camera shake
  audio.js     Web Audio synthesised sound effects, crowd and music
  ui.js        menus, HUD, settings
tools/
  simulate.mjs   headless AI-vs-AI matches (balance + rules check)
  bot-human.mjs  drives the human controller with scripted input
```

```bash
npm run build      # bundle src/ into dist/game.js
npm run watch      # rebuild on change (with source maps)
node tools/simulate.mjs 600     # AI-vs-AI balance check (600 s per pairing)
node tools/bot-human.mjs 2 0.05 # scripted player with 50 ms timing error vs Pro
```

Built with [three.js](https://threejs.org/) and bundled with esbuild.
