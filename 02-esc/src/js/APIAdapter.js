export default class APIAdapter {
    constructor() {
        this.baseUrl = 'https://lernia-sjj-assignments.vercel.app/api';
    }

    async loadChallenges() {
        const res = await fetch(this.baseUrl + '/challenges');
        const data = await res.json();
        return data.challenges;
    }

    async loadTimeSlots(challenge, date) {
        const res = await fetch(this.baseUrl +
            `/booking/available-times?challenge=${challenge.id}&date=${date}`);
        const data = await res.json();
        return data.slots;
    }
}