export default class TextFilter extends EventTarget {
  constructor(text) {
    super();
    this.config = { text };
  }

  getMatching(challenges) {
    if (!this.config.text) {
      return challenges;
    }

    const text = this.config.text.toLowerCase();

    return challenges.filter((challenge) => {
      const title = challenge.title.toLowerCase();
      const description = challenge.description.toLowerCase();

      return title.includes(text) || description.includes(text);
    });
  }

  render() {
    const container = document.createElement('div');
    container.className = 'textFilter';

    const header = document.createElement('h2');
    header.textContent = 'Filter by text';
    container.append(header);

    const input = document.createElement('input');
    input.addEventListener('keyup', () => {
      this.config.text = input.value;
      this.dispatchEvent(new Event('update'));
    });
    container.append(input);

    return container;
  }
}