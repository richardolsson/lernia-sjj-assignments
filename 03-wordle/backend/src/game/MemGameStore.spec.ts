import MemGameStore from "./MemGameStore";
import { IWordRandomizer } from "./types";

describe('MemGameStore', () => {
  describe('createGame()', () => {
    it('returns game with random ID', () => {
      const randomizer: jest.Mocked<IWordRandomizer> = {
        getRandomWord: jest.fn().mockReturnValue('hello'),
      }

      const store = new MemGameStore(randomizer);
      const game1 = store.createGame(5, true);
      const game2 = store.createGame(5, true);

      expect(game1).toMatchObject({
        wordLength: 5,
        allowDuplicates: true,
      });

      expect(game2).toMatchObject({
        wordLength: 5,
        allowDuplicates: true,
      });

      expect(game1.id).not.toEqual(game2.id);
    });
  });

  describe('findGameById()', () => {
    it('finds game after creating it', () => {
      const randomizer: jest.Mocked<IWordRandomizer> = {
        getRandomWord: jest.fn().mockReturnValue('hello'),
      }

      const store = new MemGameStore(randomizer);
      const game = store.createGame(5, true);

      const foundGame = store.findGameById(game.id);
      expect(foundGame).toEqual(game);
    });
  });
});