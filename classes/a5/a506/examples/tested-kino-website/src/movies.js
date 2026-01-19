import fetch from "node-fetch";

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function loadMovies() {
  const res = await fetch(API_BASE + '/movies');
  const payload = await res.json();
  return payload.data.map(flattenMovie);
}

export async function loadMovie(id) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const payload = await res.json();
  return flattenMovie(payload.data);
}

function flattenMovie(movie) {
  return {
    id: movie.id,
    ...movie.attributes,
  };
}
