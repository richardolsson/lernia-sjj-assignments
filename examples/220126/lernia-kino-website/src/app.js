import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import { loadMovie, loadMovies } from "./movies.js";
import { getScreenings } from "./screenings.js";

const app = express();

app.engine("handlebars", engine({
  helpers: {
    markdown: md => marked(md),
  },
}));
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (req, res) => {
  const movies = await loadMovies();
  res.render("home", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  if (movie) {
    res.render("movie", { movie });
  } else {
    res.status(404).render("404");
  }
});

app.get("/api/screenings", async (req, res) => {
  res.json(await getScreenings());
});

app.use("/static", express.static("./static"));

export default app;
