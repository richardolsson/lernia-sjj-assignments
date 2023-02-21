export default class OMDBAdapter {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  async getMovieRating(imdbId) {
    const omdbRes = await fetch(`https://www.omdbapi.com/?apikey=${this.apiKey}&i=${imdbId}`);
    const omdbPayload = await omdbRes.json();
    return parseFloat(omdbPayload.imdbRating);
  }
}