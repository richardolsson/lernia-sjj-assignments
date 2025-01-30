import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import api from "./movies.js";
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", engine({
  helpers: {
    markdown: md => marked(md),
  },
}));
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {
  const movies = await api.loadMovies();
  res.render("home", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await api.loadMovie(req.params.movieId);
  const reviews = await api.loadReviews(req.params.movieId);
  if (movie) {
    res.render("movie", { movie, reviews });
  } else {
    res.status(404).render("404");
  }
});

app.post("/movies/:movieId/reviews", async (req, res) => {
  const name = req.body.name;
  const window = new JSDOM('').window;
  const DOMPurify = createDOMPurify(window);

  console.log(req.body.comment);
  const comment = DOMPurify.sanitize(req.body.comment);
  console.log(comment);

  await api.createReview(req.params.movieId, name, comment);

  res.redirect(`/movies/${req.params.movieId}`);
});

app.use("/static", express.static("./static"));

export default app;
