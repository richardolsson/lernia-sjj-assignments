export default class TypeFilter extends EventTarget {
  constructor(type) {
    super();

    this.config = {
      type: type,
    };
  }

  getMatching(challenges) {
    if (!this.config.type) {
      return challenges;
    }

    return challenges.filter((challenge) => {
      return challenge.type == this.config.type;
    });
  }

  render() {
    const container = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = 'Filter by type';
    container.append(header);

    const onsiteRadio = document.createElement('input');
    onsiteRadio.type = 'radio';
    onsiteRadio.name = 'type';
    const onsiteLabel = document.createElement('label');
    onsiteLabel.append(onsiteRadio);
    onsiteLabel.append('On-site');
    container.append(onsiteLabel);

    onsiteRadio.addEventListener('change', () => {
      this.config.type = 'onsite';
      this.dispatchEvent(new Event('update'));
    });

    const onlineRadio = document.createElement('input');
    onlineRadio.type = 'radio';
    onlineRadio.name = 'type';
    const onlineLabel = document.createElement('label');
    onlineLabel.append(onlineRadio);
    onlineLabel.append('Online');
    container.append(onlineLabel);

    onlineRadio.addEventListener('change', () => {
      this.config.type = 'online';
      this.dispatchEvent(new Event('update'));
    });

    return container;
  }
}