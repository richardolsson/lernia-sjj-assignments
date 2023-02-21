import CMSAdapter from './src/adapters/CMSAdapter.js';
import OMDBAdapter from './src/adapters/OMDBAdapter.js';
import initApp from './src/app.js';

const cms = new CMSAdapter();
const omdb = new OMDBAdapter(process.env.OMDB_API_KEY);
const app = initApp(cms, omdb);

app.listen(5080);