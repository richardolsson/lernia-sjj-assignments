import FakeBackend from "./src/js/backend/FakeBackend.js";
import AllChallengeList from "./src/js/challenges/AllChallengeList.js";
import Top3ChallengeList from "./src/js/challenges/Top3ChallengeList.js";

const navButton = document.querySelector('.header__navButton');
navButton.addEventListener('click', () => {
  const nav = document.querySelector('.header');
  nav.classList.toggle('header--navOpen');
});

const backend = new FakeBackend();
const challengesHeadline = document.querySelector('.challenges__headline')

if (challengesHeadline) {
  const list = new Top3ChallengeList(backend);
  const listElem = await list.render();
  challengesHeadline.after(listElem);
} else {
  const list = new AllChallengeList(backend);
  const listElem = await list.render();
  document.querySelector('main').append(listElem);
}