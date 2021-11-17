import { TimeCachedDataRetriever } from "./retrievers";
import { ChallengeGrid } from "./grid";
import { MinimumRatingFilter } from "./filters";

window.esc = {
  init: () => {
    const container = document.querySelector("ul");
    const retriever = new TimeCachedDataRetriever();
    const filter = new MinimumRatingFilter();

    filter.render(document.querySelector(".filters"));

    window.esc.grid = new ChallengeGrid(retriever, container, filter);
  },
};
