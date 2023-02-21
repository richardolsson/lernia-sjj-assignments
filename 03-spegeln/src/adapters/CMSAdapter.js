const API_URL = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export default class CMSAdapter {
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