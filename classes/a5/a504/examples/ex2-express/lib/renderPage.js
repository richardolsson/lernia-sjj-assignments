import fs from 'fs/promises';

export default async function renderPage(page) {
  const templateBuf = await fs.readFile('./templates/page.html');
  const templateText = templateBuf.toString();

  const contentBuf = await fs.readFile(`./content/${page}.html`);
  const contentText = contentBuf.toString();

  const htmlText = templateText.replace('::page::', contentText);

  return htmlText;
}