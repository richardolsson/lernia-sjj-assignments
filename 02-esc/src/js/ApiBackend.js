export default class ApiBackend {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async loadAllChallenges() {
    const response = await fetch(this.apiUrl + '/challenges');
    const payload = await response.json();
    return payload.challenges;
  }

  async loadAvailableTimes(challenge, date) {
    const url = `${this.apiUrl}/booking/available-times?date=${date}&challenge=${challenge.data.id}`;
    const response = await fetch(url);
    const payload = await response.json();
    return payload.slots;
  }

  async submitBooking(booking) {
    const url = this.apiUrl + '/booking/reservations';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });
    const payload = await response.json();
    return payload.booking;
  }
}