import FakeAPI from './api.js';

const dataSource = new FakeAPI();
const challenges = await dataSource.loadChallenges();
console.log(challenges);