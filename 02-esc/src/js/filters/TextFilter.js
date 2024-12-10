export default class TextFilter extends EventTarget {
  constructor(searchString) {
    super();
    this.searchString = searchString;
  }

  doesChallengeMatch(challenge) {
    if (!this.searchString) {
      return true;
    }

    const title = challenge.data.title.toLowerCase();
    const description = challenge.data.description.toLowerCase();
    const searchString = this.searchString.toLowerCase();
    return title.includes(searchString) || description.includes(searchString);
  }

  render(elemFactory) {
    const container = elemFactory.createElement('div');

    const label = elemFactory.createElement('h3');
    label.textContent = 'Or type to search for keyword';
    container.append(label);

    const input = elemFactory.createElement('input');
    input.addEventListener('keyup', () => {
      this.searchString = input.value;
      this.dispatchEvent(new Event('change'));
    });

    container.append(input);

    return container;
  }
}