import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals';
import getRecentReviews from './getRecentReviews';


describe('getRecentReviews()', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-01-20T14:00:00Z'));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('returns [] if there are no reviews', async () => {
    const result = await getRecentReviews({
      loadAllReviews: () => []
    });

    expect(result).toEqual([]);
  });

  it('excludes reviews with rating < 3', async () => {
    const result = await getRecentReviews({
      loadAllReviews: () => [
        mockReview(1, {
          rating: 1,
        }),
        mockReview(2, {
          rating: 4,
        }),
        mockReview(3, {
          rating: 4,
        }),
        mockReview(4, {
          rating: 4,
        })
      ]
    });

    expect(result).toHaveLength(3);
    expect(result[0].id).toEqual(2);
    expect(result[1].id).toEqual(3);
    expect(result[2].id).toEqual(4);
  });

  it('excludes reviews older than 60 days', async () => {
    const result = await getRecentReviews({
      loadAllReviews: () => [
        mockReview(1, {
          rating: 5,
          createdAt: '2025-06-01T13:37:00Z',
        }),
        mockReview(2, {
          rating: 5,
          createdAt: '2026-01-01T13:37:00Z',
        }),
        mockReview(3, {
          rating: 5,
          createdAt: '2026-01-01T13:37:00Z',
        }),
        mockReview(4, {
          rating: 5,
          createdAt: '2026-01-01T13:37:00Z',
        }),
      ],
    });

    expect(result).toHaveLength(3);
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(3);
    expect(result[2].id).toBe(4);
  });

  it('returns [] if there are less than 3 relevant reviews', async () => {
    const result = await getRecentReviews({
      loadAllReviews: () => [
        mockReview(1, {
          rating: 5,
        }),
        mockReview(2, {
          rating: 5,
        }),
      ]
    });

    expect(result).toEqual([]);
  });
});

function mockReview(id = 1, attributes = {}) {
  return {
    "id": id,
    "attributes": {
      "comment": "Scary",
      "rating": 4,
      "author": "Richard",
      "verified": true,
      "createdAt": "2026-01-16T08:23:35.369Z",
      "updatedAt": "2026-01-16T08:23:35.369Z",
      ...attributes
    },
  };
}