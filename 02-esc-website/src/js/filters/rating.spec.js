import RatingFilter from "./rating";

describe('RatingFilter', () => {
  it('matches when rating is between min and max', () => {
    const filter = new RatingFilter();
    filter.setConfig({ min: 2, max: 4, });
    expect(filter.matches({ rating: 3 })).toBeTruthy();
  });

  it('matches when rating is exactly min', () => {
    const filter = new RatingFilter();
    filter.setConfig({ min: 2, max: 4, });
    expect(filter.matches({ rating: 2 })).toBeTruthy();
  });

  it('matches when rating is exactly max', () => {
    const filter = new RatingFilter();
    filter.setConfig({ min: 2, max: 4, });
    expect(filter.matches({ rating: 4 })).toBeTruthy();
  });

  it('does not match when rating is too low', () => {
    const filter = new RatingFilter();
    filter.setConfig({ min: 2, max: 4, });
    expect(filter.matches({ rating: 1 })).toBeFalsy();
  });

  it('does not match when rating is too high', () => {
    const filter = new RatingFilter();
    filter.setConfig({ min: 2, max: 4, });
    expect(filter.matches({ rating: 5 })).toBeFalsy();
  });
});
