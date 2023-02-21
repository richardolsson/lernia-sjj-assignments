import { describe, expect, it, jest } from '@jest/globals';

import mockScreening from '../testing/mockScreening';
import MovieResource from './MovieResource';

describe('MovieResource', () => {
  describe('retrieveScreenings()', () => {
    it('returns only screenings for specific movie', async () => {
      const resource = new MovieResource(12, {
        getAllScreenings: async () => [
          mockScreening(1, { movieId: 11 }),
          mockScreening(2, { movieId: 12 }),
          mockScreening(3, { movieId: 13 }),
        ]
      });

      const result = await resource.retrieveScreenings();
      expect(result.length).toBe(1);
      expect(result[0].id).toBe(2);
    });
  });
});