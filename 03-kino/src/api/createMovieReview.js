export default async function createMovieReview(cms, movieId, data) {
  const dataFromCms = await cms.postMovieReview(movieId, data);
}
