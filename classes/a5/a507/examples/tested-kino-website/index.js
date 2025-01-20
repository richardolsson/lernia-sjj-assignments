import initApp from "./src/app.js";
import { loadMovie, loadMovies } from './src/movies.js';

const api = {
  loadMovie,
  loadMovies,
};

const app = initApp(api);

app.listen(5080);