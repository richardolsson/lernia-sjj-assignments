export default function mockReview(id, config) {
  const movieId = config.movieId || 1;
  const rating = config.rating || 0;

  return {
    "id": id,
    "attributes": {
      "comment": "I don't like this!",
      "rating": rating,
      "author": "Richard",
      "verified": false,
      "createdAt": "2023-01-31T08:32:50.177Z",
      "updatedAt": "2023-01-31T08:32:58.231Z",
      "movie": {
        "data": {
          "id": movieId,
          "attributes": {
            "title": "Encanto",
            "imdbId": "tt2953050",
            "intro": "A Colombian teenage girl has to face the frustration of being **the only member of her family** without magical powers.\n\n",
            "image": {
              "url": "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
            },
            "createdAt": "2023-01-23T06:46:24.765Z",
            "updatedAt": "2023-01-27T07:11:39.088Z",
            "publishedAt": "2023-01-23T06:46:29.324Z"
          }
        }
      }
    }
  }
}