import getRecentReviews from './getRecentReviews';

describe('getRecentReviews()', () => {
  test('includes a review with a 3-5 rating', async () => {
    const cmsAdapter = {
      loadAllReviews: async () => ([
        mockReview({ rating: 5 }),
        mockReview({ rating: 4 }),
        mockReview({ rating: 3 }),
      ])
    };

    const data = await getRecentReviews(cmsAdapter);

    expect(data).toHaveLength(3);
  });

  test('excludes a review with a 2 or less rating', async () => {
    const cmsAdapter = {
      loadAllReviews: async () => ([
        mockReview({ rating: 0 }),
        mockReview({ rating: 1 }),
        mockReview({ rating: 2 }),
      ])
    };

    const data = await getRecentReviews(cmsAdapter);

    expect(data).toHaveLength(0);
  });
});

function mockReview(attributes) {
  return {
    id: 2,
    attributes: {
      comment: 'Nice movie',
      rating: 2,
      author: 'Richard',
      verified: true,
      createdAt: '2024-01-01T13:37:00.000Z',
      updatedAt: '2024-01-01T13:37:00.000Z',
      movie: {
        data: {
          id: 2,
          attributes: {
            title: 'Encanto',
            imdbId: 'tt123',
            intro: 'A Colombian teenage girl has to face the frustration of being **the only member of her family** without magical powers.\n\n',
            image: {
              url: 'http://google.com',
            },
            createdAt: '2024-01-23T06:46:24.765Z',
            updatedAt: '2024-01-24T10:52:48.366Z',
            publishedAt: '2024-01-23T06:46:29.324Z'
          },
        },
      },
      ...attributes,
    },
  }
}