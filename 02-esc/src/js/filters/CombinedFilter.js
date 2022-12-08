import TypeFilter from './TypeFilter';
import LabelFilter from './LabelFilter';
import RatingFilter from './RatingFilter';
import TextFilter from './TextFilter';

export default class CombinedFilter extends EventTarget {
    constructor() {
        super();

        this.labelFilter = new LabelFilter();
        this.labelFilter.addEventListener('change', () => {
            this.dispatchEvent(new Event('change'));
        });

        this.ratingFilter = new RatingFilter();

        this.textFilter = new TextFilter();
        this.textFilter.addEventListener('change', () => {
            this.dispatchEvent(new Event('change'));
        });

        this.typeFilter = new TypeFilter();
        this.typeFilter.addEventListener('change', () => {
            this.dispatchEvent(new Event('change'));
        });
    }

    init(challenges) {
        this.labelFilter.init(challenges);
    }

    render() {
        const div = document.createElement('div');

        const labelElem = this.labelFilter.render();
        div.append(labelElem);

        const typeElem = this.typeFilter.render();
        div.append(typeElem);

        const textElem = this.textFilter.render();
        div.append(textElem);

        return div;
    }

    filter(challenges) {
        const labelFilteredChallenges = this.labelFilter.filter(challenges);
        const textFilteredChallenges = this.textFilter.filter(labelFilteredChallenges);

        return this.typeFilter.filter(textFilteredChallenges);
    }
}