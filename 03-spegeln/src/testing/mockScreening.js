export default function mockScreening(id, config) {
  const movieId = config.movieId || 1;
  const startTime = config.startTime || '2023-02-22T13:37:00.000Z';

  return {
    "id": id,
    "attributes": {
      "start_time": startTime,
      "room": "Stora salongen",
      "createdAt": "2023-01-31T04:27:02.786Z",
      "updatedAt": "2023-01-31T04:27:02.786Z",
      "movie": {
        "data": {
          "id": movieId,
          "attributes": {
            "title": "The Shawshank Redemption",
            "imdbId": "tt0111161",
            "intro": "Over the course of several years, **two convicts form a friendship**, seeking consolation and, eventually, redemption through basic compassion.",
            "image": {
              "url": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            },
            "createdAt": "2023-01-23T07:17:34.923Z",
            "updatedAt": "2023-01-27T07:12:24.582Z",
            "publishedAt": "2023-01-23T07:17:39.384Z"
          }
        }
      }
    }
  }
}