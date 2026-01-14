import fs from 'fs/promises';

const MENU = [
  {
    label: 'Home page',
    link: '/',
    id: 'index',
  },
  {
    label: 'About us',
    link: '/about',
    id: 'about',
  },
  {
    label: 'Contact us',
    link: '/contact',
    id: 'contact',
  },
];

export default async function renderPage(page) {
  const templateBuf = await fs.readFile('./templates/page.html');
  const templateText = templateBuf.toString();

  const contentBuf = await fs.readFile(`./content/${page}.html`);
  const contentText = contentBuf.toString();

  const htmlMenuItems = MENU.map((item) => {
    const isActivePage = item.id == page;
    const className = isActivePage? 'active' : 'inactive';
    return `<li class="menu-item ${className}"><a href="${item.link}">${item.label}</a></li>`;
  });

  const menuText = htmlMenuItems.join('\n');

  const htmlText = templateText
    .replace('::page::', contentText)
    .replace('//menu//', menuText);

  return htmlText;
}