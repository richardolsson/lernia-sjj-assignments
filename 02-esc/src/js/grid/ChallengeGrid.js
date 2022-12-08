import ChallengeCard from './ChallengeCard';

export default class ChallengeGrid {
    constructor(api, filter) {
        this.api = api;
        this.filter = filter;
    }

    render() {
        this.ul = document.createElement('ul');
        this.ul.classList.add('challenge-list');
        return this.ul;
    }

    async init() {
        const challenges = await this.api.loadChallenges();
        console.log(challenges);

        const cards = challenges.map(challenge => new ChallengeCard(challenge));

        this.ul.innerHTML = '';
        cards.forEach(card => {
            const li = card.render();
            this.ul.append(li);
        });
    }
}