import TypeFilter from './TypeFilter';
import LabelFilter from './LabelFilter';
import RatingFilter from './RatingFilter';
import TextFilter from './TextFilter';

export default class CombinedFilter extends EventTarget {
    constructor() {
        super();

        this.labelFilter = new LabelFilter();
        this.ratingFilter = new RatingFilter();
        this.textFilter = new TextFilter();

        this.typeFilter = new TypeFilter();
        this.typeFilter.addEventListener('change', () => {
            this.dispatchEvent(new Event('change'));
        });
    }

    render() {
        const div = document.createElement('div');

        const typeElem = this.typeFilter.render();
        div.append(typeElem);

        return div;
    }

    filter(challenges) {
        return this.typeFilter.filter(challenges);
    }
}