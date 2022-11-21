class ChallengeList {
    async render() {
        const api = new APIAdapter();
        const challenges = await api.loadChallenges();

        const ul = document.createElement('ul');

        /*
        for (let i = 0; i < challenges.length; i++) {
            const li = challenges[i].render();
            ul.append(li);
        }
        */
        challenges.forEach(challenge => ul.append(challenge.render()));

        return ul;
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
    challengeDoesMatch(challenge) {
    }
}

class RatingFilter {
    challengeDoesMatch(challenge) {
    }
}

class StringFilter {
    challengeDoesMatch(challenge) {
    }
}
