import FetchAPIFacade from './api/FetchAPIFacade';
import FilteredChallengeList from './lists/FilteredChallengeList';

const api = new FetchAPIFacade();
const list = new FilteredChallengeList(api);

const listElem = await list.render();
document.querySelector('.allChallenges').append(listElem);