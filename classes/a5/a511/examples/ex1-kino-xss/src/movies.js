import fetch from "node-fetch";

const API_BASE = 'https://plankton-app-xhkom.ondigitalocean.app/api';

function simplifyCmsObject(obj) {
  return {
    id: obj.id,
    ...obj.attributes,
  };
}

export async function createReview(movieId, name, comment) {
  await fetch(API_BASE + '/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        author: name,
        comment: comment,
        rating: 0,
        movie: movieId,
      }
    }),
  });
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

export default {
  createReview: createReview,
  loadMovies: loadMovies,
  loadMovie: loadMovie,
  loadReviews: loadReviews,
};
