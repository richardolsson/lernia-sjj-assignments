export default function getRandomWord(length: number, allowRepeating: boolean, wordList: string[]): string {
  const viableWords = wordList.filter(word => {
    if (word.length != length) {
      return false;
    }

    if (!allowRepeating) {
      const letters = Array.from(word);
      const hasRepeating = letters.some(letter => letters
        .filter(candidate => candidate == letter).length > 1);

      if (hasRepeating) {
        return false;
      }
    }

    return true;
  });

  const index = Math.floor(Math.random() * viableWords.length);
  return viableWords[index];
}