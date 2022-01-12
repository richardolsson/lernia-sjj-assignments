import express from "express";
import fs from "fs/promises";
import Handlebars from "handlebars";

const app = express();

const menu = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

app.get("/", async (req, res) => {
  const htmlBuf = await fs.readFile("./templates/index.handlebars");
  const htmlText = htmlBuf.toString();

  const template = Handlebars.compile(htmlText);
  const rendered = template({
    menu: menu.map(item => {
      return {
        link: item.link,
        label: item.label,
        active: item.link == '/',
      };
    }),
    path: '/',
  });

  res.send(rendered);
});

app.use("/", express.static("./static"));

app.listen(5080);
