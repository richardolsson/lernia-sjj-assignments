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

class APIAdapter {
    async loadChallenges() {
        const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
        const data = await res.json();

        /*
        const challenges = [];
        for (let i=0; i<data.challenges.length; i++) {
            challenges[i] = new Challenge(data.challenges[i]);
        }

        return challenges;
        */

        return data.challenges.map(data => new Challenge(data));
    }
}

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