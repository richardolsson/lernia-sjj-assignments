export default class LabelFilter extends EventTarget {
  constructor(labels) {
    super();
    
    this.labels = labels;

    this.config = {};
    this.labels.forEach(label => {
      this.config[label] = false;
    });

    this.labelItems = [];
  }

  render() {
    const ctr = document.createElement('div');

    const header = document.createElement('h4');
    header.innerText = 'By label';
    ctr.append(header);

    const list = document.createElement('ul');
    this.labels.forEach(label => {
      const item = document.createElement('li');
      item.innerText = label;
      item.addEventListener('click', () => {
        this.setConfig({
          [label]: !this.config[label],
        });
        this.update();

        this.dispatchEvent(new Event('change'));
      });
      this.labelItems.push(item);
      list.append(item);
    });
    ctr.append(list);

    this.update();

    return ctr;
  }

  setConfig(config) {
    this.config = {
      ...this.config,
      ...config,
    };
  }

  update() {
    this.labelItems.forEach(item => {
      item.style.opacity = this.config[item.innerText]? 1.0 : 0.2;
    });
  }

  matches(challenge) {
    return Object.keys(this.config)
      .filter(label => this.config[label])
      .every(label => challenge.labels.includes(label));
  }
}
