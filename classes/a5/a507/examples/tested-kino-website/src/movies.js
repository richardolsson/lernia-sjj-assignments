import fetch from "node-fetch";

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

function toMovieObject(apiObject) {
  return {
    id: apiObject.id,
    ...apiObject.attributes,
  }
}

export async function loadMovies() {
  const res = await fetch(API_BASE + '/movies');
  const payload = await res.json();
  return payload.data.map(toMovieObject);
}

export async function loadMovie(id) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const payload = await res.json();
  return toMovieObject(payload.data);
}
