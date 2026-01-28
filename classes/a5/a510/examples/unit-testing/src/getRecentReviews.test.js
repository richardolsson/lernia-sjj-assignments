import { describe, expect, it } from '@jest/globals';
import getRecentReviews from './getRecentReviews';


describe('getRecentReviews()', () => {
  it('returns something', async () => {
    const result = await getRecentReviews({
      loadAllReviews: () => [
        {
          "id": 1599,
          "attributes": {
            "comment": "Scary",
            "rating": 4,
            "author": "Richard",
            "verified": true,
            "createdAt": "2025-03-16T08:23:35.369Z",
            "updatedAt": "2025-03-16T08:23:35.369Z"
          }
        }
      ],
    });

    expect(result).toBeTruthy();
  });
});