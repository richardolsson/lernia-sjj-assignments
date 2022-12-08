export default class RatingFilter extends EventTarget {
    constructor() {
        super();

        this.minWidget = new RatingWidget(0);
        this.minWidget.addEventListener('change', () => {
            if (this.minWidget.value > this.maxWidget.value) {
                this.maxWidget.update(this.minWidget.value);
            }

            this.dispatchEvent(new Event('change'));
        });
        this.maxWidget = new RatingWidget(5);
        this.maxWidget.addEventListener('change', () => {
            if (this.maxWidget.value < this.minWidget.value) {
                this.minWidget.update(this.maxWidget.value);
            }

            this.dispatchEvent(new Event('change'));
        });
    }

    render() {
        const div = document.createElement('div');

        const minElem = this.minWidget.render();
        div.append(minElem);

        const maxElem = this.maxWidget.render();
        div.append(maxElem);

        return div;
    }

    filter(challenges) {
        return challenges.filter(challenge => {
            return challenge.rating >= this.minWidget.value
                && challenge.rating <= this.maxWidget.value;
        });
    }
}

class RatingWidget extends EventTarget {
    constructor(value) {
        super();

        this.value = value;
        this.starElems = [];
    }

    update(value) {
        this.value = value;

        for (let i = 0; i < 5; i++) {
            const starValue = i + 1;
            const star = this.starElems[i];

            star.classList.toggle('active', starValue <= this.value);
        }

        this.ul.ariaValueNow = this.value;
        this.ul.ariaValueText = `${this.value} out of 5`;
    }

    render() {
        this.ul = document.createElement('ul');
        this.ul.role = 'meter';
        this.ul.ariaLabel = 'rating';
        this.ul.ariaValueMin = 0;
        this.ul.ariaValueMax = 5;
        this.ul.classList.add('rating');
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('li');
            star.classList.add('rating-star');
            this.ul.append(star);

            this.starElems.push(star);
        }

        this.starElems.forEach((elem, index) => {
            elem.addEventListener('click', () => {
                if (index == 0 && this.value == 1) {
                    this.update(0);
                } else {
                    this.update(index + 1);
                }
                this.dispatchEvent(new Event('change'));
            });
        });

        this.update(this.value);

        return this.ul;
    }
}