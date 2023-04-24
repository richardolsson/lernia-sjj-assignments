import { describe, expect, test } from '@jest/globals';
import feedback from './feedback';

describe('feedback()', () => {
  test('abc + abc => correct, correct, correct', () => {
    const result = feedback('abc', 'abc');
    expect(result).toEqual([
      {
        letter: 'a',
        result: 'correct',
      },
      {
        letter: 'b',
        result: 'correct',
      },
      {
        letter: 'c',
        result: 'correct',
      },
    ]);
  });

  test('abc + def => incorrect, incorrect, incorrect', () => {
    const result = feedback('abc', 'def');
    expect(result).toEqual([
      {
        letter: 'a',
        result: 'incorrect',
      },
      {
        letter: 'b',
        result: 'incorrect',
      },
      {
        letter: 'c',
        result: 'incorrect',
      },
    ]);
  });

  test('abc + ABC => correct, correct, correct', () => {
    const result = feedback('abc', 'ABC');
    expect(result).toEqual([
      {
        letter: 'a',
        result: 'correct',
      },
      {
        letter: 'b',
        result: 'correct',
      },
      {
        letter: 'c',
        result: 'correct',
      },
    ]);
  });
});