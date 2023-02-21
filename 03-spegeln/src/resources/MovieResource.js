export default class MovieResource {
  constructor(movieId, cmsAdapter) {
    this.id = movieId;
    this.cmsAdapter = cmsAdapter;
  }

  async retrieveScreenings() {
    const allScreenings = await this.cmsAdapter.getAllScreenings();
    return allScreenings.filter(screening => screening.attributes.movie.data.id == this.id);
  }
}