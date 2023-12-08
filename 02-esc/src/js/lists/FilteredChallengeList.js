export default class FilteredChallengeList {
  constructor(api) {
    this.api = api;
  }

  async render() {
    const container = document.createElement('div');
    container.textContent = 'list';
    return container;
  }
}