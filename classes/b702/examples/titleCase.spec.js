import { describe, expect, it } from '@jest/globals';
import titleCase from './titleCase';

describe('titleCase()', () => {
  it('capitalizes all words in the sentence "All my friends"', () => {
    const result = titleCase('all my friends');
    expect(result).toBe('All My Friends');
  });

  it('excludes some words, e.g. "of" and "the"', () => {
    const result = titleCase('lord of the rings');
    expect(result).toBe('Lord of the Rings');
  });

  it('always starts with a capital letter', () => {
    const result = titleCase('of mice and men');
    expect(result).toBe('Of Mice and Men');
  });
});