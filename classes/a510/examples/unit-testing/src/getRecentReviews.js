export default async function getRecentReviews(cmsAdapter) {
    const reviews = await cmsAdapter.loadAllReviews();

    const sixtyDaysAgo = new Date();
    sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);

    return reviews
        .filter(review => review.attributes.rating >= 3)
        .filter(review => {
            const createdDate = new Date(review.attributes.createdAt);
            return createdDate > sixtyDaysAgo;
        });
}