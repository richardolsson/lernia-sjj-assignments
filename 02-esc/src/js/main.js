import APIAdapter from './APIAdapter';
import ChallengeGrid from './grid/ChallengeGrid';
import CombinedFilter from './filters/CombinedFilter';
import TopThreeFilter from './filters/TopThreeFilter';

window.esc = {
    CombinedFilter,
    TopThreeFilter,

    init: (filter, container) => {
        const api = new APIAdapter();
        const grid = new ChallengeGrid(api, filter);

        const ul = grid.render();
        container.append(ul);

        grid.init();
    },
};