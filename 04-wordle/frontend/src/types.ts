export enum GameState {
  HOME,
  GAME,
  WON,
}

type LetterFeedback = {
  letter: string;
  result: "correct" | "incorrect" | "misplaced";
};

type Guess = LetterFeedback[];

export type Game = {
  id: string;
  wordLength: number;
  unique: boolean;
  guesses: Guess[];
};
