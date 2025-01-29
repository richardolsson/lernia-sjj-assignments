const cmsAdapter = {
  loadAllReviews: async () => {
    const url = 'https://plankton-app-xhkom.ondigitalocean.app/api/reviews';
    const resp = await fetch(url);
    const payload = await resp.json();
    return payload.data;
  },
};

export default cmsAdapter;