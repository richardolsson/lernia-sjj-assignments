import { TimeCachedDataRetriever } from "./retrievers";
import { ChallengeGrid } from "./grid";

window.esc = {
  init: () => {
    const container = document.querySelector("ul");
    const retriever = new TimeCachedDataRetriever();
    window.esc.grid = new ChallengeGrid(retriever, container);
  },
};
