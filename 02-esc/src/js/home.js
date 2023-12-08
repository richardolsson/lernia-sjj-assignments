import MockAPIFacade from "./api/MockAPIFacade";
import BookingModal from "./booking/BookingModal";
import initializeMobileMenu from "./initializeMobileMenu";
import Top3ChallengeList from "./lists/Top3ChallengeList";

const api = new MockAPIFacade();
const list = new Top3ChallengeList(api);

let modal = null;

list.addEventListener('bookChallenge', (event) => {
  if (!modal) {
    modal = new BookingModal(api, event.challenge);
    const modalElem = modal.render();

    document.body.append(modalElem);
  }
});

const listElem = await list.render();

document.querySelector('.challenges__topThree').replaceWith(listElem);
listElem.className = 'challenges__topThree';

initializeMobileMenu();