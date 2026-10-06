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

// Opponent profiles. Every number here is a "human" trait: how quickly they
// react, how well they read the ball, how fast they move and how consistent
// their strokes are. Nobody is perfect: even the Legend misreads and mis-hits.
export const DIFFICULTIES = [
  {
    id: 'rookie',
    name: 'Rookie',
    bot: 'PIP',
    skill: 0,
    tagline: 'Just learning. Slow, loopy, friendly shots.',
    color: '#39ff88',
    hex: 0x39ff88,
    reaction: 0.34,
    maxSpeed: 1.7,
    accel: 6,
    readNoise: 1.4,       // m/s of velocity misread when the ball leaves your paddle
    aimError: 0.25,
    speed: [5.2, 7.6],
    topspin: [60, 170],
    sidespin: 0,
    chopChance: 0.15,
    smashChance: 0.0,
    dropChance: 0.0,
    errorRate: 0.11,
    quality: [0.45, 0.2],
    cornerBias: 0.05,
    preferHeight: 0.95,
    reach: 0.8,
    serve: { speed: [4.4, 5.4], spin: 100, errorRate: 0.06 },
  },
  {
    id: 'amateur',
    name: 'Amateur',
    bot: 'DASH',
    skill: 0.25,
    tagline: 'Steady club player who loves a long rally.',
    color: '#29e7ff',
    hex: 0x29e7ff,
    reaction: 0.25,
    maxSpeed: 2.3,
    accel: 9,
    readNoise: 0.95,
    aimError: 0.22,
    speed: [6.8, 10],
    topspin: [120, 280],
    sidespin: 70,
    chopChance: 0.18,
    smashChance: 0.25,
    dropChance: 0.02,
    errorRate: 0.08,
    quality: [0.55, 0.18],
    cornerBias: 0.25,
    preferHeight: 1.02,
    reach: 0.88,
    serve: { speed: [4.8, 6.2], spin: 180, errorRate: 0.04 },
  },
  {
    id: 'pro',
    name: 'Pro',
    bot: 'VOLT',
    skill: 0.5,
    tagline: 'Aggressive topspin and sharp angles.',
    color: '#ffe23a',
    hex: 0xffe23a,
    reaction: 0.18,
    maxSpeed: 2.9,
    accel: 13,
    readNoise: 0.6,
    aimError: 0.15,
    speed: [8.5, 13],
    topspin: [220, 420],
    sidespin: 130,
    chopChance: 0.15,
    smashChance: 0.55,
    dropChance: 0.05,
    errorRate: 0.05,
    quality: [0.66, 0.16],
    cornerBias: 0.5,
    preferHeight: 1.08,
    reach: 0.95,
    serve: { speed: [5.2, 7.2], spin: 280, errorRate: 0.03 },
  },
  {
    id: 'champion',
    name: 'Champion',
    bot: 'NOVA',
    skill: 0.75,
    tagline: 'Fast feet, wicked spin, punishes weak balls.',
    color: '#ff3df2',
    hex: 0xff3df2,
    reaction: 0.13,
    maxSpeed: 3.4,
    accel: 17,
    readNoise: 0.38,
    aimError: 0.1,
    speed: [10, 15.5],
    topspin: [300, 540],
    sidespin: 190,
    chopChance: 0.12,
    smashChance: 0.75,
    dropChance: 0.08,
    errorRate: 0.035,
    quality: [0.74, 0.14],
    cornerBias: 0.7,
    preferHeight: 1.12,
    reach: 1.0,
    serve: { speed: [5.6, 8], spin: 380, errorRate: 0.02 },
  },
  {
    id: 'legend',
    name: 'Legend',
    bot: 'ZERO',
    skill: 1,
    tagline: 'Lightning reflexes. Still human... barely.',
    color: '#ff4d3a',
    hex: 0xff4d3a,
    reaction: 0.095,
    maxSpeed: 3.9,
    accel: 22,
    readNoise: 0.22,
    aimError: 0.075,
    speed: [11.5, 17.5],
    topspin: [360, 620],
    sidespin: 250,
    chopChance: 0.1,
    smashChance: 0.9,
    dropChance: 0.1,
    errorRate: 0.025,
    quality: [0.8, 0.12],
    cornerBias: 0.85,
    preferHeight: 1.15,
    reach: 1.05,
    serve: { speed: [6, 8.6], spin: 470, errorRate: 0.015 },
  },
];

export const MATCH_LENGTHS = [
  { id: 1, label: 'Single game' },
  { id: 2, label: 'Best of 3' },
  { id: 3, label: 'Best of 5' },
];
