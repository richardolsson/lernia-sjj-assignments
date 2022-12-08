export default class APIAdapter {
    constructor() {
        this.baseUrl = 'https://lernia-sjj-assignments.vercel.app/api';
    }

    async loadChallenges() {
        const res = await fetch(this.baseUrl + '/challenges');
        const data = await res.json();
        return data.challenges;
    }
}