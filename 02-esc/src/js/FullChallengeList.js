import Challenge from "./Challenge";
import TextFilter from "./filters/TextFilter";
import TypeFilter from "./filters/TypeFilter";
import CombinedFilter from "./filters/CombinedFilter";
import LabelFilter from "./filters/LabelFilter";
import RatingFilter from "./filters/RatingFilter";

export default class FullChallengeList {
  constructor(backend) {
    this.backend = backend;
  }

  async start(listContainer, elemFactory) {
    const challengesFromApi = await this.backend.loadAllChallenges();

    const allLabels = challengesFromApi.flatMap(challenge => challenge.labels);
    const uniqueLabels = Array.from(new Set(allLabels));

    this.filter = new CombinedFilter([
      new TypeFilter(),
      new RatingFilter(),
      new LabelFilter([], uniqueLabels),
      new TextFilter(),
    ]);
    this.filter.addEventListener('change', () => {
      this.update();
    });

    const filterElem = this.filter.render(elemFactory);
    listContainer.append(filterElem);

    const listElem = elemFactory.createElement('ul');
    listElem.className = 'challenges__fullList';
    listContainer.append(listElem);

    this.challenges = [];

    challengesFromApi.forEach(challengeData => {
      const challenge = new Challenge(challengeData);
      this.challenges.push(challenge);

      const listItem = elemFactory.createElement('li');
      listElem.append(listItem);

      const challengeElem = challenge.render(elemFactory);
      listItem.append(challengeElem);
    });
  }

  update() {
    this.challenges.forEach(challenge => {
      const doesMatch = this.filter.doesChallengeMatch(challenge);
      challenge.toggleVisibility(doesMatch);
    });
  }
}