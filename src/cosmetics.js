// Things you can unlock and pick in the Locker: paddle colours and arena
// colour themes. Each one is earned by beating an opponent on the ladder or
// by a milestone (a long rally, lots of PERFECT hits in one match).
//   req: { beat: '<opponent id>' } | { rally: n } | { perfects: n } | null

export const PADDLES = [
  { id: 'red', name: 'Classic Red', hex: 0xd81b3c, req: null },
  { id: 'ice', name: 'Ice', hex: 0x2aa6ff, req: { beat: 'pip' } },
  { id: 'lime', name: 'Lime', hex: 0x5fd61e, req: { beat: 'echo' } },
  { id: 'blaze', name: 'Blaze', hex: 0xff6412, req: { beat: 'blaze' } },
  { id: 'violet', name: 'Violet', hex: 0x9440ff, req: { beat: 'vortex' } },
  { id: 'gold', name: 'Champion Gold', hex: 0xf2b416, req: { beat: 'zero' } },
  { id: 'pink', name: 'Neon Pink', hex: 0xff2ba6, req: { rally: 20 } },
  { id: 'ghost', name: 'Ghost', hex: 0xd9dbe8, req: { perfects: 10 } },
];

// Arena themes: the neon colours of the floor grid, light pillars, rings,
// beams, table trim, net tape and screens, plus the sky and haze. All stay as
// dark as the original Neon Night; only the hues change.
//   c1/c2 = the two main neons, c3/c4 = accents, bg = sky, fog = haze
export const ARENAS = [
  { id: 'neon', name: 'Neon Night', c1: 0xff2bd6, c2: 0x00f0ff, c3: 0x8a2bff, c4: 0xffe600, bg: 0x05020d, fog: 0x0a0420, req: null },
  { id: 'ember', name: 'Ember', c1: 0xff3a1a, c2: 0xffa224, c3: 0xb3123a, c4: 0xffd43a, bg: 0x090204, fog: 0x160507, req: { beat: 'blaze' } },
  { id: 'deep', name: 'Deep Sea', c1: 0x2a5bff, c2: 0x14e0c0, c3: 0x3b22d6, c4: 0x7fd8ff, bg: 0x01040c, fog: 0x031024, req: { rally: 20 } },
  { id: 'toxic', name: 'Toxic', c1: 0x9d2bff, c2: 0x55ff2e, c3: 0x4a0f8a, c4: 0xd2ff2a, bg: 0x030805, fog: 0x06130a, req: { perfects: 10 } },
];

export function describeReq(req, opponents) {
  if (!req) return 'Starter';
  if (req.beat) return `Beat ${opponents.find((o) => o.id === req.beat).bot}`;
  if (req.rally) return `${req.rally}-shot rally`;
  if (req.perfects) return `${req.perfects} PERFECTs in a match`;
  return '';
}

export function meetsReq(req, progress) {
  if (!req) return true;
  if (req.beat) return !!progress.beaten[req.beat];
  if (req.rally) return progress.records.rally >= req.rally;
  if (req.perfects) return progress.records.perfects >= req.perfects;
  return false;
}
