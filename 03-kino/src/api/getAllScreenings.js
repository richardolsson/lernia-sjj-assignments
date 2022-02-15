export default async function getAllScreenings(cms) {
  const dataFromCms = await cms.loadAllScreenings();
  const now = new Date();
  const fiveDaysFromNow = new Date(
    new Date().getTime() + 5 * 24 * 60 * 60 * 1000,
  );
  return dataFromCms.data
    .filter(screening => {
      const date = new Date(screening.attributes.start_time);
      return date > now && date < fiveDaysFromNow;
    })
    .slice(0, 10);
}
