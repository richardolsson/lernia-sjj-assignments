import TypeFilter from '../filters/TypeFilter';
import RatingFilter from '../filters/RatingFilter';
import LabelFilter from '../filters/LabelFilter';
import TextFilter from "../filters/TextFilter";
import ComboFilter from '../filters/ComboFilter';
import getUniqueLabels from '../utils/getUniqueLabels';

export default class FilteredChallengeList {
  constructor(api) {
    this.api = api;
    this.listElem = null;
    this.filter = null;
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

    const challenges = await this.api.getChallenges();

    this.filter = new ComboFilter([
      new TypeFilter(),
      new RatingFilter(),
      new LabelFilter([], getUniqueLabels(challenges)),
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

    const challenges = await this.api.getChallenges();
    const filteredChallenges = this.filter.getMatching(challenges);
    filteredChallenges.forEach((challenge) => {
      const challengeElem = challenge.render();
      this.listElem.append(challengeElem);
    });

  }
}