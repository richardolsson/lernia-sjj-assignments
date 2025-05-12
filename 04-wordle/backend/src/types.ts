export type LetterResult = {
  letter: string;
  result: 'correct' | 'incorrect' | 'misplaced';
};

export type GuessResult = {
  correct: boolean;
  letters: LetterResult[];
};
