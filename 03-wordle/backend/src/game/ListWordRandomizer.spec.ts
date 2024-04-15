import ListWordRandomizer from "./ListWordRandomizer";

describe('ListWordRandomizer', () => {
  describe('getRandomWord()', () => {
    it('returns word from list', () => {
      const randomizer = new ListWordRandomizer(['hello']);
      const word = randomizer.getRandomWord(5, true);

      expect(word).toBe('hello');
    });

    it('returns different words every time', () => {
      const randomizer = new ListWordRandomizer([
        'hello', 'grade', 'bikes', 'codes',
      ]);

      const words = [
        randomizer.getRandomWord(5, true),
        randomizer.getRandomWord(5, true),
        randomizer.getRandomWord(5, true),
        randomizer.getRandomWord(5, true),
        randomizer.getRandomWord(5, true),
        randomizer.getRandomWord(5, true),
        randomizer.getRandomWord(5, true),
        randomizer.getRandomWord(5, true),
        randomizer.getRandomWord(5, true),
        randomizer.getRandomWord(5, true),
      ];

      const wordSet = new Set(words);

      expect(wordSet.size).not.toBe(1);
    });

    it('returns word with correct length', () => {
      const randomizer = new ListWordRandomizer([
        'a', 'ab', 'abc', 'abcd', 'abcde',
      ]);

      const word = randomizer.getRandomWord(5, true);
      expect(word).toBe('abcde');
    });

    it('returns words with unique characters when allowDuplicates=false', () => {
      const randomizer = new ListWordRandomizer([
        'aaaa', 'bbbb', 'cccc', 'dddd', 'abcd'
      ]);

      const word = randomizer.getRandomWord(4, false);
      expect(word).toBe('abcd');
    });
  });
});