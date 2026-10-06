// World units are metres and seconds. The player stands at +z, the opponent at -z.

export const TABLE_H = 0.76;          // height of the playing surface
export const HALF_L = 1.37;           // half table length (z)
export const HALF_W = 0.7625;         // half table width (x)
export const NET_H = 0.1525;
export const NET_TOP = TABLE_H + NET_H;
export const NET_HALF_W = 0.915;
export const BALL_R = 0.02;

export const GRAVITY = 9.81;
export const DRAG = 0.13;             // 0.5 * rho * Cd * A / m
export const MAGNUS = 0.0019;         // lift coefficient for (spin x velocity)
export const SPIN_DECAY = 0.22;       // fraction of spin lost per second in the air
export const TABLE_E = 0.89;          // coefficient of restitution on the table
export const TABLE_MU = 0.3;          // table friction (ball sliding on the table)
export const FLOOR_E = 0.6;
// Spin is in rad/s. About this much is "heavy" spin (some 60 turns a second);
// a gentle push carries ~100, a loop drive 500+.
export const SPIN_REF = 400;

// Swing timing: the paddle reaches the contact point STRIKE_T seconds after the
// swing starts. A swing lasts SWING_T seconds in total.
export const STRIKE_T = 0.09;
export const SWING_T = 0.3;
export const SWING_COOLDOWN = 0.34;

export const PLAYER = 'player';
export const AI = 'ai';
export const sideSign = (s) => (s === PLAYER ? 1 : -1);
export const otherSide = (s) => (s === PLAYER ? AI : PLAYER);

