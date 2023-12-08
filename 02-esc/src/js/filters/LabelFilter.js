export default class LabelFilter {
  constructor(labels) {
    this.config = { labels };
  }

  getMatching(challenges) {
    if (!this.config.labels) {
      return challenges;
    }

    return challenges.filter((challenge) => {
      return this.config.labels.every(
        (requiredLabel) => challenge.labels.includes(requiredLabel)
      );
    });
  }
}