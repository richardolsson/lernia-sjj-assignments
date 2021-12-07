export default class TextFilter extends EventTarget {
  constructor() {
    super();

    this.config = {
      text: '',
    };
  }

  render() {
    const ctr = document.createElement('div');
    const header = document.createElement('h4');
    header.innerText = 'By text';
    ctr.append(header);

    const input = document.createElement('input');
    input.addEventListener('keyup', () => {
      this.setConfig({
        text: input.value,
      });
      this.dispatchEvent(new Event('change'));
    });
    ctr.append(input);
    return ctr;
  }

  setConfig(config) {
    this.config = {
      ...this.config,
      ...config,
    };
  }

  matches(challenge) {
    const text = this.config.text.toLowerCase();
    const index = [
      challenge.title.toLowerCase(),
      challenge.description.toLowerCase(),
    ];
    return index.some(str => str.includes(text));
  }
}
