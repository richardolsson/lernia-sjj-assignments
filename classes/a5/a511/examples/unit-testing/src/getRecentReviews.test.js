import { describe, expect, it, jest } from '@jest/globals';

import getRecentReviews from './getRecentReviews.js';

describe('getRecentReviews()', () => {
  it('returns empty array', async () => {
    const cmsAdapter = {
      loadAllReviews: async () => [],
    }

    const reviews = await getRecentReviews(cmsAdapter);
    expect(reviews).toHaveLength(0);
  });
});