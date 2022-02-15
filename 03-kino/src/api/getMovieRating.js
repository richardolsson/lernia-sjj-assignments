export default async function getMovieRating(cms, movieId) {
  const dataFromCms = await cms.loadAllMovieReviews(movieId);

  let sum = 0;
  dataFromCms.data.forEach(review => {
    sum += review.attributes.rating;
  });

  return {
    rating: sum / dataFromCms.data.length,
    source: "cms",
  };
}
