import FetchAPIFacade from './api/FetchAPIFacade';
import BookingModalManager from './booking/BookingModalManager';
import initializeMobileMenu from './initializeMobileMenu';
import FilteredChallengeList from './lists/FilteredChallengeList';

const api = new FetchAPIFacade();
const list = new FilteredChallengeList(api);
const modalManager = new BookingModalManager(api, list);

modalManager.init(document.body);

const listElem = await list.render();
document.querySelector('.allChallenges').append(listElem);

initializeMobileMenu();