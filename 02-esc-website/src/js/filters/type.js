export default class TypeFilter extends EventTarget {
  constructor() {
    super();

    this.config = {
      online: true,
      onsite: true,
    };
  }

  render() {
    const ctr = document.createElement('div');
    ctr.className = 'filter filter-type';

    const header = document.createElement('h4');
    header.innerText = 'By type';
    ctr.append(header);

    const optionList = document.createElement('ul');
    optionList.append(this.renderItem('online', 'Include online challenges'));
    optionList.append(this.renderItem('onsite', 'Include on-site challenges'));
    ctr.append(optionList);

    return ctr;
  }

  matches(challenge) {
    return this.config[challenge.type];
  }

  setConfig(config) {
    this.config = {
      ...this.config,
      ...config,
    };
  }

  renderItem(type, text) {
    const item = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = this.config[type];
    checkbox.addEventListener('change', () => {
      this.setConfig({
        [type]: checkbox.checked,
      });

      this.dispatchEvent(new Event('change'));
    });

    const label = document.createElement('label');
    label.append(checkbox);
    label.append(text);

    item.append(label);
    return item;
  }
}
