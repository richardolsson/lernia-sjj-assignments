export default class APIBackend {
  constructor(baseUrl = 'https://lernia-sjj-assignments.vercel.app/api') {
    this.baseUrl = baseUrl;
  }

  async getAllChallenges() {
    const response = await fetch(this.baseUrl + '/challenges');
    const payload = await response.json();
    return payload.challenges;
  }

  async getAvailableTimes(challengeId, date) {
    const response = await fetch(this.baseUrl + `/booking/available-times?date=${date}&challenge=${challengeId}`);
    const payload = await response.json();
    return payload;
  }

  async submitBooking(challenge, name, email, date, time, participantCount) {
    const response = await fetch(
      this.baseUrl + '/booking/reservations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          challenge,
          name,
          email,
          date,
          time,
          participants: participantCount,
        }),
      }
    );

    const payload = await response.json();
    return payload;
  }
}