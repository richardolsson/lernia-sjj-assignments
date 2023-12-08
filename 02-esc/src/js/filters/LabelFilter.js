export default class LabelFilter extends EventTarget {
  constructor(labels, availableLabels) {
    super();
    this.config = { labels };
    this.availableLabels = availableLabels;
  }

  getMatching(challenges) {
    if (!this.config.labels) {
      return challenges;
    }

    return challenges.filter((challenge) => {
      return this.config.labels.every(
        (requiredLabel) => challenge.labels.includes(requiredLabel)
      );
    });
  }

  render() {
    const container = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = 'Filter by labels';
    container.append(header);

    this.availableLabels.forEach((label) => {
      const labelElem = document.createElement('span');
      labelElem.textContent = label;
      labelElem.className = 'labelFilter__label'
      container.append(labelElem);

      labelElem.addEventListener('click', () => {
        if (this.config.labels.includes(label)) {
          labelElem.classList.remove('labelFilter__label--selected');
          this.config.labels = this.config.labels.filter(
            labelFromConfig => labelFromConfig != label
          );
        } else {
          labelElem.classList.add('labelFilter__label--selected');
          this.config.labels.push(label);
        }


        this.dispatchEvent(new Event('update'));
      });
    });

    return container;
  }
}