import { Game } from "./app";

/* NOTE! This is not an actual database connection. It's just a module
 * that exports some functions that stores data in memory. In a real app
 * the code in this module would be replaced with some sort of database
 * connection, but that's not important for the purpose of this example.
 */

type Highscore = Game & {
  name: string;
  endTime: Date;
};

const HIGHSCORES: Highscore[] = [];

export async function saveHighscore(highscore: Highscore) {
  HIGHSCORES.push(highscore);
  return highscore;
}

export async function loadHighscores() {
  return HIGHSCORES;
}
