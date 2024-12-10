import { describe, expect, it } from '@jest/globals';
import mockChallengeData from '../testing/mockChallengeData';
import TagsFilter from './TagsFilter';
import Challenge from '../Challenge';

describe('LabelFilter', () => {
  describe('doesChallengeMatch()', () => {
    it('returns true when there are no tags selected', () => {
      const data = mockChallengeData();
      const filter = new TagsFilter();
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns true when selected tag exists', () => {
      const data = mockChallengeData({ labels: ['web', 'phreaking'] });
      const filter = new TagsFilter(['web']);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(true);
    });

    it('returns false when selected tag does not exist', () => {
      const data = mockChallengeData({ labels: ['web', 'phreaking'] });
      const filter = new TagsFilter(['ssh']);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(false);
    });

    it('returns false when not all selected tags exist', () => {
      const data = mockChallengeData({ labels: ['web', 'phreaking'] });
      const filter = new TagsFilter(['web', 'ssh']);
      const result = filter.doesChallengeMatch(new Challenge(data));

      expect(result).toBe(false);
    });
  });
});