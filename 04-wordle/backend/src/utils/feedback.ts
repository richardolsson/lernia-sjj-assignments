import { LetterResult } from '../types';

export default function feedback(
  guess: string,
  correctWord: string,
): LetterResult[] {
  if (guess.length != correctWord.length) {
    throw new Error('Word length mismatch');
  }

  const lettersFromCorrectWord = Array.from(correctWord).map((letter) => ({
    letter: letter.toUpperCase(),
    used: false,
  }));

  const result: LetterResult[] = Array.from(guess).map((guessLetter, index) => {
    const correctLetter = lettersFromCorrectWord[index].letter;
    const correct = guessLetter.toUpperCase() == correctLetter;

    lettersFromCorrectWord[index].used = correct;

    return {
      letter: guessLetter,
      result: correct ? 'correct' : 'incorrect',
    };
  });

  result.forEach((item, i) => {
    if (item.result == 'incorrect') {
      const otherIndex = lettersFromCorrectWord.findIndex(
        (otherItem) =>
          otherItem.letter == item.letter.toUpperCase() && !otherItem.used,
      );

      if (otherIndex >= 0) {
        lettersFromCorrectWord[otherIndex].used = true;
        result[i].result = 'misplaced';
      }
    }
  });

  return result;
}
