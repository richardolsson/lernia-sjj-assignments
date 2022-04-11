enum Result {
  CORRECT = "correct",
  INCORRECT = "incorrect",
  MISPLACED = "misplaced",
}

type LetterResult = {
  letter: string;
  result: Result;
};

export default function feedback(
  correctWord: string,
  guess: string
): LetterResult[] {
  const correctLetters = Array.from(correctWord).map((letter, index) => ({
    letter,
    index,
    consumed: false,
  }));

  const preliminary: LetterResult[] = Array.from(guess).map((letter, index) => {
    const correctLetter = correctWord.charAt(index);

    let result: Result =
      correctLetter == letter ? Result.CORRECT : Result.INCORRECT;

    if (result == Result.CORRECT) {
      correctLetters[index].consumed = true;
    }

    return {
      letter,
      result,
    };
  });

  return preliminary.map((letterResult, index) => {
    if (letterResult.result == Result.INCORRECT) {
      const other = correctLetters.find(
        (l) =>
          l.index != index && l.letter == letterResult.letter && !l.consumed
      );

      if (other) {
        other.consumed = true;
        return {
          letter: letterResult.letter,
          result: Result.MISPLACED,
        };
      }
    }

    return letterResult;
  });
}
