const cmsAdapter = {
  async loadAllReviews() {
    const response = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/reviews?populate=movie');
    const payload = await response.json();
    return payload.data;
  }
};

export default cmsAdapter;