export type Game = {
  id: string;
  correctWord: string;
}

export interface IGameStore {
  createGame(wordLength: number, allowDuplicates: boolean): Game;
}