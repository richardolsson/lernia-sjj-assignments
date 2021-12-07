import TypeFilter from './type';

describe('TypeFilter', () => {
  const onlineChallenge = {
    type: 'online',
  };

  const onsiteChallenge = {
    type: 'onsite',
  };

  it('matches online challenge when online = true', () => {
    const filter = new TypeFilter();
    filter.setConfig({
      online: true,
    });

    expect(filter.matches(onlineChallenge)).toBeTruthy();
  });

  it('does not match online challenge when online = false', () => {
    const filter = new TypeFilter();
    filter.setConfig({
      online: false,
    });

    expect(filter.matches(onlineChallenge)).toBeFalsy();
  });

  it('matches onsite challenge when onsite = true', () => {
    const filter = new TypeFilter();
    filter.setConfig({
      onsite: true,
    });

    expect(filter.matches(onsiteChallenge)).toBeTruthy();
  });

  it('does not match onsite challenge when onsite = false', () => {
    const filter = new TypeFilter();
    filter.setConfig({
      onsite: false,
    });

    expect(filter.matches(onsiteChallenge)).toBeFalsy();
  });
});
