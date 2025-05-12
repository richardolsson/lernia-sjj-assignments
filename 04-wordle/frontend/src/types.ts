export type GameConfig = {
  wordLength: number;
  allowRepeat: boolean;
};

export type GameInfo = {
  id: number;
  config: GameConfig;
  startTime: string;
  endTime: string | null;
};

export type LetterResult = {
  letter: string;
  result: 'correct' | 'incorrect' | 'misplaced';
};

export type GuessResult = {
  correct: boolean;
  letters: LetterResult[];
};

export type GuessResponse = {
  game: GameInfo;
  guess: GuessResult;
};
