import TypeFilter from "../filters/type.js";

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
    const typeFilter = new TypeFilter();
    typeFilter.addEventListener('change', () => {
      this.challenges.forEach(challenge => {
        if (typeFilter.matches(challenge)) {
          challenge.show();
        }
        else {
          challenge.hide();
        }
      });
    });

    const ctr = document.createElement('div');
    ctr.className = 'all-challenges';

    const filterBox = document.createElement('div');
    filterBox.className = 'filter-box';
    ctr.append(filterBox);

    filterBox.append(typeFilter.render());

    const grid = new ChallengeGrid(this.challenges);
    ctr.append(grid.render());

    return ctr;
  }
}
