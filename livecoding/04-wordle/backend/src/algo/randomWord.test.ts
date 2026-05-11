import { describe, expect, it } from '@jest/globals';
import randomWord from './randomWord';

describe('randomWord()', () => {
  it('picks word from list', () => {
    const word = randomWord(['hello'], 5, true);
    expect(word).toEqual('hello');
  });

  it('does not pick the same word every time', () => {
    const wordSet = new Set<string>();
    for (let i = 0; i < 100; i++) {
      const word = randomWord(['hello', 'cycle'], 5, true);
      wordSet.add(word);
    }

    expect(wordSet.size).toBe(2);
  });

  it('chooses from words with correct length', () => {
    for (let i = 0; i < 100; i++) {
      const word = randomWord(['hello', 'halo'], 5, true);
      expect(word).toBe('hello');
    }
  });

  it('chooses from words that meet allowRepeat criteria', () => {
    for (let i = 0; i < 100; i++) {
      const word = randomWord(['hello', 'grand'], 5, false);
      expect(word).toBe('grand');
    }
  });
});