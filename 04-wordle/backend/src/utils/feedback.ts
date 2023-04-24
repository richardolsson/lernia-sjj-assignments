type LetterResult = 'correct' | 'misplaced' | 'incorrect';

type FeedbackResult = {
  letter: string,
  result: LetterResult,
}[];

export default function feedback(guess: string, correctWord: string): FeedbackResult {
  guess = guess.toLowerCase();
  correctWord = correctWord.toLowerCase();

  const leftovers: string[] = [];

  const result = Array.from(guess).map((letter, index) => {
    const letterResult: LetterResult = (letter == correctWord[index])
      ? 'correct' : 'incorrect';

    if (letterResult == 'incorrect') {
      leftovers.push(correctWord[index]);
    }

    return {
      letter,
      result: letterResult,
    };
  });

  return result.map(result => {
    if (result.result == 'incorrect') {
      const leftOverIndex = leftovers.indexOf(result.letter);
      if (leftOverIndex >= 0) {
        leftovers.splice(leftOverIndex, 1);
        return {
          ...result,
          result: 'misplaced',
        };
      }
    }
    return result;
  });
}