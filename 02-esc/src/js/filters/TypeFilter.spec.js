import { describe, expect, it } from '@jest/globals';

import Challenge from '../lists/Challenge';
import TypeFilter from './TypeFilter';

describe('TypeFilter.getMatching', () => {
  it('returns only "onsite" challenges when thus configured', () => {
    const filter = new TypeFilter();
    filter.config.type = 'onsite';

    const matching = filter.getMatching([
      new Challenge({
        type: 'onsite',
        title: 'An onsite challenge',
      }),
      new Challenge({
        type: 'online',
        title: 'An online challenge',
      }),
    ]);

    expect(matching).toHaveLength(1);
    expect(matching[0].title).toEqual('An onsite challenge');
  });

  it('returns only "online" challenges when thus configured', () => {
    const filter = new TypeFilter();
    filter.config.type = 'online';

    const matching = filter.getMatching([
      new Challenge({
        type: 'onsite',
        title: 'An onsite challenge',
      }),
      new Challenge({
        type: 'online',
        title: 'An online challenge',
      }),
    ]);

    expect(matching).toHaveLength(1);
    expect(matching[0].title).toEqual('An online challenge');
  });
});