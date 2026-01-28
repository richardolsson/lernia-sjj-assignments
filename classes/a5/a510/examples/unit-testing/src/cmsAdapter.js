async function loadAllReviews() {
  const response = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/reviews');
  const payload = await response.json();

  return payload.data;
}

const cmsAdapter = {
  loadAllReviews,
}

export default cmsAdapter;