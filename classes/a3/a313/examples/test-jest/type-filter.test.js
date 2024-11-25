import { describe, it, expect } from '@jest/globals';

import { TypeFilter } from './src/filters.js'

describe('TypeFilter', () => {
  it('gives empty output for empty input', () => {
    const filter = new TypeFilter('online');
    const result = filter.filterChallenges([]);

    expect(result).toEqual([]);
  });

  it('includes online challenge when filtering for online', () => {
    const filter = new TypeFilter('online');
    const result = filter.filterChallenges([
      {
        id: 1,
        title: 'My Challenge',
        type: 'online',
        // ...
      }
    ]);

    expect(result).toHaveLength(1);
  });

  it('excludes onsite challenge when filtering for online', () => {
    const filter = new TypeFilter('online');
    const result = filter.filterChallenges([
      {
        id: 1,
        title: 'My challenge',
        type: 'onsite',
        // ...
      }
    ]);

    expect(result).toEqual([]);
  });
});