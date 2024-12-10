import ApiBackend from "./ApiBackend";
import Top3ChallengeList from "./Top3ChallengeList";

const header = document.querySelector('.header');
const menuButton = document.createElement('button');
menuButton.classList.add('header__mobileMenuButton');
header.append(menuButton);

menuButton.addEventListener('click', () => {
  document.body.classList.toggle('body--menuOpen');
});

const backend = new ApiBackend('https://lernia-sjj-assignments.vercel.app/api');

const top3List = new Top3ChallengeList(backend);
top3List.start(document.querySelector('.challenges__listContainer'), document);