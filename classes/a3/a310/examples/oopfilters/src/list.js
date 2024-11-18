export default class AllChallengesList {
  constructor(api) {
    this.api = api;
  }

  async start() {
    const challenges = await this.api.loadChallenges();
    console.log('challenges', challenges);
  }
}