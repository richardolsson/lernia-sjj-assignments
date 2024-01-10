import { describe, expect, it } from '@jest/globals';

import Challenge from '../lists/Challenge';
import getUniqueLabels from './getUniqueLabels';

describe('getUniqueLabels()', () => {
  it('returns empty for empty', () => {
    const labels = getUniqueLabels([]);
    expect(labels).toEqual([]);
  });

  it('returns empty when challenges have no labels', () => {
    const labels = getUniqueLabels([
      new Challenge({
        labels: [],
      }),
      new Challenge({
        labels: [],
      }),
    ]);
    expect(labels).toEqual([]);
  });

  it('returns labels from all challenges', () => {
    const labels = getUniqueLabels([
      new Challenge({
        labels: ['one', 'two'],
      }),
      new Challenge({
        labels: ['three'],
      }),
    ]);

    expect(labels).toEqual(['one', 'two', 'three']);
  });

  it('removes duplicates', () => {
    const labels = getUniqueLabels([
      new Challenge({
        labels: ['one', 'two'],
      }),
      new Challenge({
        labels: ['two', 'three'],
      }),
    ]);

    expect(labels).toEqual(['one', 'two', 'three']);

  });
});