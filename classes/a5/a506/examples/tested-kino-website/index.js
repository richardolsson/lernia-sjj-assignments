import initApp from "./src/app.js";
import api from './src/movies.js';

const app = initApp(api);

app.listen(5080);
