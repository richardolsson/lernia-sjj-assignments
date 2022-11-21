// One way to import
import * as first from "./first-module";

// Another way to import
import { init as secondInit } from "./second-module";

// Making global variable available to HTML,
// from which esc.initAll() will be called
window.esc = {};
window.esc.initAll = function() {
  document.querySelector("button").addEventListener("click", () => {
    first.init();
    secondInit();
  });
}
