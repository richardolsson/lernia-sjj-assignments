import Challenge from "./Challenge";

export default class Top3ChallengeList {
  constructor(backend) {
    this.backend = backend;
  }

  async start(listContainer, elemFactory) {
    const challengesFromApi = await this.backend.loadAllChallenges();

    const listElem = elemFactory.createElement('ul');
    listElem.className = 'challenges__list';
    listContainer.append(listElem);

    challengesFromApi
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3)
      .forEach((challengeData) => {
        const challenge = new Challenge(challengeData);

        const listItem = elemFactory.createElement('li');
        listItem.className = 'challenges__listItem';
        listElem.append(listItem);

        const challengeElem = challenge.render(elemFactory);
        listItem.append(challengeElem);
      });
  }
}