import FakeBackend from "./src/js/backend/FakeBackend.js";
import Top3ChallengeList from "./src/js/challenges/Top3ChallengeList.js";

const navButton = document.querySelector('.header__navButton');
navButton.addEventListener('click', () => {
  const nav = document.querySelector('.header');
  nav.classList.toggle('header--navOpen');
});

const backend = new FakeBackend();
const top3List = new Top3ChallengeList(backend);
const listElem = await top3List.render();
document.querySelector('.challenges__headline').after(listElem);