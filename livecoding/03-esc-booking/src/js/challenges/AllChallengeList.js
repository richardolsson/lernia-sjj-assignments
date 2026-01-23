import TextFilter from "../filters/TextFilter.js";
import Challenge from "./Challenge.js";

export default class AllChallengeList {
  constructor(backend) {
    this.backend = backend;
  }

  async render() {
    this.challengesData = await this.backend.getAllChallenges();

    const container = document.createElement('div');

    this.filter = new TextFilter('challenge');
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

    this.challengesData.forEach((challengeData) => {
      if (this.filter.matches(challengeData)) {
        const challenge = new Challenge(challengeData);
        const cardElem = challenge.render();

        const itemElem = document.createElement('li');
        itemElem.classList.add('challenges__cardListItem');
        itemElem.append(cardElem);

        this.listElem.append(itemElem);
      }
    })
  }
}