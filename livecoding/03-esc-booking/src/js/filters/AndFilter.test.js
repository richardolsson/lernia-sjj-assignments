import { describe, it, expect } from '@jest/globals';
import AndFilter from './AndFilter';
import mockChallengeData from '../utils/mockChallengeData.js';

class MockFilter {
  constructor(shouldMatch) {
    this.shouldMatch = shouldMatch;
  }

  matches() {
    return this.shouldMatch;
  }
}

describe('AndFilter', () => {
  it('matches if all contained filters match', () => {
    const filter = new AndFilter([
      new MockFilter(true),
      new MockFilter(true),
    ]);

    const challenge = mockChallengeData();

    expect(filter.matches(challenge)).toBeTruthy();
  });

  it('does not match if any of filters reject', () => {
    const filter = new AndFilter([
      new MockFilter(false),
      new MockFilter(true),
    ]);

    const challenge = mockChallengeData();

    expect(filter.matches(challenge)).toBeFalsy();
  });
});
