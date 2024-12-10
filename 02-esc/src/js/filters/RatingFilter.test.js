import { describe, expect, it } from '@jest/globals';
import mockChallengeData from '../testing/mockChallengeData';
import RatingFilter from './RatingFilter';
import Challenge from '../Challenge';

describe('RatingFilter', () => {
  describe('doesChallengeMatch()', () => {
    it('returns true when undefined', () => {
      const data = mockChallengeData();
      const filter = new RatingFilter();
      const result = filter.doesChallengeMatch(new Challenge(data));
      expect(result).toBe(true);
    });

    it('returns false when rating is below minimum', () => {
      const data = new mockChallengeData({ rating: 2 });
      const filter = new RatingFilter(3, 5);
      const result = filter.doesChallengeMatch(new Challenge(data));
      expect(result).toBe(false);
    });

    it('returns false when rating is above maximum', () => {
      const data = new mockChallengeData({ rating: 5 });
      const filter = new RatingFilter(2, 4);
      const result = filter.doesChallengeMatch(new Challenge(data));
      expect(result).toBe(false);
    });
  });
});