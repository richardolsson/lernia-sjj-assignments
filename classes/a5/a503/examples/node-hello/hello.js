import sayHello from "./lib/sayHello.js";

// Simple "Command Line Interface" (CLI)
const userName = process.argv[2];
sayHello(userName);