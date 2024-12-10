export default class CombinedFilter extends EventTarget {
  constructor(filters) {
    super();
    this.filters = filters;
  }

  doesChallengeMatch(challenge) {
    return this.filters.every(filter => filter.doesChallengeMatch(challenge));
  }

  render(elemFactory) {
    const container = elemFactory.createElement('div');

    this.filters.forEach(filter => {
      const filterElem = filter.render(elemFactory);

      filter.addEventListener('change', () => {
        this.dispatchEvent(new Event('change'));
      });

      container.append(filterElem);
    });

    return container;
  }
}