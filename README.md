# NEON SPIN — first-person table tennis

A neon, first-person ping pong game that runs in your web browser, with black
ink outlines and anime-style hit frames. Real ball physics (gravity, air drag,
topspin and backspin that curve the ball and change the bounce, net cords),
official scoring, a ladder of five very different computer opponents, a ball
machine to practise against, stats and unlockables, a Watch & Bet mode where
you bet play-money coins on bot-vs-bot matches, and synthesised sound and
music. Rallies get louder, brighter and faster the longer the point goes on.

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

Click **PLAY** and you're in. **Esc** pauses, **M** mutes.

## Controls

| Input | Action |
| --- | --- |
| **W A S D** | Move around your end of the table, and steer your shot (below) |
| **Space** (or left click) | Swing |
| **Shift + Space** (or right click) | Backspin chop |
| **Esc** / **P** | Pause menu |
| **M** | Mute / unmute all sound |

Watching a bot-vs-bot match (Watch & Bet): **C** changes camera, **1 / 2 / 3**
set the speed to 1× / 2× / 4×, **K** skips to the result, **Space** skips a
replay.

**You aim and shape the shot by how you move as you hit**, no mouse needed:

| Moving when you hit | Shot |
| --- | --- |
| nothing | a normal drive straight down the middle |
| **D** / **A** | to the right / left side of their table |
| **W** | a hard **topspin** drive: fast, dips hard and kicks forward off the table |
| **S** | a soft push: slower and shorter, little spin |
| **Shift** + swing | a **backspin** chop: floats low over the net and dies short |
| combos, e.g. **W + D** | blend: a fast topspin drive to the right |

A decently timed shot always lands on the table; only a badly mistimed one can
find the net or sail out.

## How to play well

- **Line up.** Move so the incoming ball arrives to your right (forehand) or
  left (backhand), within arm's reach. Your paddle tracks the ball's height for
  you; your job is footwork and timing.
- **Timing is everything.** A ring shrinks onto the incoming ball. Swing as it
  closes and turns **green** for a **PERFECT** hit. Red means it's out of reach,
  so move. The verdict (PERFECT / GREAT / GOOD / EARLY / LATE) flashes up under
  the scoreboard.
- **Read the spin.** A band painted on the ball turns with its spin. **Orange,
  rolling down towards you = topspin**: it dips and kicks forward off the
  table, so it's on you fast. **Blue, rolling up = backspin**: it floats, then
  dies short and low. The ball's trail takes on the same colour.
- **Spin on your return.** Topspin coming in kicks a sloppy return long;
  backspin drags it into the net. Good timing beats both, and a chop is the
  safe answer to heavy backspin. Moving sideways as you swing brushes on a
  little sidespin.
- **SMASH.** A perfectly timed hit on a high ball is a huge, fast kill shot.
- **Serving.** Press Space to toss, then Space again as the ball drops back to
  about hand height. It must bounce on your side, then theirs. W serves long
  with topspin, S short; Shift serves backspin. A serve that clips the net and
  lands in is a **let** and is replayed.
- **Rules.** Games go to 11 and you must win by 2. Serve switches every 2
  points, and every point from 10–10. Play a single game, best of 3 or best of 5.

### Hit feel

