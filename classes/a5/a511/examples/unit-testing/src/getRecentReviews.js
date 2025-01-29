export default async function getRecentReviews(cmsAdapter) {
  const reviews = await cmsAdapter.loadAllReviews();

  // TODO: logic goes here

  return reviews;
}