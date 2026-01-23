import AndFilter from "../filters/AndFilter.js";
import TextFilter from "../filters/TextFilter.js";
import TypeFilter from "../filters/TypeFilter.js";

export default class AllChallengeList {
  constructor(challenges) {
    this.challenges = challenges;
  }

  render() {
    const container = document.createElement('div');

    this.filter = new AndFilter([
      new TypeFilter(null),
      new TextFilter(''),
    ]);
    this.filter.addEventListener('change', () => {
      this.update();
    });
    const textFilterElem = this.filter.render();
    container.append(textFilterElem);

    this.listElem = document.createElement('ul');
    this.listElem.classList.add('challenges__cardList');
    container.append(this.listElem);

    this.update();

    return container;
  }

  update() {
    this.listElem.innerHTML = '';

    this.challenges.forEach((challenge) => {
      if (this.filter.matches(challenge.data)) {
        const cardElem = challenge.render();

        const itemElem = document.createElement('li');
        itemElem.classList.add('challenges__cardListItem');
        itemElem.append(cardElem);

        this.listElem.append(itemElem);
      }
    })
  }
}