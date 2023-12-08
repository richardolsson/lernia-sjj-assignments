import MockAPIFacade from "../api/MockAPIFacade";

/**
 * Concerns:
 * - Retrieve challenges from API facade
 * - Render list of challenges
 * - Restrict to top 3 rated challenges
 */
export default class Top3ChallengeList {
  render() {
    const api = new MockAPIFacade();
    const challenges = api.getChallenges();

    const container = document.createElement('div');

    const top3 = challenges
      .sort((a, b) => {
        return b.rating - a.rating;
      })
      .slice(0, 3);

    top3.forEach((challenge) => {
      const challengeElement = challenge.render();
      container.append(challengeElement);
    });

    return container;
  }
}