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
    challenges.forEach((challenge) => {
      const challengeElement = challenge.render();
      container.append(challengeElement);
    });

    return container;
  }
}