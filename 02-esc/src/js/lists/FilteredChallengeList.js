import TypeFilter from '../filters/TypeFilter';
import RatingFilter from '../filters/RatingFilter';
import LabelFilter from '../filters/LabelFilter';
import TextFilter from "../filters/TextFilter";
import ComboFilter from '../filters/ComboFilter';
import getUniqueLabels from '../utils/getUniqueLabels';
import ChallengeEvent from '../events/ChallengeEvent';

export default class FilteredChallengeList extends EventTarget {
  constructor(api) {
    super();
    this.api = api;
    this.listElem = null;
    this.filter = null;
    this.challenges = [];
  }

  async render() {
    const container = document.createElement('div');
    container.className = 'allChallenges__container';

    const headline = document.createElement('h1');
    headline.textContent = 'Our challenges';
    container.append(headline);

    const filterSection = document.createElement('div');
    filterSection.className = 'allChallenges__filters';
    container.append(filterSection);

    const filterToggle = document.createElement('button');
    filterToggle.textContent = 'Filter challenges';
    filterToggle.className = 'allChallenges__filterToggle';
    filterToggle.addEventListener('click', () => {
      container.classList.toggle('allChallenges__container--filterOpen');
    });
    container.append(filterToggle);

    this.challenges = await this.api.getChallenges();
    this.challenges.forEach((challenge) => {
      challenge.addEventListener('bookChallenge', (event) => {
        this.dispatchEvent(new ChallengeEvent('bookChallenge', event.challenge));
      });
    });

    this.filter = new ComboFilter([
      new TypeFilter(),
      new RatingFilter(),
      new LabelFilter([], getUniqueLabels(this.challenges)),
      new TextFilter(),
    ]);

    this.filter.addEventListener('update', () => {
      this.update();
    });

    const filterElem = this.filter.render();
    filterSection.append(filterElem);

    this.listElem = document.createElement('div');
    this.listElem.className = 'allChallenges__list';
    container.append(this.listElem);

    this.update();

    return container;
  }

  async update() {
    this.listElem.innerHTML = '';

    const filteredChallenges = this.filter.getMatching(this.challenges);
    filteredChallenges.forEach((challenge) => {
      const challengeElem = challenge.render();
      this.listElem.append(challengeElem);
    });
  }
}