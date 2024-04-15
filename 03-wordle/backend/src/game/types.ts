export type Game = {
  id: string;
  correctWord: string;
  wordLength: number,
  allowDuplicates: boolean,
}

export interface IGameStore {
  createGame(wordLength: number, allowDuplicates: boolean): Game;
}