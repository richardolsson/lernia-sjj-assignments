import Challenge from '../lists/Challenge';

export default class FetchAPIFacade {
  constructor(base) {
    this.base = base || 'https://lernia-sjj-assignments.vercel.app';
  }

  async getChallenges() {
    const res = await fetch(this.base + '/api/challenges');
    const data = await res.json();

    return data.challenges.map((challengeData) => {
      return new Challenge(challengeData);
    });
  }

  async getTimeSlots(date, challenge) {
    const res = await fetch(this.base + `/api/booking/available-times?date=${date}&challenge=${challenge.id}`);
    const data = await res.json();
    return data.slots;
  }

  async submitBooking(bookingData) {
    const res = await fetch(this.base + '/api/booking/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();

    return data.status == 'ok';
  }
}