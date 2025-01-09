// ES Module import
import { sayHello } from './lib/hello.js';

// Node legacy import
//const sayHello = require('./lib/hello').sayHello;


// Command line interface (CLI)
const nameParam = process.argv[2];
sayHello(nameParam);