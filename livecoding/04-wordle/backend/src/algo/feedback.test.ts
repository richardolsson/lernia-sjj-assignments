import { describe, expect, it } from '@jest/globals';
import feedback from './feedback';

describe('feedback', () => {
  it('returns all incorrect, when no letters match', () => {
    const result = feedback('aaaa', 'bbbb');
    expect(result).toEqual([
      { letter: 'a', result: 'incorrect' },
      { letter: 'a', result: 'incorrect' },
      { letter: 'a', result: 'incorrect' },
      { letter: 'a', result: 'incorrect' },
    ]);
  });

  it('returns all correct, when all letters match', () => {
    const result = feedback('abcd', 'abcd');
    expect(result).toEqual([
      { letter: 'a', result: 'correct' },
      { letter: 'b', result: 'correct' },
      { letter: 'c', result: 'correct' },
      { letter: 'd', result: 'correct' },
    ]);
  });

  it('returns misplaced when two letters are misplaced', () => {
    const result = feedback('abcd', 'acbd');
    expect(result).toEqual([
      { letter: 'a', result: 'correct' },
      { letter: 'b', result: 'misplaced' },
      { letter: 'c', result: 'misplaced' },
      { letter: 'd', result: 'correct' },
    ]);
  });

  it('handles recurring misplaced characters', () => {
    const result = feedback('hello', 'cycle');
    expect(result).toEqual([
      { letter: 'h', result: 'incorrect' },
      { letter: 'e', result: 'misplaced' },
      { letter: 'l', result: 'incorrect' },
      { letter: 'l', result: 'correct' },
      { letter: 'o', result: 'incorrect' },
    ]);
  });

  it('ignores case', () => {
    const result = feedback('abc', 'ABC');
    expect(result).toEqual([
      { letter: 'a', result: 'correct' },
      { letter: 'b', result: 'correct' },
      { letter: 'c', result: 'correct' },
    ]);
  });

  it('throws error when lengths are different', () => {
    expect(() => feedback('abc', 'ab')).toThrow();
  });
});