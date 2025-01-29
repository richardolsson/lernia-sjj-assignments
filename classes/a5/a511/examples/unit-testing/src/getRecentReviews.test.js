import { describe, expect, it, jest } from '@jest/globals';

import getRecentReviews from './getRecentReviews.js';

describe('getRecentReviews()', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('returns empty array', async () => {
    jest.setSystemTime(new Date(2024, 3, 16));
    const cmsAdapter = {
      loadAllReviews: async () => [],
    }

    const reviews = await getRecentReviews(cmsAdapter);
    expect(reviews).toHaveLength(0);
  });

  it('returns reviews with rating >= 3', async () => {
    jest.setSystemTime(new Date(2024, 3, 16));

    const rated5 = mockReview({ rating: 5 });
    const rated4 = mockReview({ rating: 4 });
    const rated3 = mockReview({ rating: 3 });

    const cmsAdapter = {
      loadAllReviews: async () => [
        rated5,
        rated4,
        rated3,
        mockReview({
          rating: 2,
        }),
        mockReview({
          rating: 1,
        }),
      ],
    };

    const reviews = await getRecentReviews(cmsAdapter);
    expect(reviews).toHaveLength(3);
    expect(reviews).toContainEqual(rated5);
    expect(reviews).toContainEqual(rated4);
    expect(reviews).toContainEqual(rated3);
  });

  it('returns nothing if there are not enough recent positive reviews', async () => {
    jest.setSystemTime(new Date(2024, 3, 16));
    const cmsAdapter = {
      loadAllReviews: async () => [
        mockReview({ rating: 4 }),
        mockReview({ rating: 3 }),
        mockReview({ rating: 2 }),
        mockReview({ rating: 1 }),
      ],
    };

    const reviews = await getRecentReviews(cmsAdapter);
    expect(reviews).toHaveLength(0);
  });

  it('excludes old reviews, more than 60 days', async () => {
    jest.setSystemTime(new Date(2025, 1, 16));
    const cmsAdapter = {
      loadAllReviews: async () => [
        mockReview({ rating: 5, createdAt: '2024-10-30' }),
        mockReview({ rating: 5, createdAt: '2025-01-15' }),
        mockReview({ rating: 5, createdAt: '2025-01-15' }),
        mockReview({ rating: 5, createdAt: '2025-01-15' }),
      ],

    };

    const reviews = await getRecentReviews(cmsAdapter);
    expect(reviews).toHaveLength(3);
  });
});

function mockReview(overrides) {
  return {
    id: 1,
    attributes: {
      comment: 'Great!',
      rating: 5,
      author: 'Richard',
      verified: true,
      createdAt: '2024-03-21T13:37:00.000Z',
      updatedAt: '2024-03-21T13:37:00.000Z',
      ...overrides
    },
  }
}