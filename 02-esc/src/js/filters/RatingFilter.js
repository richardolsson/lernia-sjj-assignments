export default class RatingFilter {
  constructor(minRating, maxRating) {
    this.config = {
      minRating, maxRating,
    };
  }

  getMatching(challenges) {
    return challenges.filter((challenge) => {
      const maxMatches = (this.config.maxRating !== undefined) ?
        challenge.rating <= this.config.maxRating : true;

      const minMatches = (this.config.minRating !== undefined) ?
        challenge.rating >= this.config.minRating : true;

      return maxMatches && minMatches;
    });
  }
}