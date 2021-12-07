import EscAPI from '../api';
import { FilteredChallengeGrid } from '../challenges/grid';

(async () => {
  const api = new EscAPI();
  const challenges = await api.loadChallenges();
  const grid = new FilteredChallengeGrid(challenges);
  const list = grid.render();
  document.querySelector('.challenges').append(list);
})();
