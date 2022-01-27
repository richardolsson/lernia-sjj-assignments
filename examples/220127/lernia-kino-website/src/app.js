import cookieParser from "cookie-parser";
import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import fetch from "node-fetch";
import api from "./movies.js";
import { getScreenings } from "./screenings.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

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
  const savedName = req.cookies.name || '';
  if (movie) {
    res.render("movie", { movie, reviews, savedName });
  } else {
    res.status(404).render("404");
  }
});

app.get("/api/screenings", async (req, res) => {
  res.json(await getScreenings(api));
});

app.get("/api/movies/:movieId/reviews", async (req, res) => {
  const reviews = await api.loadReviews(req.params.movieId);
  res.json({
    data: reviews.map(review => ({
      name: review.author,
      comment: review.comment,
    })),
  });
});

app.post("/api/movies/:movieId/reviews", async (req, res) => {
  const name = req.body.name || req.cookies.name;
  const resp = await fetch("https://lernia-kino-cms.herokuapp.com/api/reviews", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        author: name,
        comment: req.body.comment,
        rating: 0,
        movie: req.params.movieId,
      }
    }),
  });

  if (name) {
    res.cookie('name', name, { sameSite: 'strict' });
  }

  res.status(201).end();
});

app.use("/static", express.static("./static"));

export default app;
