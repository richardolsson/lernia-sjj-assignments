export default async function getRecentReviews(cmsAdapater) {
  const allReviews = await cmsAdapater.loadAllReviews();

  const reviews = allReviews
    .filter(review => review.attributes.rating >= 3)
    .filter(review => {
      const now = new Date();
      const created = new Date(review.attributes.createdAt);

      const diff = now - created;
      const days = diff / 1000 / 60 / 60 / 24;

      return days < 60;
    });

  if (reviews.length < 3) {
    return [];
  }

  return reviews;
}