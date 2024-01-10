import FetchAPIFacade from "./api/FetchAPIFacade";
import BookingModalManager from "./booking/BookingModalManager";
import initializeMobileMenu from "./initializeMobileMenu";
import Top3ChallengeList from "./lists/Top3ChallengeList";

const api = new FetchAPIFacade();
const list = new Top3ChallengeList(api);
const modalManager = new BookingModalManager(api, list);

modalManager.init(document.body);

const listElem = await list.render();

document.querySelector('.challenges__topThree').replaceWith(listElem);
listElem.className = 'challenges__topThree';

initializeMobileMenu();