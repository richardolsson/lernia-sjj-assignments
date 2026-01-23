import Challenge from "./Challenge.js";

export default class AllChallengeList {
  constructor(backend) {
    this.backend = backend;
  }

  async render() {
    const challengesData = await this.backend.getAllChallenges();

    const listElem = document.createElement('ul');
    listElem.classList.add('challenges__cardList');

    challengesData.forEach((challengeData) => {
      const challenge = new Challenge(challengeData);
      const cardElem = challenge.render();

      const itemElem = document.createElement('li');
      itemElem.classList.add('challenges__cardListItem');
      itemElem.append(cardElem);

      listElem.append(itemElem);
    })

    return listElem;
  }
}