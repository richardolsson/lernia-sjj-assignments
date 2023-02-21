const API_URL = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export default class CMSAdapter {
  async createMovieReview(movieId, review) {
    const cmsRes = await fetch(API_URL + '/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { movie: movieId, ...review } })
    });

    const cmsPayload = await cmsRes.json();
    return cmsPayload;
  }

  async getAllReviews() {
    const cmsRes = await fetch(API_URL + '/reviews?populate=movie&pagination[pageSize]=100');
    const cmsPayload = await cmsRes.json();
    return cmsPayload.data;
  }

  async getAllScreenings() {
    const cmsRes = await fetch(API_URL + '/screenings?populate=movie&pagination[pageSize]=100');
    const cmsPayload = await cmsRes.json();
    return cmsPayload.data;
  }
}