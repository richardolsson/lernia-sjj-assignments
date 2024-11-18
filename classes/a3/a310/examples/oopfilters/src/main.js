import FakeAPI from './api.js';
import AllChallengesList from './list.js';

const dataSource = new FakeAPI();
const list = new AllChallengesList(dataSource);
list.start();