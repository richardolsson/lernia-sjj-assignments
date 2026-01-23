export default class Top3ChallengeList {
  constructor(challenges) {
    this.challenges = challenges;
  }

  render() {
    const listElem = document.createElement('ul');
    listElem.classList.add('challenges__cardList');

    const sortedChallenges = this.challenges.sort(
      (challenge0, challenge1) => challenge0.data.rating - challenge1.data.rating
    );
    const topChallenges = sortedChallenges.slice(0, 3);

    topChallenges.forEach((challenge) => {
      const cardElem = challenge.render();

      const itemElem = document.createElement('li');
      itemElem.classList.add('challenges__cardListItem');
      itemElem.append(cardElem);

      listElem.append(itemElem);
    })

    return listElem;
  }
}