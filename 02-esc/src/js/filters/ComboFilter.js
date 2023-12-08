export default class ComboFilter extends EventTarget {
  constructor(filters) {
    super();
    this.filters = filters;

    this.filters.forEach((filter) => {
      filter.addEventListener('update', () => {
        this.dispatchEvent(new Event('update'));
      });
    });
  }

  getMatching(challenges) {
    let output = challenges;

    if (this.filters) {
      this.filters.forEach(filter => {
        output = filter.getMatching(output);
      });
    }

    return output;
  }

  render() {
    const container = document.createElement('div');

    this.filters.forEach(filter => {
      container.append(filter.render());
    });

    return container;
  }
}