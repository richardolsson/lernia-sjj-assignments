import { describe, expect, it } from '@jest/globals';

import ComboFilter from './ComboFilter';
import TextFilter from './TextFilter';
import TypeFilter from './TypeFilter';
import Challenge from '../lists/Challenge';

describe('ComboFilter.getMatching()', () => {
  it('returns all challenges when no filters', () => {
    const filter = new ComboFilter();
    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
      }),
      new Challenge({
        title: 'Challenge B',
      }),
    ]);

    expect(matching).toHaveLength(2);
  });

  it('combines composed filters using AND', () => {
    const filter = new ComboFilter([
      new TextFilter('hello'),
      new TypeFilter('online'),
    ]);

    const matching = filter.getMatching([
      new Challenge({
        title: 'Hello, world',
        description: '',
        type: 'online',
      }),
      new Challenge({
        title: 'Hello, room',
        description: '',
        type: 'onsite',
      }),
    ]);

    expect(matching).toHaveLength(1);
    expect(matching[0].title).toEqual('Hello, world');
  });
});