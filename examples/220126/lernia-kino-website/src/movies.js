import fetch from "node-fetch";

const API_BASE = 'https://lernia-kino-cms.herokuapp.com/api';

function simplifyMovieObject(movie) {
  return {
    id: movie.id,
    ...movie.attributes,
  };
}

export async function loadMovies() {
  const res = await fetch(API_BASE + '/movies');
  const payload = await res.json();
  return payload.data.map(simplifyMovieObject);
}

export async function loadMovie(id) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const payload = await res.json();
  return simplifyMovieObject(payload.data);
}

export async function loadScreenings() {
  const res = await fetch(API_BASE + '/screenings?populate=movie&pagination[pageSize]=1000');
  const payload = await res.json();
  return payload.data;
}
