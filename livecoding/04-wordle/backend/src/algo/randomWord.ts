export default function randomWord(
  words: string[],
  wordLength: number,
  allowRepeat: boolean
): string {
  const eligibleWords = words.filter(word => {
    if (word.length != wordLength) {
      return false;
    }

    return allowRepeat || new Set(word).size == word.length;
  });

  const index = Math.floor(Math.random() * eligibleWords.length);
  const word = eligibleWords[index];


  if (!word) {
    throw new Error('No word found');
  }

  return word;
}