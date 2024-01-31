export default async function getRecentReviews() {
    const response = await fetch('https://plankton-app-xhkom.ondigitalocean.app/api/reviews?populate=movie');
    const payload = await response.json();
    return payload.data;
}