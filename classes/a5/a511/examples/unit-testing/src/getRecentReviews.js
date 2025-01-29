export default async function getRecentReviews(cmsAdapter) {
  const reviews = await cmsAdapter.loadAllReviews();

  const limit = new Date();
  limit.setDate(-60);

  const positiveReviews = reviews.filter((review) => {
    const reviewDate = new Date(review.attributes.createdAt);
    return review.attributes.rating >= 3 && reviewDate > limit;
  });

  if (positiveReviews.length >= 3) {
    return positiveReviews;
  } else {
    return [];
  }
}