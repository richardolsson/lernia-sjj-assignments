import selectWord from './selectWord';

describe('selectWord()', () => {
  it('returns null when there is not matching word', () => {
    const result = selectWord([], {
      allowRepeat: true,
      wordLength: 20,
    });

    expect(result).toBeNull();
  });

  it('returns word with matching length', () => {
    const result = selectWord(['ONE', 'TWO', 'THREE', 'FOUR'], {
      allowRepeat: false,
      wordLength: 4,
    });

    expect(result).toEqual('FOUR');
  });

  it('returns only word with unique letters when allowRepeat=false', () => {
    const uniqueResult = selectWord(['THREE', 'EIGHT'], {
      allowRepeat: false,
      wordLength: 5,
    });

    expect(uniqueResult).toEqual('EIGHT');
  });

  it('randomly selects matching word', () => {
    const words = [];
    for (let i = 0; i < 10; i++) {
      words.push(
        selectWord(['ONE', 'TWO', 'SIX', 'TEN'], {
          allowRepeat: true,
          wordLength: 3,
        }),
      );
    }

    const wordSet = new Set(words);
    expect(wordSet.size).not.toEqual(1);
  });
});
