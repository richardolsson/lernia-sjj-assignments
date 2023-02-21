export default class MovieResource {
  constructor(movieId, cmsAdapter) {
    this.id = movieId;
    this.cmsAdapter = cmsAdapter;
  }

  async addReview(name, rating, comment) {
    return await this.cmsAdapter.createMovieReview(this.id, {
      author: name,
      rating: rating,
      comment: comment,
    });
  }

  async retrieveAverageRating() {
    const allReviews = await this.cmsAdapter.getAllReviews();
    const movieReviews = allReviews
      .filter(review => review.attributes.movie.data?.id == this.id);

    const sum = movieReviews
      .reduce((sum, review) => sum + review.attributes.rating, 0);

    return {
      rating: sum / movieReviews.length,
      source: 'reviews',
    };
  }

  async retrieveScreenings() {
    const allScreenings = await this.cmsAdapter.getAllScreenings();
    return allScreenings.filter(screening => {
      if (screening.attributes.movie.data.id != this.id) {
        return false;
      }

      const now = new Date();
      const startTime = new Date(screening.attributes.start_time);
      if (startTime < now) {
        return false;
      }

      return true;
    });
  }

  async retrieveReviews(page) {
    const allReviews = await this.cmsAdapter.getAllReviews();
    const filteredReviews = allReviews.filter(review => {
      if (review.attributes.movie.data?.id != this.id) {
        return false;
      }

      return true;
    });

    const startIndex = page * 5;
    return filteredReviews.slice(startIndex, startIndex + 5);
  }
}