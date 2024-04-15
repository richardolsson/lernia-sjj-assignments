export type LetterData = {
  letter: string;
  result: 'correct' | 'incorrect' | 'misplaced';
};

export type Guess = LetterData[];
