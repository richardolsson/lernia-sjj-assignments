import express from "express";
import { engine } from "express-handlebars";

export default function initApp(api) {
  const app = express();

  app.engine("handlebars", engine());
  app.set("view engine", "handlebars");
  app.set("views", "./templates");

  app.get("/", async (req, res) => {
    const movies = await api.loadMovies();
    res.render("home", { movies });
  });

  app.get("/movies/:movieId", async (req, res) => {
    const movie = await api.loadMovie(req.params.movieId);
    res.render("movie", { movie });
  });

  app.use("/static", express.static("./static"));

  return app;
}