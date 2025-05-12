export type GameConfig = {
  wordLength: number;
  allowRepeat: boolean;
};

export type GameInfo = {
  id: number;
};

export interface IDbAdapter {
  createGame(config: GameConfig): Promise<GameInfo>;
  submitGuess(gameId: number, guess: string): Promise<void>;
  submitHighscore(gameId: number, name: string): Promise<void>;
}
