import feedback from "./feedback";

describe('feedback()', () => {
  it('returns empty array for empty string', () => {
    const result = feedback('', '');
    expect(result).toEqual([]);
  });

  it('returns correct when all letters are correct', () => {
    const result = feedback('abc', 'abc');
    expect(result).toEqual([
      { letter: 'a', result: 'correct' },
      { letter: 'b', result: 'correct' },
      { letter: 'c', result: 'correct' },
    ]);
  });

  it('returns incorrect when letters are completely unmatched', () => {
    const result = feedback('def', 'abc');
    expect(result).toEqual([
      { letter: 'a', result: 'incorrect' },
      { letter: 'b', result: 'incorrect' },
      { letter: 'c', result: 'incorrect' },
    ]);
  });

  it('returns misplaced when letters are misplaced', () => {
    const result = feedback('bca', 'abc');
    expect(result).toEqual([
      { letter: 'a', result: 'misplaced' },
      { letter: 'b', result: 'misplaced' },
      { letter: 'c', result: 'misplaced' },
    ]);
  });

  it('correctly handles hello + cycle', () => {
    const result = feedback('cycle', 'hello');
    expect(result).toEqual([
      { letter: 'h', result: 'incorrect' },
      { letter: 'e', result: 'misplaced' },
      { letter: 'l', result: 'incorrect' },
      { letter: 'l', result: 'correct' },
      { letter: 'o', result: 'incorrect' },
    ]);
  });

  it('correctly handles recurring misplaced characters', () => {
    const result = feedback('abc', 'xaa');
    expect(result).toEqual([
      { letter: 'x', result: 'incorrect' },
      { letter: 'a', result: 'misplaced' },
      { letter: 'a', result: 'incorrect' },
    ]);
  });
});
