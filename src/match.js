import { PLAYER, AI, otherSide } from './config.js';

// Official scoring: games to 11, win by 2; service changes every 2 points,
// and every point once the game reaches 10-10 (deuce). The player who served
// first in a game receives first in the next.
export class Match {
  constructor(gamesToWin, firstServer = PLAYER) {
    this.gamesToWin = gamesToWin;
    this.games = { [PLAYER]: 0, [AI]: 0 };
    this.score = { [PLAYER]: 0, [AI]: 0 };
    this.gameFirstServer = firstServer;
    this.over = false;
    this.winner = null;
    this.gameNumber = 1;
    this.history = [];
  }

  get pointsPlayed() {
    return this.score[PLAYER] + this.score[AI];
  }

  get server() {
    const p = this.pointsPlayed;
    const first = this.gameFirstServer;
    const swaps = p < 20 ? Math.floor(p / 2) : 10 + (p - 20);
    return swaps % 2 === 0 ? first : otherSide(first);
  }

  get isDeuce() {
    return this.score[PLAYER] >= 10 && this.score[AI] >= 10;
  }

  // Returns { gameWon: side|null, matchWon: side|null }
  award(side) {
    this.score[side]++;
    const a = this.score[side], b = this.score[otherSide(side)];
    const res = { gameWon: null, matchWon: null };
    if (a >= 11 && a - b >= 2) {
      this.games[side]++;
      this.history.push({ [PLAYER]: this.score[PLAYER], [AI]: this.score[AI] });
      res.gameWon = side;
      if (this.games[side] >= this.gamesToWin) {
        this.over = true;
        this.winner = side;
        res.matchWon = side;
      }
    }
    return res;
  }

  startNextGame() {
    this.score[PLAYER] = 0;
    this.score[AI] = 0;
    this.gameFirstServer = otherSide(this.gameFirstServer);
    this.gameNumber++;
  }

  // Someone is one point from winning the game.
  gamePointFor() {
    for (const s of [PLAYER, AI]) {
      const a = this.score[s], b = this.score[otherSide(s)];
      if (a >= 10 && a - b >= 1) return s;
    }
    return null;
  }

  matchPointFor() {
    const s = this.gamePointFor();
    if (s && this.games[s] === this.gamesToWin - 1) return s;
    return null;
  }
}
