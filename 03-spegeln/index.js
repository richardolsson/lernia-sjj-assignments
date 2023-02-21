import CMSAdapter from './src/adapters/CMSAdapter.js';
import initApp from './src/app.js';

const cms = new CMSAdapter();
const app = initApp(cms);

app.listen(5080);