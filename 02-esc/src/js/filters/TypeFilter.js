export default class TypeFilter {
  constructor(type) {
    this.config = {
      type: type,
    };
  }

  getMatching(challenges) {
    return challenges.filter((challenge) => {
      return challenge.type == this.config.type;
    });
  }
}