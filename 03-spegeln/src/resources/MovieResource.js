export default class MovieResource {
  constructor(movieId, cmsAdapter) {
    this.id = movieId;
    this.cmsAdapter = cmsAdapter;
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
    return allReviews.filter(review => {
      if (review.attributes.movie.data.id != this.id) {
        return false;
      }

      return true;
    });
  }
}