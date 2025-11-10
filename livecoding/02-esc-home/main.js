const navButton = document.querySelector('.header__navButton');
navButton.addEventListener('click', () => {
  const nav = document.querySelector('.header');
  nav.classList.toggle('header--navOpen');
});