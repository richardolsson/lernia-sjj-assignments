export default class CMSAdapter {
  async getAllScreenings() {
    const cmsRes = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/screenings?populate=movie&pagination[pageSize]=100');
    const cmsPayload = await cmsRes.json();
    return cmsPayload.data;
  }
}