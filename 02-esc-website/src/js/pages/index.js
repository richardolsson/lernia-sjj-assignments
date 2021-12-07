import EscAPI from "../api";
import { TopRatedChallengeGrid } from '../challenges/grid';

(async () => {
  const api = new EscAPI();
  const challenges = await api.loadChallenges();
  const grid = new TopRatedChallengeGrid(challenges);
  const list = grid.render();
  const ctas = document.querySelector('.challenges-cta');
  ctas.before(list);
})();
