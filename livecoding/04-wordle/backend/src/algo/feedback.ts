type LetterResult = {
  letter: string;
  result: 'incorrect' | 'misplaced' | 'correct';
}

export default function feedback(guess: string, correctWord: string): LetterResult[] {
  const output: LetterResult[] = [];
  const unusedLetters: string[] = [];

  if (guess.length != correctWord.length) {
    throw new Error('Words are different lengths');
  }

  guess = guess.toLowerCase();
  correctWord = correctWord.toLowerCase();

  Array.from(guess).forEach((letter, index) => {
    const correctLetter = correctWord[index];
    const isCorrect = letter == correctLetter;
    output[index] = { letter, result: isCorrect ? 'correct' : 'incorrect' };

    if (!isCorrect && correctLetter) {
      unusedLetters.push(correctLetter);
    }
  });

  return output.map(result => {
    const letterResult = { ...result };

    if (letterResult.result == 'incorrect') {
      const unusedIndex = unusedLetters.indexOf(letterResult.letter);
      if (unusedIndex >= 0) {
        letterResult.result = 'misplaced';
        unusedLetters.splice(unusedIndex, 1);
      }
    }

    return letterResult;
  });
}