// Named import, importing one of the NAMED exports from module
import { start } from './firstmodule.js';

// Default import, importing the default export from module
// This means I don't have to specify the name from secondmodule.js,
// and can instead specify what name the import will have here.
import startSecond from './secondmodule.js';

start();
startSecond();