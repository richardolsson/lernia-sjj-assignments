import initApp from './src/app.js';
import createCmsAdapter from "./src/adapters/cms.js";

const cms = createCmsAdapter();
const app = initApp(cms);

app.listen(5080);
