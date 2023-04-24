export type Game = {
  id: string;
  correctWord: string;
  guesses: string[];
  startTime: Date;
  endTime: Date | null;
  wordLength: number;
  allowRepeating: boolean;
}

export type HighscoreEntry = Game & {
  name: string;
  endTime: Date;
}