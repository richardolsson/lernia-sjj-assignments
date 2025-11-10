const navButton = document.querySelector('.header__navButton');
navButton.addEventListener('click', () => {
  const nav = document.querySelector('.header__nav');
  nav.classList.toggle('header__nav--open');
});