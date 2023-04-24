import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import apiRouter from './routes/api';
import pageRouter from './routes/pages';

const app = express();
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/static', express.static('./static'));

const MONGODB_URL = process.env.MONGODB_URL as string;

mongoose.connect(MONGODB_URL);

app.use(apiRouter);
app.use(pageRouter);

export default app;