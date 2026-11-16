export default class AllChallengesList {
  constructor(api, filter) {
    this.api = api;
    this.filter = filter;
  }

  async start() {
    const challenges = await this.api.loadChallenges();
    const filteredChallenges = this.filter.filterChallenges(challenges);
    console.log('challenges', filteredChallenges);
  }
}