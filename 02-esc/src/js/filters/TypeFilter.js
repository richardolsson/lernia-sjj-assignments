export default class TypeFilter {
  constructor(type) {
    this.config = {
      type: type,
    };
  }

  getMatching(challenges) {
    if (!this.config.type) {
      return challenges;
    }

    return challenges.filter((challenge) => {
      return challenge.type == this.config.type;
    });
  }
}