// The opponent ladder, easiest first. Beat one to unlock the next.
// Every number is a "human" trait: how quickly they react, how well they read
// the ball, how fast they move, how hard and with how much spin they hit, how
// well they place it and how often they mess up. Nobody cheats: even ZERO has
// to run, misreads the ball at first and mis-hits under pressure.
//   placement  'middle' = plays everything back down the middle
//   depth      [min, max] how deep they aim (m past the net)
//   stance     how far back from the table they wait (m from the net)
//   chopSpin   [min, max] backspin on their chops (rad/s)
//   smashHeight  they smash balls that sit up higher than this (m)
// Spin is in rad/s (~400 = heavy). look = body build + gear (see scene.js).
export const OPPONENTS = [
  {
    id: 'pip',
    bot: 'PIP',
    name: 'The Beginner',
    style: 'Slow and friendly',
    tagline: 'Just learning. Slow, loopy shots back down the middle.',
    color: '#39ff88',
    hex: 0x39ff88,
    look: { build: 'small', gear: ['goggles', 'sprout'] },
    skill: 0,
    reaction: 0.34,
    maxSpeed: 1.7,
    accel: 6,
    readNoise: 1.4,       // m/s of velocity misread when the ball leaves your paddle
    aimError: 0.25,
    speed: [5.2, 7.6],
    topspin: [40, 140],
    sidespin: 0,
    chopChance: 0.12,
    chopSpin: [120, 200],
    smashChance: 0.0,
    dropChance: 0.0,
    errorRate: 0.11,
    quality: [0.45, 0.2],
    placement: 'middle',
    cornerBias: 0,
    depth: [0.6, 0.9],
    preferHeight: 0.95,
    reach: 0.8,
    serve: { speed: [4.4, 5.4], spin: 80, errorRate: 0.06 },
  },
  {
    id: 'echo',
    bot: 'ECHO',
    name: 'The Wall',
    style: 'Defender',
    tagline: 'Gets everything back, deep and safe. Rarely attacks: be patient.',
    color: '#29e7ff',
    hex: 0x29e7ff,
    look: { build: 'broad', gear: ['shield', 'pads'] },
    skill: 0.3,
    spinRead: 0.85,      // how well they cancel your spin on their return (0..1)
    reaction: 0.2,
    maxSpeed: 3.0,
    accel: 13,
    readNoise: 0.75,
    aimError: 0.1,
    speed: [6, 9],
    topspin: [80, 220],
    sidespin: 40,
    chopChance: 0.5,
    chopSpin: [220, 360],
    smashChance: 0.04,
    dropChance: 0.02,
    errorRate: 0.025,
    quality: [0.64, 0.08],
    cornerBias: 0.15,
    depth: [0.72, 1.05],
    stance: 2.55,
    preferHeight: 0.95,
    reach: 1.02,
    serve: { speed: [4.6, 6], spin: 220, errorRate: 0.02 },
  },
  {
    id: 'blaze',
    bot: 'BLAZE',
    name: 'The Smasher',
    style: 'All-out attack',
    tagline: 'Hits everything hard and fast, and smashes anything high. Misses plenty too.',
    color: '#ff7a1a',
    hex: 0xff7a1a,
    look: { build: 'lean', gear: ['crest', 'band'] },
    skill: 0.5,
    reaction: 0.16,
    maxSpeed: 3.0,
    accel: 15,
    readNoise: 0.6,
    aimError: 0.16,
    speed: [11, 16.5],
    topspin: [180, 360],
    sidespin: 80,
    chopChance: 0.04,
    chopSpin: [180, 280],
    smashChance: 0.85,
    smashHeight: 1.02,
    dropChance: 0.0,
    errorRate: 0.075,
    quality: [0.7, 0.16],
    cornerBias: 0.6,
    stance: 2.0,
    preferHeight: 1.12,
    reach: 0.92,
    serve: { speed: [6.2, 8.4], spin: 220, errorRate: 0.05 },
  },
  {
    id: 'vortex',
    bot: 'VORTEX',
    name: 'The Spin Doctor',
    style: 'Spin specialist',
    tagline: 'Mixes heavy topspin loops with heavy backspin chops. Read the stripe!',
    color: '#b45cff',
    hex: 0xb45cff,
    look: { build: 'slim', gear: ['halo'] },
    skill: 0.75,
    reaction: 0.135,
    maxSpeed: 3.3,
    accel: 17,
    readNoise: 0.42,
    aimError: 0.11,
    speed: [8.5, 12.5],
    topspin: [420, 680],
    sidespin: 300,
    chopChance: 0.42,
    chopSpin: [380, 560],
    smashChance: 0.35,
    dropChance: 0.12,
    errorRate: 0.04,
    quality: [0.72, 0.13],
    cornerBias: 0.6,
    preferHeight: 1.05,
    reach: 0.98,
    serve: { speed: [5, 7.5], spin: 560, errorRate: 0.025 },
  },
  {
    id: 'zero',
    bot: 'ZERO',
    name: 'The Final Boss',
    style: 'Does it all',
    tagline: 'Lightning reflexes, pace, spin and pinpoint angles. Still human... barely.',
    color: '#ff3355',
    hex: 0xff3355,
    look: { build: 'tall', gear: ['horns', 'spikes'] },
    skill: 1,
    reaction: 0.095,
    maxSpeed: 3.9,
    accel: 22,
    readNoise: 0.22,
    aimError: 0.075,
    speed: [11.5, 17.5],
    topspin: [380, 640],
    sidespin: 260,
    chopChance: 0.15,
    chopSpin: [300, 500],
    smashChance: 0.9,
    dropChance: 0.1,
    errorRate: 0.025,
    quality: [0.8, 0.12],
    cornerBias: 0.85,
    preferHeight: 1.12,
    reach: 1.05,
    serve: { speed: [6, 8.6], spin: 500, errorRate: 0.015 },
  },
];
// Older name, still used by the tools.
export const DIFFICULTIES = OPPONENTS;

export const MATCH_LENGTHS = [
  { id: 1, label: 'Single game' },
  { id: 2, label: 'Best of 3' },
  { id: 3, label: 'Best of 5' },
];
