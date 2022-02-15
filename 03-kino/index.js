import initApp from './src/app.js';
import createCmsAdapter from "./src/adapters/cms.js";
import createImdbAdapter from "./src/adapters/imdb.js";

const cms = createCmsAdapter();
const imdb = createImdbAdapter();
const app = initApp(cms, imdb);

app.listen(5080);
