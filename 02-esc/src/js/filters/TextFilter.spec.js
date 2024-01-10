import { describe, expect, it } from '@jest/globals';

import TextFilter from './TextFilter';
import Challenge from '../lists/Challenge';

describe('TextFilter.getMatching()', () => {
  it('returns all challenges when unconfigured', () => {
    const filter = new TextFilter();
    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        description: 'This is the first challenge',
      }),
      new Challenge({
        title: 'Challenge B',
        description: 'This is the second challenge',
      }),
    ]);

    expect(matching).toHaveLength(2);
  });

  it('returns challenge based on title', () => {
    const filter = new TextFilter();
    filter.config.text = 'First';

    const matching = filter.getMatching([
      new Challenge({
        title: 'First challenge',
        description: 'This is the first challenge',
      }),
      new Challenge({
        title: 'Second challenge',
        description: 'This is the second challenge',
      }),
    ]);

    expect(matching).toHaveLength(1);
    expect(matching[0].title).toEqual('First challenge');
  });

  it('returns challenge based on description', () => {
    const filter = new TextFilter();
    filter.config.text = 'first';

    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge number 1',
        description: 'This is the first challenge',
      }),
      new Challenge({
        title: 'Challenge number 2',
        description: 'This is the second challenge',
      }),
    ]);

    expect(matching).toHaveLength(1);
    expect(matching[0].title).toEqual('Challenge number 1');
  });

  it('ignores case when filtering', () => {
    const filter = new TextFilter();
    filter.config.text = 'foo';

    const matching = filter.getMatching([
      new Challenge({
        title: 'Foo',
        description: '',
      }),
      new Challenge({
        title: 'foo',
        description: '',
      }),
    ]);

    expect(matching).toHaveLength(2);
  });
});