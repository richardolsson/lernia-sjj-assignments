export default async function getAllScreenings(cms) {
  return await cms.loadAllScreenings();
}
