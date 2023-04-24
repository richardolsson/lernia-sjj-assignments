export type Game = {
  id: string,
  wordLength: number;
}

export type GuessResult = {
  correct: boolean,
  letters: {
    letter: string;
    result: 'misplaced' | 'correct' | 'incorrect'
  }[],
}