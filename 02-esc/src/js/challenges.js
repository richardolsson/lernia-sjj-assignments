import MockAPIFacade from './api/MockAPIFacade';
import FilteredChallengeList from './lists/FilteredChallengeList';

const api = new MockAPIFacade();
const list = new FilteredChallengeList(api);

const listElem = await list.render();
document.querySelector('.allChallenges').append(listElem);