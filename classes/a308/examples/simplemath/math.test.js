import { describe, expect, test } from '@jest/globals';
import { mul } from './math';

describe('mul()', () => {
  test('2 * 2 = 4', () => {
    const result = mul(2, 2);
    expect(result).toBe(4);
  });

  test('3 * 3 = 9', () => {
    const result = mul(3, 3);
    expect(result).toBe(9);
  });

  test('4 * 5 = 20', () => {
    const result = mul(4, 5);
    expect(result).toBe(20);
  });
});