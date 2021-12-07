import Challenge from "./challenges/challenge.js";

export default class EscAPI {
  async loadChallenges() {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json();
    return data.challenges.map(cd => new Challenge(cd));
  }

  async loadAvailableTimes(date) {
    const res = await fetch(`https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${date}`);
    const data = await res.json();
    return data.slots;
  }

  async submitBooking(name, email, date, time, participants) {
    await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
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
      }),
    });
    return true;
  }
}
