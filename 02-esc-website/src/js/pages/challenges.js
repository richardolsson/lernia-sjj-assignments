import EscAPI from '../api.js';
import { FilteredChallengeGrid } from '../challenges/grid.js';

(async () => {
  const api = new EscAPI();
  const challenges = await api.loadChallenges();
  const grid = new FilteredChallengeGrid(challenges);
  const list = grid.render();
  document.querySelector('.challenges').append(list);
})();
