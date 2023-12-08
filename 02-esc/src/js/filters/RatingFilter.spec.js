import { describe, expect, it } from '@jest/globals';

import RatingFilter from './RatingFilter';
import Challenge from '../lists/Challenge';


describe('RatingFilter.getMatching()', () => {
  it('returns all challenges when no min/max configured', () => {
    const filter = new RatingFilter();
    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        rating: 1,
      }),
      new Challenge({
        title: 'Challenge B',
        rating: 3,
      }),
    ]);

    expect(matching).toHaveLength(2);
  });

  it('returns challenges whose rating is equal to or above minRating=3', () => {
    const filter = new RatingFilter();
    filter.config.minRating = 3;

    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        rating: 1,
      }),
      new Challenge({
        title: 'Challenge B',
        rating: 3,
      }),
      new Challenge({
        title: 'Challenge C',
        rating: 4,
      }),
    ]);

    expect(matching).toHaveLength(2);
    expect(matching[0].title).toEqual('Challenge B');
    expect(matching[1].title).toEqual('Challenge C');
  });

  it('returns challenges whose rating is equal to or above minRating=1', () => {
    const filter = new RatingFilter();
    filter.config.minRating = 1;

    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        rating: 1,
      }),
      new Challenge({
        title: 'Challenge B',
        rating: 3,
      }),
      new Challenge({
        title: 'Challenge C',
        rating: 4,
      }),
    ]);

    expect(matching).toHaveLength(3);
  });

  it('returns challenges whose rating is equal to or below maxRating=3', () => {
    const filter = new RatingFilter();
    filter.config.maxRating = 3;

    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        rating: 1,
      }),
      new Challenge({
        title: 'Challenge B',
        rating: 3,
      }),
      new Challenge({
        title: 'Challenge C',
        rating: 4,
      }),
    ]);

    expect(matching).toHaveLength(2);
    expect(matching[0].title).toEqual('Challenge A');
    expect(matching[1].title).toEqual('Challenge B');
  });

  it('returns challenges whose rating is equal to or between 2 and 4', () => {
    const filter = new RatingFilter();
    filter.config.minRating = 2;
    filter.config.maxRating = 4;

    const matching = filter.getMatching([
      new Challenge({
        title: 'Challenge A',
        rating: 1,
      }),
      new Challenge({
        title: 'Challenge B',
        rating: 2,
      }),
      new Challenge({
        title: 'Challenge C',
        rating: 4,
      }),
      new Challenge({
        title: 'Challenge D',
        rating: 5,
      }),
    ]);

    expect(matching).toHaveLength(2);
    expect(matching[0].title).toEqual('Challenge B');
    expect(matching[1].title).toEqual('Challenge C');
  });
});