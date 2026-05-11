export type LetterResult = {
  letter: string;
  result: 'incorrect' | 'misplaced' | 'correct';
}

export type WordResult = LetterResult[];