// Normally this would be in another file, but node does not work
// well with export/import.
class TypeFilter {
  constructor(type) {
    this.type = type;
  }

  filterChallenges(challenges) {
    const filteredChallenges = challenges.filter(
      (challenge) => challenge.type != this.type
    );
    return filteredChallenges;
  }
}
