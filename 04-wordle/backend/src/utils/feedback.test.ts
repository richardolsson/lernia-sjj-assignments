import feedback from './feedback';

describe('feedback()', () => {
  it('returns empty array when words are empty', () => {
    const result = feedback('', '');
    expect(result).toEqual([]);
  });

  it('throws error when words are different lengths', () => {
    expect(() => {
      feedback('alongword', 'short');
    }).toThrow();
  });

  it('ignores case', () => {
    const result = feedback('AbC', 'aBc');
    expect(result).toEqual([
      { letter: 'A', result: 'correct' },
      { letter: 'b', result: 'correct' },
      { letter: 'C', result: 'correct' },
    ]);
  });

  it('returns correct for all correct letters', () => {
    const result = feedback('abc', 'abc');
    expect(result).toEqual([
      { letter: 'a', result: 'correct' },
      { letter: 'b', result: 'correct' },
      { letter: 'c', result: 'correct' },
    ]);
  });

  it('returns incorrect for incorrect letters', () => {
    const result = feedback('xbx', 'abc');
    expect(result).toEqual([
      { letter: 'x', result: 'incorrect' },
      { letter: 'b', result: 'correct' },
      { letter: 'x', result: 'incorrect' },
    ]);
  });

  it('returns misplaced for misplaced letters', () => {
    const result = feedback('cba', 'abc');
    expect(result).toEqual([
      { letter: 'c', result: 'misplaced' },
      { letter: 'b', result: 'correct' },
      { letter: 'a', result: 'misplaced' },
    ]);
  });

  it('returns incorrect for misplaced letter that is already used', () => {
    const result = feedback('bbb', 'abc');
    expect(result).toEqual([
      { letter: 'b', result: 'incorrect' },
      { letter: 'b', result: 'correct' },
      { letter: 'b', result: 'incorrect' },
    ]);
  });
});
