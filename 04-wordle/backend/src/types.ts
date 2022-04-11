export type Game = {
  id: string;
  startTime: Date;
  wordLength: number;
  unique: boolean;
  word: string;
  guesses: LetterFeedback[][];
  endTime?: Date;
};

export enum LetterResult {
  CORRECT = "correct",
  INCORRECT = "incorrect",
  MISPLACED = "misplaced",
}

export type LetterFeedback = {
  letter: string;
  result: LetterResult;
};
