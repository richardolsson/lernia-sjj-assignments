import FetchAPIFacade from "./api/FetchAPIFacade";
import BookingModal from "./booking/BookingModal";
import initializeMobileMenu from "./initializeMobileMenu";
import Top3ChallengeList from "./lists/Top3ChallengeList";

const api = new FetchAPIFacade();
const list = new Top3ChallengeList(api);

let modal = null;

list.addEventListener('bookChallenge', (event) => {
  if (!modal) {
    modal = new BookingModal(api, event.challenge);
    const modalElem = modal.render();

    modal.addEventListener('close', () => {
      modalElem.remove();
      modal = null;
    });

    document.body.append(modalElem);
  }
});

const listElem = await list.render();

document.querySelector('.challenges__topThree').replaceWith(listElem);
listElem.className = 'challenges__topThree';

initializeMobileMenu();