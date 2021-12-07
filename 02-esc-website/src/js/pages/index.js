import EscAPI from "../api.js";
import { TopRatedChallengeGrid } from '../challenges/grid.js';

(async () => {
  const api = new EscAPI();
  const challenges = await api.loadChallenges();
  const grid = new TopRatedChallengeGrid(challenges);
  const list = grid.render();
  const ctas = document.querySelector('.challenges-cta');
  ctas.before(list);
})();
