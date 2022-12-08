import APIAdapter from './APIAdapter';
import BookingModal from './BookingModal';
import ChallengeGrid from './grid/ChallengeGrid';
import CombinedFilter from './filters/CombinedFilter';
import TopThreeFilter from './filters/TopThreeFilter';

window.esc = {
    CombinedFilter,
    TopThreeFilter,

    init: (filter, gridContainer, modalContainer) => {
        const api = new APIAdapter();
        const modal = new BookingModal();
        const grid = new ChallengeGrid(api, filter);

        grid.addEventListener('select', (event) => {
            modal.open(event.challenge);
        });

        if (!modalContainer) {
            modalContainer = document.body;
        }

        const modalElem = modal.render();
        modalContainer.append(modalElem);

        const ul = grid.render();
        gridContainer.append(ul);

        grid.init();
    },
};