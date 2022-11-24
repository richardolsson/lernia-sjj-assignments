/**
 * API Adapter fulfills the role of retrieving data from the API.
*/
class APIAdapter {
    async loadChallenges() {
        const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
        const data = await res.json();

        return data.challenges;
    }
}