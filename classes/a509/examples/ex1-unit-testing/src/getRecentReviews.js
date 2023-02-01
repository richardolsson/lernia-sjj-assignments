export default async function getRecentReviews(apiAdapter) {
    const payload = await apiAdapter.loadAllReviews();
    const result = payload.data
        .map(item => ({
            id: item.id,
            ...item.attributes,
        }))
        .filter(review => {
            return review.rating >= 3;
        })
        .filter(review => {
            const createdAtDate = new Date(review.createdAt);
            const now = new Date();
            const diff = now - createdAtDate;
            const sixtyDays = 60 * 24 * 60 * 60 * 1000;
            return diff < sixtyDays;
        });

    return result;
}