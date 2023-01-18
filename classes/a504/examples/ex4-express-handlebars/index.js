import { engine } from 'express-handlebars';
import express from 'express';

const MENU = [
    {
        label: 'Home',
        link: '/',
    },
    {
        label: 'About us',
        link: '/about',
    },
    {
        label: 'Contact us',
        link: '/contact',
    }
];

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

function menuWithActive(items, path) {
    return items.map(item => ({
        active: item.link == path,

        // Spread syntax
        ...item,
    }));
}

app.get('/', (req, res) => {
    res.render('index', {
        menu: menuWithActive(MENU, '/'),
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        menu: menuWithActive(MENU, '/about'),
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        menu: menuWithActive(MENU, '/contact'),
    });
});

app.use('/', express.static('./static'));

app.listen(3080);