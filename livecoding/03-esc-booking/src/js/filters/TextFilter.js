export default class TextFilter extends EventTarget {
  constructor(searchText) {
    super();

    this.searchText = searchText;
  }

  matches(challenge) {
    const titleMatches = challenge.title.toLowerCase().includes(this.searchText.toLowerCase());
    const descMatches = challenge.description.toLowerCase().includes(this.searchText.toLowerCase());
    return titleMatches || descMatches;
  }

  render() {
    const filter = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = 'Type to search for keyword';
    filter.append(label);

    const input = document.createElement('input');
    input.value = this.searchText;
    filter.append(input);
    input.addEventListener('keyup', () => {
      this.searchText = input.value;
      this.dispatchEvent(new Event('change'));
    });

    return filter;
  }
}