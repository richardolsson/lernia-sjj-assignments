type FeedbackResult = {
  letter: string,
  result: 'correct' | 'misplaced' | 'incorrect',
}[];

export default function feedback(guess: string, correctWord: string): FeedbackResult {
  guess = guess.toLowerCase();
  correctWord = correctWord.toLowerCase();

  return Array.from(guess).map((letter, index) => {
    return {
      letter: letter,
      result: letter == correctWord[index]
        ? 'correct' : 'incorrect',
    };
  });
}