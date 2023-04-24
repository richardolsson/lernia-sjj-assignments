import { describe, expect, test } from '@jest/globals';
import getRandomWord from './getRandomWord';

describe('getRandomWord()', () => {
  const wordList = ['hello', 'class', 'lesson'];

  test('returns a word from list', () => {
    const word = getRandomWord(5, true, wordList);
    expect(wordList.includes(word)).toBeTruthy();
  });

  test('returns different (random) words each run', () => {
    const words: string[] = [];
    for (let i = 0; i < 100; i++) {
      words.push(getRandomWord(5, true, wordList));
    }

    expect(words.filter(word => word == wordList[0]).length).toBeGreaterThan(0);
    expect(words.filter(word => word == wordList[1]).length).toBeGreaterThan(0);
  });

  test('returns word with specified length', () => {
    for (let i = 0; i < 100; i++) {
      const word0 = getRandomWord(5, true, wordList);
      const word1 = getRandomWord(6, true, wordList);

      expect(word0.length).toBe(5);
      expect(word1.length).toBe(6);
    }
  });

  test('returns words with unique characters when allowRepeating = false', () => {
    for (let i = 0; i < 100; i++) {
      const word = getRandomWord(3, false, [
        'abc',
        'abb',
      ]);

      expect(word).toBe('abc');
    }
  });
});