- **Hit-stop:** a PERFECT hit freezes the action for 60 ms and a SMASH for
  80 ms (an opponent's smash 40 ms), so the big ones land with weight. The
  anime impact frame plays over the freeze.
- **Screen shake:** a small, quick shake on PERFECT and SMASH hits, scaled by
  shot power (Settings → Screen shake).
- **Slow-mo finish:** the point that wins a game or the match is played back in
  slow motion (about 1.5 s, letterboxed) before the result. Space skips it.

## The opponent ladder

Five opponents, easiest first. **Beat one to unlock the next**; the Ladder
screen (main menu) shows who's unlocked and lets you pick anyone you've
reached.

| # | Opponent | Look | Style |
| --- | --- | --- | --- |
| 1 | **PIP**, The Beginner | green, round, goggles | Slow and friendly, little spin, plays everything back down the middle. |
| 2 | **BLAZE**, The Smasher | orange, flame hair | Hits everything hard and fast and smashes anything that sits up, but makes more errors. |
| 3 | **ECHO**, The Wall | cyan, broad, face shield and shoulder pads | Defender: stands back, chops, gets almost everything back deep and safe, rarely attacks. Be patient. |
| 4 | **VORTEX**, The Spin Doctor | purple, spinning halo | Mixes heavy topspin loops with heavy backspin chops, sidespin and spinny serves. Read the band! |
| 5 | **ZERO**, The Final Boss | red, glowing horns | Does everything well: reflexes, pace, spin and pinpoint angles. |

Nobody cheats. Difficulty comes only from human traits: how fast they react,
how well they read the ball (everyone misreads it at first and refines as it
comes), how fast they move, where they place it, how hard and with how much
spin they hit, and how often they make mistakes (more under pressure, on
stretched or spinny balls, and in long rallies).

## Stats and the Locker

After every match you get your **longest rally, PERFECT %, fastest shot
(km/h), smashes landed, points won on your serve** and the score, each shown
next to your personal best. **New records light up.** The Locker (main menu)
lists your personal bests.

Things to unlock in the **Locker**, where you pick your paddle colour and arena:

| Unlock | How |
| --- | --- |
| Ice / Blaze / Lime / Violet / Champion Gold paddles | beat PIP / BLAZE / ECHO / VORTEX / ZERO |
| Ember arena | beat BLAZE |
| Neon Pink paddle + Deep Sea arena | play a 20-shot rally |
| Ghost paddle + Toxic arena | hit 10 PERFECTs in one match |

Arena themes recolour all the neon (floor grid, light pillars, rings, beams,
table trim, net, screens, crowd, sky and haze); they're all as dark as the
original Neon Night. Leaving a match early still keeps any records and
milestone unlocks from it.

## Practice mode

**Practice** (main menu) swaps the opponent for a ball machine that feeds you
balls on a loop. Choose the **ball speed** (slow / medium / fast), **spin**
(none / topspin / backspin / random), **placement** (left / middle / right /
random) and **feed rate** (relaxed / steady / rapid). Every ball is graded
**PERFECT / GREAT / GOOD / EARLY / LATE / MISS**, with a running count at the
top of the screen plus how many of your returns landed and your PERFECT
streak. Change the options or reset the counts from the pause menu (Esc).

## Watch & Bet

**Watch & Bet** (main menu) puts two bots on the table while you watch. Pick
any two of the five, whether or not you've reached them on the ladder (the
ladder still decides who *you* can play). The same bot twice is fine: the
sides are painted red and blue and labelled "ZERO (Red)" and "ZERO (Blue)".
Choose a single game to 11, best of 3 or best of 5.

- **Cameras:** a broadcast-style side view of the whole table; **C** cycles
  to behind bot 1, behind bot 2 and overhead. In the behind-the-bot views the
  bot you're looking over is drawn see-through so it never hides the table. The scoreboard, rally counter,
  crowd, sounds and the slow-motion replay of game and match points are all
  there.
- **Speed:** 1×, 2× or 4×, or **Skip to result**, which plays the rest of the
  match out in a moment with no picture or sound. Replays always play at
  normal speed.
- **Never a foregone conclusion:** in Watch & Bet every bot gets a *form* for
  each game (a good or bad day for its reactions, reads, footwork, stroke
  quality and error rate), momentum from point to point, and a little
  randomness in the timing of every swing. Mirror matches are coin flips and
  underdogs win their share. Ladder opponents are unaffected.

### Coins and betting

Coins are play money only. You start with **100**; the balance shows on the
main menu and the Watch & Bet screen. Before a match you can bet any whole
number of coins up to your balance on either side to win, and add **side
bets**, each with its own stake and odds:

| Side bet | Wins if |
| --- | --- |
| Exact score (single-game matches) | the game ends with exactly that score, e.g. "ECHO wins 11–5" |
| Total points over / under a line | the points played in the whole match finish over / under it |
| Longest rally over / under a line | the longest rally of the match (shots, serve included) finishes over / under it |

