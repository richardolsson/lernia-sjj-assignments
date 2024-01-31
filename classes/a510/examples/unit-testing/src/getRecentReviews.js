export default async function getRecentReviews(cmsAdapter) {
    const reviews = await cmsAdapter.loadAllReviews();

    return reviews.filter(review => review.attributes.rating >= 3);
}