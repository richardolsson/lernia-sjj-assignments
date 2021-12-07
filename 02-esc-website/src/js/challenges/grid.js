export class ChallengeGrid {
  constructor(challenges) {
    this.challenges = challenges;
  }

  render() {
    const list = document.createElement('ul');
    list.className = 'challenges-list';

    this.challenges.forEach(challenge => {
      const card = challenge.render();
      list.append(card);
    });

    return list;
  }
}

export class TopRatedChallengeGrid {
  constructor(challenges) {
    this.challenges = challenges;
  }

  render() {
    const top3Challenges = this.challenges
      .sort((c0, c1) => c1.rating - c0.rating)
      .slice(0, 3);

    const grid = new ChallengeGrid(top3Challenges);
    return grid.render();
  }
}


export class FilteredChallengeGrid {
  constructor(challenges) {
    this.challenges = challenges;
  }

  render() {
    const ctr = document.createElement('div');
    ctr.className = 'all-challenges';

    const grid = new ChallengeGrid(this.challenges);
    ctr.append(grid.render());

    return ctr;
  }
}
