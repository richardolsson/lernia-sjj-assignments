import Challenge from '../lists/Challenge';

export default class FetchAPIFacade {
  constructor(base) {
    this.base = base || 'https://lernia-sjj-assignments.vercel.app';
  }

  async getChallenges() {
    const res = await fetch(this.base + '/api/challenges');
    const data = await res.json();

    console.log(data);

    return data.challenges.map((challengeData) => {
      return new Challenge(challengeData);
    });
  }
}