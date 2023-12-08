import initializeMobileMenu from "./initializeMobileMenu";
import Top3ChallengeList from "./lists/Top3ChallengeList";

const list = new Top3ChallengeList();
const listElem = list.render();

document.querySelector('.challenges__topThree').replaceWith(listElem);
listElem.className = 'challenges__topThree';

initializeMobileMenu();