import RatingFilter from "../filters/rating.js";
import LabelFilter from "../filters/label.js";
import TypeFilter from "../filters/type.js";
import TextFilter from "../filters/text.js";
import Booking from "../booking.js";

export class ChallengeGrid {
  constructor(api, challenges) {
    this.api = api;
    this.challenges = challenges;
    this.booking = null;
  }

  render() {
    const list = document.createElement('ul');
    list.className = 'challenges-list';

    this.challenges.forEach(challenge => {
      const card = challenge.render();
      challenge.addEventListener('booking', () => {
        this.booking = new Booking(this.api, challenge);
        this.booking.show();
      });
      list.append(card);
    });

    return list;
  }
}

export class TopRatedChallengeGrid {
  constructor(api, challenges) {
    this.api = api;
    this.challenges = challenges;
  }

  render() {
    const top3Challenges = this.challenges
      .sort((c0, c1) => c1.rating - c0.rating)
      .slice(0, 3);

    const grid = new ChallengeGrid(this.api, top3Challenges);
    return grid.render();
  }
}


export class FilteredChallengeGrid {
  constructor(api, challenges) {
    this.api = api;
    this.challenges = challenges;
  }

  render() {
    const handleFilterChange = () => {
      this.challenges.forEach(challenge => {
        if (typeFilter.matches(challenge)
          && ratingFilter.matches(challenge)
          && labelFilter.matches(challenge)
          && textFilter.matches(challenge)) {
          challenge.show();
        }
        else {
          challenge.hide();
        }
      });
    }

    const typeFilter = new TypeFilter();
    typeFilter.addEventListener('change', handleFilterChange);

    const ratingFilter = new RatingFilter();
    ratingFilter.addEventListener('change', handleFilterChange);

    const labels = [];
    this.challenges.forEach(challenge => {
      challenge.labels.forEach(label => {
        if (!labels.includes(label)) {
          labels.push(label);
        }
      });
    });
    const labelFilter = new LabelFilter(labels);
    labelFilter.addEventListener('change', handleFilterChange);

    const textFilter = new TextFilter();
    textFilter.addEventListener('change', handleFilterChange);

    const ctr = document.createElement('div');
    ctr.className = 'all-challenges';

    const filterBox = document.createElement('div');
    filterBox.className = 'filter-box';
    ctr.append(filterBox);

    filterBox.append(typeFilter.render());
    filterBox.append(ratingFilter.render());
    filterBox.append(labelFilter.render());
    filterBox.append(textFilter.render());

    const grid = new ChallengeGrid(this.api, this.challenges);
    ctr.append(grid.render());

    return ctr;
  }

}
