export default async function getMovieRating(cms, imdb, movieId) {
  const dataFromCms = await cms.loadAllMovieReviews(movieId);

  if (dataFromCms.data.length < 5) {
    const movieDataFromCms = await cms.loadMovie(movieId);
    const imdbId = movieDataFromCms.data.attributes.imdbId;

    const imdbData = await imdb.loadMovieInfo(imdbId);
    return {
      rating: imdbData.imdbRating / 2,
      source: "imdb",
    };
  } else {
    let sum = 0;
    dataFromCms.data.forEach((review) => {
      sum += review.attributes.rating;
    });

    return {
      rating: sum / dataFromCms.data.length,
      source: "cms",
    };
  }
}