Over/under lines start at the most even split and can be moved with ‹ ›.
Every pick shows its chance and what it pays, and the slip shows the exact
return of each bet and the total before you confirm ("Bet 20 on BLAZE → pays
50 (+30)"). After the match the result screen settles every bet, with your
coins won or lost and your new balance.

**How the odds are made.** `tools/odds.mjs` played thousands of headless
games for every pair of bots, exactly as you watch them (form, momentum and
all), and stored one record per game (winner, score, longest rally) in
`src/odds-data.js`. A bot's chance of winning a game is its share of those
games. Each game of a match starts with a fresh form, so games are
independent: a best of 3 is g²(3 − 2g) and a best of 5 is g³(10 − 15g + 6g²).
Real best-of-3 simulations agree (ECHO vs BLAZE: 67.8% in 1200 simulated
matches, 67.4% from the formula; ECHO wins 60% of single games, which is why
BLAZE sits below ECHO on the ladder). Side-bet chances are summed exactly over
every way the games can fall. Mirror matches are exactly 50/50.

**Payouts.** A winning bet pays **stake ÷ chance, rounded down to whole
coins**, stake included. There's no house cut: mirror matches pay 2×. The only
limit is on longshots: anything rarer than 1 in 1000 (it never or almost
never happened in the simulations) is priced at 1 in 1000, so the most a bet
can pay is 1000×.

**Out of coins?** Claim a free 50-coin refill on the Watch & Bet screen (at
most once every 2 minutes). Quitting a match you've bet on plays it out to
the result. Closing or reloading the page mid-match doesn't get you out of a
bet either: the score is saved with the bet after every point, and the next
time the game opens it finishes that match without you, from where it stood,
and settles the bet on the result (the main menu tells you how it went).

**Coins live in one tab at a time.** If the game is open in two tabs, the
first one to open holds the coins; the other can play and watch but can't
bet or earn coins, and says so. When the first tab closes, the next one
takes over (and finishes any match it left a bet on). Corrupted or
hand-edited saved data is checked field by field on load, so a bad value
can't crash the game or mint coins.

**Betting stats** (on the Watch & Bet screen): total wagered, total won,
net profit, biggest win, win rate and your current and best winning streak
(each side bet counts as a bet of its own), plus your latest bets.

### Coins from playing

| How | Coins |
| --- | --- |
| Beat PIP / BLAZE / ECHO / VORTEX / ZERO | 5 / 10 / 15 / 20 / 30 (×1.5 for best of 3, ×2 for best of 5) |
| …for the first time | plus double the base amount again |
| Practice: every 10th PERFECT in a session | 5 |
| Practice: a PERFECT streak of 5 / 10 / 20 | 5 / 10 / 20 |
| Practice: 25 / 50 / 100 returns on the table | 5 / 10 / 20 |

Ladder coins show on the victory screen; practice coins pop up as you earn
them and on the practice summary when you quit the session (each milestone
pays once per session).

### Measured win rates

Chance that the first bot beats the second, from the simulations behind the
odds (3000 games per pairing, 2000 per mirror pairing). Best of 3 / 5 are
derived from the single-game rate as above.

| Matchup | Games simulated | Single game | Best of 3 | Best of 5 |
| --- | --- | --- | --- | --- |
| PIP vs BLAZE | 3000 | 0.3% | <0.1% | <0.1% |
| PIP vs ECHO | 3000 | 1.6% | <0.1% | <0.1% |
| PIP vs VORTEX | 3000 | 0.1% | <0.1% | <0.1% |
| PIP vs ZERO | 3000 | 0 of 3000 | <0.1% | <0.1% |
| BLAZE vs ECHO | 3000 | 40.0% | 35.2% | 31.8% |
| BLAZE vs VORTEX | 3000 | 18.6% | 9.1% | 4.8% |
| BLAZE vs ZERO | 3000 | 1.4% | <0.1% | <0.1% |
| ECHO vs VORTEX | 3000 | 34.8% | 27.9% | 23.2% |
| ECHO vs ZERO | 3000 | 3.2% | 0.3% | <0.1% |
| VORTEX vs ZERO | 3000 | 12.6% | 4.4% | 1.6% |
| PIP vs PIP | 2000 | 49.0% | priced 50% | priced 50% |
| BLAZE vs BLAZE | 2000 | 50.0% | priced 50% | priced 50% |
| ECHO vs ECHO | 2000 | 47.9% | priced 50% | priced 50% |
| VORTEX vs VORTEX | 2000 | 50.8% | priced 50% | priced 50% |
| ZERO vs ZERO | 2000 | 50.8% | priced 50% | priced 50% |

In the mirror rows the first bot is one of the two copies (it played from each
end in half of the games). All five are within ordinary simulation noise of
50% (one standard error is 1.1 points; the biggest gap, ECHO's 47.9%, is under
two), so mirror matches are priced at exactly 50%.

## Sound

Everything you hear is synthesised live with the Web Audio API: no audio files.
The paddle "tock" gets higher and louder the harder you hit (smashes add a
heavy thump and crack), the table gives a lighter tick, the net a dull thud.
The crowd murmurs, builds from the 10th shot of a long rally, and cheers or
groans when a point ends. The music is a looping synthwave track that picks
up as a rally heats up.

## Settings

Master, music, effects and crowd volume, mute (**M**), graphics quality, field
of view, the timing-guide ring, screen shake, slow-mo on great shots, the
announcer voice and an FPS counter.

**Graphics quality:** on first launch the game measures your frame rate for a
few seconds and steps the quality down if needed. If it still isn't silky
smooth, step down yourself. **Low** turns off the glow, renders at a lower
resolution and cuts particles and the crowd. **Medium** keeps the glow at half
resolution. **High/Ultra** render at up to 1.5×/2× resolution with full-res
glow and SMAA anti-aliasing (Low/Medium use FXAA). The outlines look the same
on every level.

If a graphics level ever renders a black picture on your GPU, the game notices
within a couple of seconds and steps down a level by itself (and tells you).

**MSAA anti-aliasing (test)** switches the 3D scene back to 4× multisampled
buffers (off by default). It's there to test the black-screen fix: if MSAA
brings the black picture back, the game turns it off again and tells you.

## Saved data

Settings, ladder progress, personal bests, unlocks, your Locker picks, and
your coins, bets and betting stats are saved in your browser's localStorage
(`neonspin.settings.v1` and `neonspin.progress.v1`; `neonspin.lock.v1` is the
tab lock's heartbeat, only used where the Web Locks API is missing). Clear the site's data to start over. For testing,
add `?unlock` to the address (e.g. `http://localhost:8080/?unlock`) to open the
whole ladder.

## Development

```
src/
  main.js       bootstrap, render loop, menus/pause/mute wiring, saving progress
  game.js       rules, rally/serve state machine, scoring, effects, hit-stop,
                slow-mo replay, spin band, stats
  physics.js    ball flight (drag, Magnus), table/net/floor bounce with spin,
                shot solver (incl. serves)
  player.js     you: movement, aiming/spin from movement, swing timing, camera
  ai.js         computer opponents (plus form and momentum in Watch & Bet)
  config.js     constants and the five ladder opponents
  match.js      scoring (11 points, win by 2, service rotation, deuce)
  practice.js   the practice ball machine, timing grades, milestone coins
  progress.js   ladder progress, personal bests, unlocks, coins and bets
                (localStorage)
  lock.js       one tab at a time holds the coins (Web Locks, or a
                localStorage heartbeat where they're missing)
  odds.js       Watch & Bet match odds and payouts
  odds-data.js  the simulated games behind the odds (generated)
  sidebets.js   side-bet chances: exact score, total points, longest rally
  cosmetics.js  paddle colours and arena themes, and how to unlock them
  replay.js     rolling recording for the slow-motion replay
  scene.js      Three.js arena, table, paddles, opponents' looks, ball machine,
                arena themes, render pipeline
  outline.js    black ink outlines (screen-space inverted hull)
  impact.js     anime-style hit frame over your paddle
  effects.js    sparks, ball trail, shockwaves, screen shake
  audio.js      Web Audio synthesised effects, crowd and music
  ui.js         menus, ladder, locker, practice, Watch & Bet, HUD, settings
tools/
  simulate.mjs   headless AI-vs-AI matches (balance + rules check)
  bot-human.mjs  drives the human controller with scripted input
  aim-test.mjs   where your shots land for each movement-key combination
  odds.mjs       simulates every bot pairing and writes src/odds-data.js
```

```bash
npm run build      # bundle src/ into dist/game.js
npm run watch      # rebuild on change (with source maps)
npm run sim        # AI-vs-AI balance check across opponent pairings
npm run odds       # re-simulate the Watch & Bet odds (~15 min on 4 cores)
# scripted player vs VORTEX: 45 ms timing error, 0.18 s reaction, 0.18 m misjudgement
node tools/bot-human.mjs 3 0.045 400 0.18 0.18
node tools/aim-test.mjs 200
```

Built with [three.js](https://threejs.org/) and bundled with esbuild.
