import express from 'express';
import { engine } from "express-handlebars";
import { marked } from "marked";

import { loadMovie, loadMovies } from "../movies.js";

const router = express();

router.engine("handlebars", engine({
  helpers: {
    markdown: md => marked(md),
  },
}));
router.set("view engine", "handlebars");
router.set("views", "./templates");

router.get("/", async (req, res) => {
  const movies = await loadMovies();
  res.render("home", { movies });
});

router.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  if (movie) {
    res.render("movie", { movie });
  } else {
    res.status(404).render("404");
  }
});

router.use("/static", express.static("./static"));

export default router;