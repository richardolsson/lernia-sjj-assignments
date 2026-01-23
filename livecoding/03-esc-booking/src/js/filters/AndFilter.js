export default class AndFilter extends EventTarget {
  constructor(filters) {
    super();

    this.filters = filters;
  }

  matches(challenge) {
    for (const filter of this.filters) {
      if (!filter.matches(challenge)) {
        return false;
      }
    }

    return true;
  }

  render() {
    const filters = document.createElement('div');

    this.filters.forEach((filter)=> {
      filter.addEventListener('change', () => {
        this.dispatchEvent(new Event('change'));
      });

      const filterElem = filter.render();
      filters.append(filterElem);
    });

    return filters;
  }
}