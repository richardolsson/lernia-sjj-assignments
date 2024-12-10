export default class LabelFilter extends EventTarget {
  constructor(selectedLabels, allLabels) {
    super();
    this.selectedLabels = selectedLabels || [];
    this.allLabels = allLabels;
  }

  doesChallengeMatch(challenge) {
    return this.selectedLabels.every(label => challenge.data.labels.includes(label));
  }

  render(elemFactory) {
    const container = elemFactory.createElement('div');

    const header = elemFactory.createElement('h3');
    header.textContent = 'By label';
    container.append(header);

    const listElem = elemFactory.createElement('ul');
    listElem.className = 'labelFilter__list';
    container.append(listElem);

    this.allLabels.forEach(label => {
      const listItem = elemFactory.createElement('li');
      listItem.textContent = label;
      listItem.className = 'labelFilter__listItem';
      listItem.addEventListener('click', () => {
        const selected = this.selectedLabels.includes(label);

        if (selected) {
          this.selectedLabels = this.selectedLabels.filter(existingLabel => existingLabel != label);
          listItem.classList.remove('labelFilter__listItem--selected');
        } else {
          this.selectedLabels = [...this.selectedLabels, label];
          listItem.classList.add('labelFilter__listItem--selected');
        }

        this.dispatchEvent(new Event('change'));
      });

      listElem.append(listItem);
    });

    return container;
  }
}