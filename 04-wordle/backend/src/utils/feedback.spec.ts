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

  test('abc + cba => misplaced, correct, misplaced', () => {
    const result = feedback('abc', 'cba');
    expect(result).toEqual([
      {
        letter: 'a',
        result: 'misplaced',
      },
      {
        letter: 'b',
        result: 'correct',
      },
      {
        letter: 'c',
        result: 'misplaced',
      },
    ]);
  });

  test('abb + abc => correct, correct, incorrect', () => {
    const result = feedback('abb', 'abc');
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
        letter: 'b',
        result: 'incorrect',
      },
    ]);
  });

  test('baa + abb => misplaced, misplaced, incorrect', () => {
    const result = feedback('baa', 'abb');
    expect(result).toEqual([
      {
        letter: 'b',
        result: 'misplaced',
      },
      {
        letter: 'a',
        result: 'misplaced',
      },
      {
        letter: 'a',
        result: 'incorrect',
      },
    ]);
  });

  test('hallå + cykla => incorrect, misplaced, incorrect, correct, incorrect', () => {
    const result = feedback('hallå', 'cykla');
    expect(result).toEqual([
      {
        letter: 'h',
        result: 'incorrect',
      },
      {
        letter: 'a',
        result: 'misplaced',
      },
      {
        letter: 'l',
        result: 'incorrect',
      },
      {
        letter: 'l',
        result: 'correct',
      },
      {
        letter: 'å',
        result: 'incorrect',
      },
    ]);
  });
});