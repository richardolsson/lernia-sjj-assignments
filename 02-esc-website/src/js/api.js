import Challenge from "./challenges/challenge.js";

export default class EscAPI {
  constructor() {
    this.base = 'https://lernia-sjj-assignments.vercel.app';
    //this.base = 'http://localhost:3000';
  }

  async loadChallenges() {
    const res = await fetch(this.base + '/api/challenges');
    const data = await res.json();
    return data.challenges.map(cd => new Challenge(cd));
  }

  async loadAvailableTimes(challenge, date) {
    const res = await fetch(this.base + `/api/booking/available-times?date=${date}&challenge=${challenge.id}`);
    const data = await res.json();
    return data.slots;
  }

  async submitBooking(challenge, name, email, date, time, participants) {
    await fetch(this.base + '/api/booking/reservations', {
      method: 'POST',
      cors: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        date,
        time,
        participants,
        challenge: challenge.id,
      }),
    });
    return true;
  }
}
