export default class FilteredChallengeList {
  constructor(api) {
    this.api = api;
  }

  async render() {
    const container = document.createElement('div');
    container.className = 'allChallenges__list';

    const challenges = await this.api.getChallenges();

    challenges.forEach((challenge) => {
      const challengeElem = challenge.render();
      container.append(challengeElem);
    });

    return container;
  }
}