const header = document.querySelector('.header');
const menuButton = document.createElement('button');
menuButton.classList.add('header__mobileMenuButton');
header.append(menuButton);

menuButton.addEventListener('click', () => {
  document.body.classList.toggle('body--menuOpen');
});