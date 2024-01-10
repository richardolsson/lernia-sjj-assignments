import { describe, expect, it } from '@jest/globals';

import LabelFilter from './LabelFilter';
import Challenge from '../lists/Challenge';

describe('LabelFilter.getMatching()', () => {
  it('returns all challenges when no labels configured', () => {
    const filter = new LabelFilter();
    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        labels: [
          'web', 'hacking',
        ],
      }),
      new Challenge({
        title: 'Challenge B',
        labels: [
          'scripting', 'phreaking',
        ],
      }),
    ]);

    expect(matching).toHaveLength(2);
  });

  it('returns challenges with "web" label', () => {
    const filter = new LabelFilter();
    filter.config.labels = ['web'];

    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        labels: [
          'web', 'hacking',
        ],
      }),
      new Challenge({
        title: 'Challenge B',
        labels: [
          'scripting', 'phreaking',
        ],
      }),
    ]);

    expect(matching).toHaveLength(1);
    expect(matching[0].title).toEqual('Challenge A');
  });

  it('returns challenges with "web" and "phreaking" labels', () => {
    const filter = new LabelFilter();
    filter.config.labels = ['web', 'phreaking'];

    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        labels: [
          'web', 'hacking',
        ],
      }),
      new Challenge({
        title: 'Challenge B',
        labels: [
          'scripting', 'phreaking',
        ],
      }),
      new Challenge({
        title: 'Challenge C',
        labels: [
          'web', 'phreaking', 'scripting',
        ],
      }),
    ]);

    expect(matching).toHaveLength(1);
    expect(matching[0].title).toEqual('Challenge C');
  });

  it('returns no challenges when none match', () => {
    const filter = new LabelFilter();
    filter.config.labels = ['web', 'phreaking'];

    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        labels: [
          'web', 'hacking',
        ],
      }),
      new Challenge({
        title: 'Challenge B',
        labels: [
          'scripting', 'phreaking',
        ],
      }),
    ]);

    expect(matching).toHaveLength(0);
  });
});