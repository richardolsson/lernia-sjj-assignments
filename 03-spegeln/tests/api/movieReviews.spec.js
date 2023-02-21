import { describe, expect, it, jest } from '@jest/globals';
import request from 'supertest';

import initApp from '../../src/app';
import mockReview from '../../src/testing/mockReview';

describe('/api/movies/ID/reviews', () => {
  describe('GET', () => {
    const app = initApp({
      getAllReviews: async () => [
        mockReview(1, { movieId: 5 }),
        mockReview(2, { movieId: 5 }),
        mockReview(3, { movieId: 5 }),
        mockReview(4, { movieId: 5 }),
        mockReview(5, { movieId: 5 }),
        mockReview(6, { movieId: 5 }),
      ],
    });

    it('returns page of five reviews', async () => {
      const response = await request(app)
        .get('/api/movies/5/reviews?p=0')
        .expect('Content-Type', /json/);

      expect(response.body.data.length).toBe(5);
      expect(response.body.data[0].id).toBe(1);
      expect(response.body.data[4].id).toBe(5);
    });
  });

  describe('POST', () => {
    it('sends review to CMS API', async () => {
      const cms = {
        createMovieReview: jest.fn(async (movieId, review) => {
          return mockReview(1, { movieId: movieId });
        }),
      };

      const app = initApp(cms);

      await request(app)
        .post('/api/movies/5/reviews')
        .send({
          name: 'Richard',
          rating: 4,
          comment: 'Hello',
        })
        .expect(201)
        .expect('Content-Type', /json/);

      expect(cms.createMovieReview).toBeCalledTimes(1);
      expect(cms.createMovieReview).toBeCalledWith(5, {
        author: 'Richard',
        rating: 4,
        comment: 'Hello',
      });
    });
  });
});