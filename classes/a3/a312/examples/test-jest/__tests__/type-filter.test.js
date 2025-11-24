import { describe, it, expect } from '@jest/globals';
import { TypeFilter } from "../src/filters";

describe('TypeFilter', () => {
  it('returns empty output for empty input', () => {
    const filter = new TypeFilter('online');
    const result = filter.filterChallenges([]);

    expect(result).toEqual([]);
  });

  it('includes only online challenges when filtering for online', () => {
    const filter = new TypeFilter('online');
    const result = filter.filterChallenges([
      {
        id: 1,
        title: 'Online challenge',
        type: 'online'
      },
    ]);

    expect(result).toHaveLength(1);
  });

  it('includes only onsite challenges when filtering for onsite', () => {
    const filter = new TypeFilter('onsite');
    const result = filter.filterChallenges([
      {
        id: 1,
        title: 'Online challenge',
        type: 'online'
      },
      {
        id: 1,
        title: 'Onsite challenge',
        type: 'onsite'
      },
    ]);

    expect(result).toHaveLength(1);
  });
});