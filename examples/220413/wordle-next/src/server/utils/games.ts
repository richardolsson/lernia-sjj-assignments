// This is to emulate a database. In a real project, this
// would be replaced with a real database.

import { Game } from "../types";

declare global {
  var games: Game[];
}

if (!global.games) {
  global.games = [] as Game[];
}

const GAMES = global.games;

export function addGame(game: Game) {
  GAMES.push(game);
}

export function findGame(id: string) {
  return GAMES.find((game) => game.id === id);
}
