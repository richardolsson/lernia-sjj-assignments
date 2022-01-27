import fetch from "node-fetch";

const API_BASE = 'https://lernia-kino-cms.herokuapp.com/api';

function simplifyCmsObject(obj) {
  return {
    id: obj.id,
    ...obj.attributes,
  };
}

export async function loadMovies() {
  const res = await fetch(API_BASE + '/movies');
  const payload = await res.json();
  return payload.data.map(simplifyCmsObject);
}

export async function loadMovie(id) {
  const res = await fetch(API_BASE + '/movies/' + id);
  const payload = await res.json();
  return simplifyCmsObject(payload.data);
}

export async function loadReviews(movieId) {
  const res = await fetch(API_BASE + '/reviews?filters[movie]=' + movieId);
  const payload = await res.json();
  return payload.data.map(simplifyCmsObject);
}

export async function loadScreenings() {
  const res = await fetch(API_BASE + '/screenings?populate=movie&pagination[pageSize]=1000');
  const payload = await res.json();
  return payload.data;
}

export default {
  loadMovies: loadMovies,
  loadMovie: loadMovie,
  loadReviews: loadReviews,
  loadScreenings: loadScreenings,
};
