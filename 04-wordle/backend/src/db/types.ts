export type GameConfig = {
  wordLength: number;
  allowRepeat: boolean;
};

export type GameInfo = {
  id: number;
  config: GameConfig;
  correctWord: string;
  startTime: string;
  endTime: string | null;
};

export type HighscoreInfo = {
  id: number;
  game: GameInfo;
  guessCount: number;
  name: string;
};

export type GameInfoInit = Pick<GameInfo, 'config' | 'correctWord'>;

export interface IDbAdapter {
  createGame(game: GameInfoInit): Promise<GameInfo>;
  endGame(gameId: number): Promise<GameInfo>;
  findGame(gameId: number): Promise<GameInfo | null>;
  listHighscores(wordLength?: number): Promise<HighscoreInfo[]>;
  submitGuess(gameId: number, guess: string): Promise<void>;
  submitHighscore(gameId: number, name: string): Promise<number>;
}
