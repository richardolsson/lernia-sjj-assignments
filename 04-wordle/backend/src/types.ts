export type Game = {
  id: string;
  correctWord: string;
  guesses: string[];
}

export type HighscoreEntry = Game & {
  name: string;
}