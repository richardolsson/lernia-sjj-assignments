export default async function getMovieScreenings(cms, movieId) {
  const dataFromCms = await cms.loadMovieScreenings(movieId);
  const now = new Date();
  return dataFromCms.data.filter(screening => {
    return new Date(screening.attributes.start_time) > now;
  });
}
