export default async function getRecentReviews(apiAdapter) {
    const payload = await apiAdapter.loadAllReviews();
    const result = payload.data
        .map(item => ({
            id: item.id,
            ...item.attributes,
        }))
        .filter(review => {
            return review.rating >= 3;
        });

    return result;
}