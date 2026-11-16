import FakeAPI from './api.js';
import { TextFilter, TypeFilter } from './filters.js';
import AllChallengesList from './list.js';

const textFilter = new TextFilter('2000');
const typeFilter = new TypeFilter('onsite');

const dataSource = new FakeAPI();
const list = new AllChallengesList(dataSource, typeFilter);
list.start();