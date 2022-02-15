import fetch from "node-fetch";


export default function createAdapter() {
  const apiKey = process.env.OMDB_API_KEY;

  return {
    async loadMovieInfo(imdbId) {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`);
      return await res.json();
    },
  };
}
