import ApiBackend from "./ApiBackend";
import BookingModal from "./BookingModal";
import FullChallengeList from "./FullChallengeList";
import Top3ChallengeList from "./Top3ChallengeList";

const header = document.querySelector('.header');
const menuButton = document.createElement('button');
menuButton.classList.add('header__mobileMenuButton');
header.append(menuButton);

menuButton.addEventListener('click', () => {
  document.body.classList.toggle('body--menuOpen');
});

const backend = new ApiBackend('https://lernia-sjj-assignments.vercel.app/api');

const isHomePage = document.querySelector('.challenges .ctas') != null;

const challengeList = isHomePage ? new Top3ChallengeList(backend) : new FullChallengeList(backend);
challengeList.addEventListener('book', (event) => {
  const modal = new BookingModal(backend, event.challenge);
  const modalElem = modal.render(document);

  document.body.append(modalElem);
});
challengeList.start(document.querySelector('.challenges__listContainer'), document);