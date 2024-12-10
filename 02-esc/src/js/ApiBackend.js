export default class ApiBackend {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async loadAllChallenges() {
    const response = await fetch(this.apiUrl + '/challenges');
    const payload = await response.json();
    return payload.challenges;
  }
}