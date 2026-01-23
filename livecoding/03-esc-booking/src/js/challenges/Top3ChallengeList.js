import Challenge from "./Challenge.js";

export default class Top3ChallengeList {
  constructor(backend) {
    this.backend = backend;
  }

  async render() {
    const challengesData = await this.backend.getAllChallenges();

    const listElem = document.createElement('ul');
    listElem.classList.add('challenges__cardList');

    const sortedChallengesData = challengesData.sort((data0, data1) => data1.rating - data0.rating);
    const topChallengesData = sortedChallengesData.slice(0, 3);

    topChallengesData.forEach((challengeData) => {
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