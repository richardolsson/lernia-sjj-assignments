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
  };
}
