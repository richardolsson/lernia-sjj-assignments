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

app.get('/', (req, res) => {
    res.render('index', {
        menu: MENU,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        menu: MENU,
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        menu: MENU,
    });
});

app.use('/', express.static('./static'));

app.listen(3080);