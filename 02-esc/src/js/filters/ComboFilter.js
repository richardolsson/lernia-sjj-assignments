export default class ComboFilter {
  constructor(filters) {
    this.filters = filters;
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
}