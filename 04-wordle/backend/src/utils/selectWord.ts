import { GameConfig } from '../db/types';

export default function selectWord(allWords: string[], config: GameConfig) {
  const matchingWords = allWords.filter((word) => {
    if (word.length != config.wordLength) {
      return false;
    }

    const letterSet = new Set(word.toLowerCase());
    const hasRepeating = letterSet.size != word.length;

    if (!config.allowRepeat && hasRepeating) {
      return false;
    }

    return true;
  });

  const randIndex = Math.floor(Math.random() * matchingWords.length);

  return matchingWords[randIndex] || null;
}
