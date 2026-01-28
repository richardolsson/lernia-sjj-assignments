export default async function getRecentReviews(cmsAdapater) {
  const reviews = await cmsAdapater.loadAllReviews();

  // TODO: Logic goes here

  return reviews;
}