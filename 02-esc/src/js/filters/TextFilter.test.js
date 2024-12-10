import { describe, expect, it } from '@jest/globals';
import TextFilter from './TextFilter';
import Challenge from '../Challenge';
import mockChallengeData from '../testing/mockChallengeData';

describe('TextFilter', () => {
  describe('doesChallengeMatch()', () => {
    it('returns true when not searching', () => {
      const data = mockChallengeData();
      const filter = new TextFilter();
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when title matches', () => {
      const data = mockChallengeData({ title: 'Hacking' });
      const filter = new TextFilter('Hacking');
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns false when nothing matches', () => {
      const data = mockChallengeData();
      const filter = new TextFilter('this-is-a-string-that-does-not-match');
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(false);
    });

    it('returns true when title matches partially', () => {
      const data = mockChallengeData({ title: 'Hacking' });
      const filter = new TextFilter('ack');
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when title matches, case insensitive', () => {
      const data = mockChallengeData({ title: 'Hacking' });
      const filter = new TextFilter('hack');
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when description matches', () => {
      const data = mockChallengeData({ description: 'Lorem ipsum' });
      const filter = new TextFilter('Lorem')
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when description matches, case insensitive', () => {
      const data = mockChallengeData({ description: 'Lorem ipsum' });
      const filter = new TextFilter('lorem');
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });
  });
});