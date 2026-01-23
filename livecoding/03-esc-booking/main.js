import FakeBackend from "./src/js/backend/FakeBackend.js";
import BookingModal from "./src/js/booking/BookingModal.js";
import AllChallengeList from "./src/js/challenges/AllChallengeList.js";
import Challenge from "./src/js/challenges/Challenge.js";
import Top3ChallengeList from "./src/js/challenges/Top3ChallengeList.js";

const navButton = document.querySelector('.header__navButton');
navButton.addEventListener('click', () => {
  const nav = document.querySelector('.header');
  nav.classList.toggle('header--navOpen');
});

const backend = new FakeBackend();
const challengesData = await backend.getAllChallenges();
const challenges = challengesData.map((data) => {
  const challenge = new Challenge(data);

  challenge.addEventListener('book', () => {
    const modal = new BookingModal(backend, challenge);
    const dialogElem = modal.render();

    document.querySelector('body').append(dialogElem);
    dialogElem.showModal();

    modal.addEventListener('close', () => {
      dialogElem.close();
      dialogElem.remove();
    });
  });

  return challenge;
});

const challengesHeadline = document.querySelector('.challenges__headline')

if (challengesHeadline) {
  const list = new Top3ChallengeList(challenges);
  const listElem = list.render();
  challengesHeadline.after(listElem);
} else {
  const list = new AllChallengeList(challenges);
  const listElem = list.render();
  document.querySelector('main').append(listElem);
}