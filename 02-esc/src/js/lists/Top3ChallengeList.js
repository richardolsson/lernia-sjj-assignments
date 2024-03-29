import ChallengeEvent from '../events/ChallengeEvent';

/**
 * Concerns:
 * - Retrieve challenges from API facade
 * - Render list of challenges
 * - Restrict to top 3 rated challenges
 */
export default class Top3ChallengeList extends EventTarget {
  constructor(api) {
    super();
    this.api = api;
  }

  async render() {
    const challenges = await this.api.getChallenges();

    const container = document.createElement('div');

    const top3 = challenges
      .sort((a, b) => {
        return b.rating - a.rating;
      })
      .slice(0, 3);

    top3.forEach((challenge) => {
      const challengeElement = challenge.render();
      challenge.addEventListener('bookChallenge', (event) => {
        this.dispatchEvent(new ChallengeEvent(event.type, event.challenge));
      });
      container.append(challengeElement);
    });

    return container;
  }
}