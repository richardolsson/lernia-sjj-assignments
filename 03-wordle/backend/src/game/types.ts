export type Game = {
  id: string;
  correctWord: string;
  wordLength: number;
  allowDuplicates: boolean;
  startTime: Date;
  endTime: Date | null;
  guesses: string[];
};

export interface IGameStore {
  createGame(wordLength: number, allowDuplicates: boolean): Game;
  findGameById(id: string): Game | null;
}

export interface IWordRandomizer {
  getRandomWord(wordLength: number, allowDuplicates: boolean): string;
}
