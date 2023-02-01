import { describe, expect, test } from '@jest/globals';

import getRecentReviews from './getRecentReviews.js';

describe('getRecentReviews()', () => {
    test('correct response format', async () => {
        const result = await getRecentReviews();
        expect(Array.isArray(result)).toBeTruthy();
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].comment).not.toBeUndefined();
        expect(result[0].rating).not.toBeUndefined();
    });
});