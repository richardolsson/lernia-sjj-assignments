import { Game, IGameStore } from "./types";
import * as uuid from 'uuid';

export default class MemGameStore implements IGameStore {
  private _games: Game[] = [];

  createGame(wordLength: number, allowDuplicates: boolean): Game {
    const game = {
      wordLength,
      allowDuplicates,
      correctWord: 'foo',
      id: uuid.v4(),
    }

    this._games.push(game);

    return game;
  }
}