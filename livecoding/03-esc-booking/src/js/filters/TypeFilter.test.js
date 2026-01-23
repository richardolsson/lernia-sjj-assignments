import { describe, it, expect } from '@jest/globals';
import TypeFilter from './TypeFilter';
import mockChallengeData from '../utils/mockChallengeData';

describe('TypeFilter', () => {
  it('matches any challenge when null', () => {
    const onlineChallenge = mockChallengeData({ type: 'online' })
    const onsiteChallenge = mockChallengeData({ type: 'onsite' });

    const filter = new TypeFilter(null);
    expect(filter.matches(onlineChallenge)).toBeTruthy();
    expect(filter.matches(onsiteChallenge)).toBeTruthy();
  });

  it('matches challenge with correct type', () => {
    const onlineChallenge = mockChallengeData({ type: 'online' })
    const onsiteChallenge = mockChallengeData({ type: 'onsite' });

    const onlineFilter = new TypeFilter('online');
    const onsiteFilter = new TypeFilter('onsite');
    expect(onlineFilter.matches(onlineChallenge)).toBeTruthy();
    expect(onsiteFilter.matches(onsiteChallenge)).toBeTruthy();
  });

  it('rejects challenge with incorrect type', () => {
    const onlineChallenge = mockChallengeData({ type: 'online' })
    const onsiteChallenge = mockChallengeData({ type: 'onsite' });

    const onlineFilter = new TypeFilter('online');
    const onsiteFilter = new TypeFilter('onsite');
    expect(onlineFilter.matches(onsiteChallenge)).toBeFalsy();
    expect(onsiteFilter.matches(onlineChallenge)).toBeFalsy();
  });
});