import fetch from 'node-fetch';

const API_URL = 'https://plankton-app-xhkom.ondigitalocean.app/api';

const apiAdapter = {
    loadAllReviews: async () => {
        const res = await fetch(API_URL + '/reviews?populate=movie');
        const payload = await res.json();
        return payload;
    }
};

export default apiAdapter;