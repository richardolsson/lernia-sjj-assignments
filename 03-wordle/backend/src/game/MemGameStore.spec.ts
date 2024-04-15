import MemGameStore from "./MemGameStore";

describe('MemGameStore', () => {
  describe('createGame()', () => {
    it('returns game with random ID', () => {
      const store = new MemGameStore();
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
});