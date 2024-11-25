export default class AllChallengesList {
  constructor(api, filter) {
    this.api = api;
    this.filter = filter;
  }

  async render(list) {
    const challenges = await this.api.loadChallenges();
    const filteredChallenges = this.filter.filterChallenges(challenges);

    // Clear all content before re-creating
    list.innerHTML = '';

    // Recreate items
    filteredChallenges.forEach(challenge => {
      const li = document.createElement('li');
      li.textContent = `${challenge.title} (${challenge.type})`;
      list.append(li);
    });
  }
}