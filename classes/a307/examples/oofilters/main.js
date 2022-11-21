/**
 * ChallengeList fulfills the role of rendering and updating the DOM
 * for all challenges. It loads challenge data via an APIAdapter, and
 * delegates rendering of filters and challenges to their respective
 * classes.
*/
class ChallengeList {
    async render() {
        const api = new APIAdapter();
        const challenges = await api.loadChallenges();

        const ctr = document.createElement('div');

        this.filter = new FilterCollection(this);
        const filterInterface = this.filter.render();
        ctr.append(filterInterface);

        this.ul = document.createElement('ul');
        ctr.append(this.ul);

        this.challenges = challenges;
        this.update();

        return ctr;
    }

    update() {
        this.ul.innerHTML = '';
        for (let i = 0; i < this.challenges.length; i++) {
            if (this.filter.challengeDoesMatch(this.challenges[i])) {
                const li = this.challenges[i].render();
                this.ul.append(li);
            }
        }
    }
}

/**
 * API Adapter fulfills the role of retrieving data from the API. In this
 * example, ChallengeList uses the adapter to load challenge data.
*/
class APIAdapter {
    async loadChallenges() {
        const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
        const data = await res.json();

        return data.challenges.map(data => new Challenge(data));
    }
}

/**
 * Challenge fulfills the role of rendering and challenge data as a DOM
 * element (to be used in a list).
*/
class Challenge {
    constructor(data) {
        this.data = data;
    }

    render() {
        const container = document.createElement('li');

        const title = document.createElement('span');
        title.innerText = this.data.title;
        container.append(title);

        const rating = document.createElement('span');
        rating.innerText = this.data.rating;
        container.append(rating);

        return container;
    }
}

/*********************************************************************
 * FILTER role
 * The filter role can be fulfilled by multiple classes (types of objects)
 * in different ways. The role includes rendering a user interface for the
 * filter, accepting input through that interface. It also includes a
 * method that can be invoked to check whether a single challenge matches
 * the filter, which is used by ChallengeList to decide which challenges
 * to render.
*/

/**
 * FilterCollection fulfills the filter role, by delegating messages
 * to multiple actual filters.
*/
class FilterCollection {
    constructor(list) {
        this.list;
        this.filters = [
            new RatingFilter(list),
            new StringFilter(list),
        ];
    }

    challengeDoesMatch(challenge) {
        return this.filters.every(filter => filter.challengeDoesMatch(challenge));
    }

    render() {
        const ctr = document.createElement('div');
        this.filters.forEach(filter => ctr.append(filter.render()));
        return ctr;
    }
}

/**
 * RatingFilter fulfills the filter role, by rendering a range input
 * (slider) and checking whether challenges, when filtered, have a
 * rating greater than the rating entered by the user via the input.
*/
class RatingFilter {
    constructor(list) {
        this.minRating = 0;
        this.list = list;
    }

    challengeDoesMatch(challenge) {
        if (challenge.data.rating >= this.minRating) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const input = document.createElement('input');
        input.type = 'range';
        input.min = 0;
        input.max = 5;
        input.value = 0;
        input.addEventListener('change', (ev) => {
            this.minRating = ev.target.value;
            this.list.update();
        });
        return input;
    }
}

/**
 * StringFilter fulfills the filter role, by rendering a text input
 * and checking whether challenges, when filtered, have a title that
 * include the text entered in the input.
*/
class StringFilter {
    constructor(list) {
        this.list = list;
        this.filterText = '';
    }

    challengeDoesMatch(challenge) {
        if (challenge.data.title.includes(this.filterText)) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const input = document.createElement('input');
        input.type = 'text';
        input.addEventListener('keyup', (ev) => {
            this.filterText = ev.target.value;
            this.list.update();
        });
        return input;
    }
}