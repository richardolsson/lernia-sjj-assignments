import fs from 'fs/promises';

const MENU = [
  {
    label: 'Home page',
    id: 'index',
    link: '/',
  },
  {
    label: 'About us',
    id: 'about',
    link: '/about',
  },
  {
    label: 'Contact us',
    id: 'contact',
    link: '/contact',
  }
];

export default async function renderPage(response, page) {
  response.render(page, {
    menuItems: MENU.map((item) => {
      return {
        label: item.label,
        link: item.link,
        active: item.id == page,
      };
    })
  });
}