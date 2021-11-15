import { doFirst } from "./first-module";
import { doSecond } from "./second-module";

window.esc = {};
window.esc.initAll = function() {
  document.querySelector("button").addEventListener("click", () => {
    doFirst();
    doSecond();
  });
}
