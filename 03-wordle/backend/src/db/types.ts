import { Game } from "../game/types";

export interface IDbAdapter {
  saveHighscore(name: string, game: Game): Promise<void>;
}