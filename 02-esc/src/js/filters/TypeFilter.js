export default class TypeFilter extends EventTarget {
  constructor(types) {
    super();
    this.types = types || [];
  }

  doesChallengeMatch(challenge) {
    if (!this.types || !this.types.length) {
      return true;
    }

    return this.types.includes(challenge.data.type);
  }

  render(elemFactory) {
    const container = elemFactory.createElement('div');

    const header = elemFactory.createElement('h3');
    header.textContent = 'By type';
    container.append(header);

    const onlineCheckbox = elemFactory.createElement('input');
    onlineCheckbox.type = 'checkbox';
    onlineCheckbox.addEventListener('change', (event) => {
      this.types = this.types.filter(type => type != 'online');

      if (event.target.checked) {
        this.types.push('online');
      }

      this.dispatchEvent(new Event('change'));
    });

    const onlineOption = elemFactory.createElement('label');
    onlineOption.append(onlineCheckbox);
    onlineOption.append('Include online challenges');
    container.append(onlineOption);

    const onsiteCheckbox = elemFactory.createElement('input');
    onsiteCheckbox.type = 'checkbox';
    onsiteCheckbox.addEventListener('change', (event) => {
      this.types = this.types.filter(type => type != 'onsite');

      if (event.target.checked) {
        this.types.push('onsite');
      }

      this.dispatchEvent(new Event('change'));
    });

    const onsiteOption = elemFactory.createElement('label');
    onlineOption.append(onsiteCheckbox);
    onlineOption.append('Include on-site challenges');
    container.append(onsiteOption);

    return container;
  }
}