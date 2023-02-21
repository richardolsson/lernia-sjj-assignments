export default class NextScreeningsResource {
  constructor(cmsAdapter) {
    this.cmsAdapter = cmsAdapter;
  }

  async retrieve() {
    const screenings = await this.cmsAdapter.getAllScreenings();
    return screenings.filter(screening => {
      const now = new Date();
      const startTime = new Date(screening.attributes.start_time);

      const fiveDaysFromNow = new Date();
      fiveDaysFromNow.setDate(fiveDaysFromNow.getDate() + 5);

      if (startTime < now) {
        return false;
      }

      if (startTime > fiveDaysFromNow) {
        return false;
      }

      return true;
    })
      .slice(0, 10);
  }
}