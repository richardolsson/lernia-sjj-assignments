import { IWordRandomizer } from './types';

export default class ListWordRandomizer implements IWordRandomizer {
  private _list: string[];

  constructor(list: string[]) {
    this._list = list;
  }

  getRandomWord(wordLength: number, allowDuplicates: boolean): string {
    const relevantWords = this._list.filter((word) => {
      if (word.length != wordLength) {
        return false;
      }

      const letters = Array.from(word);
      const letterSet = new Set(letters);
      if (letters.length != letterSet.size) {
        return allowDuplicates;
      }

      return true;
    });

    const index = Math.floor(Math.random() * relevantWords.length);
    return relevantWords[index];
  }
}
