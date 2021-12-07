import Challenge from "./challenges/challenge";

export default class EscAPI {
  async loadChallenges() {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json();
    return data.challenges.map(cd => new Challenge(cd));
  }
}
