import { LetterFeedback, LetterResult } from "../types";

export default function feedback(
  correctWord: string,
  guess: string
): LetterFeedback[] {
  const correctLetters = Array.from(correctWord).map((letter, index) => ({
    letter,
    index,
    consumed: false,
  }));

  const preliminary: LetterFeedback[] = Array.from(guess).map(
    (letter, index) => {
      const correctLetter = correctWord.charAt(index);

      let result: LetterResult =
        correctLetter == letter ? LetterResult.CORRECT : LetterResult.INCORRECT;

      if (result == LetterResult.CORRECT) {
        correctLetters[index].consumed = true;
      }

      return {
        letter,
        result,
      };
    }
  );

  return preliminary.map((letterResult, index) => {
    if (letterResult.result == LetterResult.INCORRECT) {
      const other = correctLetters.find(
        (l) =>
          l.index != index && l.letter == letterResult.letter && !l.consumed
      );

      if (other) {
        other.consumed = true;
        return {
          letter: letterResult.letter,
          result: LetterResult.MISPLACED,
        };
      }
    }

    return letterResult;
  });
}
