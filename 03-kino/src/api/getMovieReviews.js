export default async function getMovieReviews(cms, movieId, page) {
  return await cms.loadMovieReviews(movieId, page);
}
