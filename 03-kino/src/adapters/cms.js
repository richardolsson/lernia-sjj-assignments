import querystring from "querystring";
import fetch from "node-fetch";

export default function createAdapter() {
  const apiBase = "https://lernia-kino-cms.herokuapp.com/api";

  return {
    async loadAllScreenings() {
      const res = await fetch(apiBase + "/screenings?pagination[pageSize]=100");
      return await res.json();
    },

    async loadMovieScreenings(movieId) {
      const url =
        apiBase +
        `/screenings?filters[movie]=${movieId}&pagination[pageSize]=100`;
      const res = await fetch(url);
      return await res.json();
    },

    async loadMovieReviews(movieId, page) {
      const qs = querystring.stringify({
        "filters[movie]": movieId,
        "filters[verified]": true,
        "pagination[pageSize]": 5,
        "pagination[page]": page,
      });

      const url = apiBase + "/reviews?" + qs;

      const res = await fetch(url);
      return await res.json();
    },

    async postMovieReview(movieId, data) {
      const res = await fetch(apiBase + "/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            author: data.name,
            comment: data.comment,
            movie: movieId,
            rating: data.rating,
          },
        }),
      });

      return await res.json();
    },

    async loadAllMovieReviews(movieId) {
      const qs = querystring.stringify({
        "filters[movie]": movieId,
        "filters[verified]": true,
        "pagination[pageSize]": 100,
      });

      const url = apiBase + "/reviews?" + qs;
      const res = await fetch(url);
      return await res.json();
    }
  };
}
