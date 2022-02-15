export default async function createMovieReview(cms, movieId, data) {
  if (!data.name) {
    return false;
  }

  if (typeof data.rating !== "number") {
    return false;
  }

  if (data.rating < 0 || data.rating > 5) {
    return false;
  }

  const dataFromCms = await cms.postMovieReview(movieId, data);
  return dataFromCms.data;
}
