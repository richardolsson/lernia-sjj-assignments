export default function initializeMobileMenu() {
  const button = document.createElement('button');
  button.setAttribute('aria-label', 'Open navbar');
  button.setAttribute('aria-controls', 'navbar');
  button.classList.add('header__navbarButton');
  button.append(document.createElement('span'));
  document.querySelector('#navbar').before(button);

  button.addEventListener('click', () => {
    document.body.classList.toggle('navbarOpen');
  });
}