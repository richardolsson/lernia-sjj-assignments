import { describe, it, expect } from '@jest/globals';
import mockChallengeData from '../utils/mockChallengeData';
import TextFilter from './TextFilter';

describe('TextFilter', () => {
  it('matches challenge with identical title', () => {
    const challenge = mockChallengeData({ title: 'Hacker challenge' });
    const filter = new TextFilter('Hacker challenge');
    const result = filter.matches(challenge);

    expect(result).toBeTruthy();
  });

  it('rejects challenge with different title and description', () => {
    const challenge = mockChallengeData({ title: 'Hacker challenge', description: 'Irrelevant' });
    const filter = new TextFilter('Another name');
    const result = filter.matches(challenge);

    expect(result).toBeFalsy();
  });

  it('matches challenge with partially matching title', () => {
    const challenge = mockChallengeData({ title: 'Hacker challenge' });
    const filter = new TextFilter('challenge');
    const result = filter.matches(challenge);

    expect(result).toBeTruthy();
  });

  it('matches challenge while ignoring case', () => {
    const challenge = mockChallengeData({ title: 'Hacker Challenge' });
    const filter = new TextFilter('challenge');
    const result = filter.matches(challenge);

    expect(result).toBeTruthy();
  });

  it('matches challenge with partially matching description', () => {
    const challenge = mockChallengeData({ title: 'Hacking',  description: 'Hacker challenge' });
    const filter = new TextFilter('challenge');
    const result = filter.matches(challenge);

    expect(result).toBeTruthy();
  });

  it('matches challenge while ignoring description case', () => {
    const challenge = mockChallengeData({ title: 'Hacking', description: 'Hacker Challenge' });
    const filter = new TextFilter('challenge');
    const result = filter.matches(challenge);

    expect(result).toBeTruthy();
  });
});