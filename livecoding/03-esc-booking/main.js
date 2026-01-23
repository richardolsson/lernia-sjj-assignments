import FakeBackend from "./src/js/backend/FakeBackend.js";
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
const challenges = challengesData.map(data => new Challenge(data));

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