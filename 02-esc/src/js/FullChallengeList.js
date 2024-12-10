import Challenge from "./Challenge";

export default class FullChallengeList {
  constructor(backend) {
    this.backend = backend;
  }

  async start(listContainer, elemFactory) {
    const challengesFromApi = await this.backend.loadAllChallenges();

    const listElem = elemFactory.createElement('ul');
    listElem.className = 'challenges__fullList';
    listContainer.append(listElem);

    challengesFromApi.forEach(challengeData => {
      const challenge = new Challenge(challengeData);

      const listItem = elemFactory.createElement('li');
      listElem.append(listItem);

      const challengeElem = challenge.render(elemFactory);
      listItem.append(challengeElem);
    });
  }
}