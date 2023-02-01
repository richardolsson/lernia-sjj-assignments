import fetch from 'node-fetch';

const API_URL = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export default async function getRecentReviews() {
    const apiRes = await fetch(API_URL + '/reviews?populate=movie');
    const payload = await apiRes.json();
    return payload.data;
}