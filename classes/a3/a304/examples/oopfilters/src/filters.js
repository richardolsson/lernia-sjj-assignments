export class TextFilter {
  constructor(searchString) {
    this.searchString = searchString;
  }

  filterChallenges(challenges) {
    const filteredChallenges = challenges.filter(
      (challenge) => challenge.title.includes(this.searchString)
    );
    return filteredChallenges;
  }
}

export class TypeFilter {
  constructor(type) {
    this.type = type;
  }

  filterChallenges(challenges) {
    const filteredChallenges = challenges.filter(
      (challenge) => challenge.type == this.type
    );
    return filteredChallenges;
  }
}