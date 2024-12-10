import { describe, expect, it } from '@jest/globals';
import mockChallengeData from '../testing/mockChallengeData';
import TypeFilter from './TypeFilter';
import Challenge from '../Challenge';

describe('TypeFilter', () => {
  describe('doesChallengeMatch()', () => {
    it('returns true when undefined', () => {
      const data = mockChallengeData();
      const filter = new TypeFilter();
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when empty', () => {
      const data = mockChallengeData();
      const filter = new TypeFilter([]);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when type is the same (online)', () => {
      const data = mockChallengeData({ type: 'online' });
      const filter = new TypeFilter(['online']);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when type is the same (onsite)', () => {
      const data = mockChallengeData({ type: 'onsite' });
      const filter = new TypeFilter(['onsite']);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when multiple types are allowed', () => {
      const data = mockChallengeData({ type: 'onsite' });
      const filter = new TypeFilter(['onsite', 'online']);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns false type is not the same', () => {
      const data = mockChallengeData({ type: 'online' });
      const filter = new TypeFilter('onsite');
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(false);
    });
  });
});
