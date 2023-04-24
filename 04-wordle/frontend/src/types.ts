export type Game = {
  id: string,
  wordLength: number;
}

export type LetterResult = {
  letter: string;
  result: 'misplaced' | 'correct' | 'incorrect'
}

export type GuessResult = {
  correct: boolean,
  letters: LetterResult[],
}