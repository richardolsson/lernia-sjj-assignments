import { describe, expect, it } from '@jest/globals';
import mockChallengeData from '../testing/mockChallengeData';
import CombinedFilter from './CombinedFilter';
import Challenge from '../Challenge';
import TextFilter from './TextFilter';
import TypeFilter from './TypeFilter';

describe('CombinedFilter', () => {
  describe('doesChallengeMatch()', () => {
    it('returns true when there are no filters', () => {
      const data = mockChallengeData();
      const filter = new CombinedFilter([]);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when all filters match', () => {
      const data = mockChallengeData({ title: 'Hacking', type: 'online' });
      const filter = new CombinedFilter([
        new TextFilter('hacking'),
        new TypeFilter(['online']),
      ]);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns false when one filter does not match', () => {
      const data = mockChallengeData({ title: 'Hacking', type: 'online' });
      const filter = new CombinedFilter([
        new TextFilter('this-will-not-match'),
        new TypeFilter(['online']),
      ]);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(false);
    });
  });
});