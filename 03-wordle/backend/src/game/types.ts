export type Game = {
  id: string;
  correctWord: string;
  wordLength: number;
  allowDuplicates: boolean;
};

export interface IGameStore {
  createGame(wordLength: number, allowDuplicates: boolean): Game;
}

export interface IWordRandomizer {
  getRandomWord(wordLength: number, allowDuplicates: boolean): string;
}
