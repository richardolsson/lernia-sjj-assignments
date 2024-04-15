import { Game, IGameStore, IWordRandomizer } from "./types";
import * as uuid from 'uuid';

export default class MemGameStore implements IGameStore {
  private _games: Game[] = [];
  private _randomizer: IWordRandomizer;

  constructor(randomizer: IWordRandomizer) {
    this._randomizer = randomizer;
  }

  createGame(wordLength: number, allowDuplicates: boolean): Game {
    const game = {
      wordLength,
      allowDuplicates,
      correctWord: this._randomizer.getRandomWord(wordLength, allowDuplicates),
      id: uuid.v4(),
    }

    this._games.push(game);

    return game;
  }

  findGameById(id: string): Game | null{
    return this._games.find(game => game.id == id) || null;
  }
}