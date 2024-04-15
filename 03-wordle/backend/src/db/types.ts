import { Game } from "../game/types";

export type Highscore = {
  allowDuplicates: boolean;
  wordLength: number;
  name: string;
  duration: number;
  guessCount: number;
}

export interface IDbAdapter {
  saveHighscore(name: string, game: Game): Promise<void>;
  getHighscores(): Promise<Highscore[]>
}