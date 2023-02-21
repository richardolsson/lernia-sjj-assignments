import { describe, expect, it, jest } from '@jest/globals';
import mockReview from '../testing/mockReview';

import mockScreening from '../testing/mockScreening';
import MovieResource from './MovieResource';

describe('MovieResource', () => {
  describe('retrieveAverageRating', () => {
    it('returns average of reviews', async () => {
      const resource = new MovieResource(1, {
        getAllReviews: async () => [
          mockReview(1, { movieId: 1, rating: 0 }),
          mockReview(2, { movieId: 1, rating: 0 }),
          mockReview(3, { movieId: 1, rating: 0 }),
          mockReview(4, { movieId: 1, rating: 5 }),
          mockReview(5, { movieId: 1, rating: 5 }),
        ],
      });

      const result = await resource.retrieveAverageRating();
      expect(result).toMatchObject({
        rating: 2,
        source: 'reviews',
      });
    });
  });


  describe('retrieveReviews(page)', () => {
    it('returns only reviews for specific movie', async () => {
      const resource = new MovieResource(1, {
        getAllReviews: async () => [
          mockReview(1, { movieId: 1 }),
          mockReview(2, { movieId: 1 }),
          mockReview(3, { movieId: 100 }),
        ],
      });

      const result = await resource.retrieveReviews(0);
      expect(result.length).toBe(2);
      expect(result[0].id).toBe(1);
      expect(result[1].id).toBe(2);
    });

    it('returns five first reviews on page 0', async () => {
      const resource = new MovieResource(1, {
        getAllReviews: async () => [
          mockReview(1, { movieId: 1 }),
          mockReview(2, { movieId: 1 }),
          mockReview(3, { movieId: 1 }),
          mockReview(4, { movieId: 1 }),
          mockReview(5, { movieId: 1 }),
          mockReview(6, { movieId: 1 }),
        ],
      });

      const result = await resource.retrieveReviews(0);
      expect(result.length).toBe(5);
      expect(result[0].id).toBe(1);
      expect(result[4].id).toBe(5);
    });

    it('returns secod batch of five reviews on page 1', async () => {
      const resource = new MovieResource(1, {
        getAllReviews: async () => [
          mockReview(1, { movieId: 1 }),
          mockReview(2, { movieId: 1 }),
          mockReview(3, { movieId: 1 }),
          mockReview(4, { movieId: 1 }),
          mockReview(5, { movieId: 1 }),
          mockReview(6, { movieId: 1 }),
          mockReview(7, { movieId: 1 }),
          mockReview(8, { movieId: 1 }),
        ],
      });

      const result = await resource.retrieveReviews(1);
      expect(result.length).toBe(3);
      expect(result[0].id).toBe(6);
      expect(result[2].id).toBe(8);
    });
  });

  describe('retrieveScreenings()', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2023-02-21T13:50:00.000Z'));
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

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

    it('returns only upcoming screenings', async () => {
      const resource = new MovieResource(1, {
        getAllScreenings: async () => [
          mockScreening(1, { movieId: 1, startTime: '2023-02-20T13:37:00.000Z' }),
          mockScreening(2, { movieId: 1, startTime: '2023-02-22T13:37:00.000Z' }),
          mockScreening(3, { movieId: 1, startTime: '2023-02-28T13:37:00.000Z' }),
        ]
      });

      const result = await resource.retrieveScreenings();
      expect(result.length).toBe(2);
      expect(result[0].id).toBe(2);
      expect(result[1].id).toBe(3);
    });
  });
});