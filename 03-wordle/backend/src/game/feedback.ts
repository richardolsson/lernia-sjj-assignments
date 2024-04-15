type LetterResult = 'correct' | 'incorrect' | 'misplaced';

type LetterObject = {
  letter: string;
  result: LetterResult;
};

export default function feedback(
  correctWord: string,
  guessedWord: string
): LetterObject[] {
  const unusedChars: string[] = [];

  const firstPass = Array.from(guessedWord).map<LetterObject>(
    (guessedLetter, index) => {
      const correctLetter = correctWord.charAt(index);
      let result: LetterResult =
        correctLetter == guessedLetter ? 'correct' : 'incorrect';

      if (result == 'incorrect') {
        unusedChars.push(correctLetter);
      }

      return {
        letter: guessedLetter,
        result: result,
      };
    }
  );

  return firstPass.map((obj) => {
    let result = obj.result;
    const index = unusedChars.indexOf(obj.letter);
    if (result == 'incorrect' && index >= 0) {
      result = 'misplaced';
      unusedChars.splice(index, 1);
    }

    return {
      ...obj,
      result,
    };
  });
}
