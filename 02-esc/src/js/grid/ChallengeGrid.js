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
        this.challenges = await this.api.loadChallenges();

        this.filter.init(this.challenges);

        this.filter.addEventListener('change', () => {
            this.update();
        });

        this.update();
    }

    update() {
        const filteredChallenges = this.filter.filter(this.challenges);

        const cards = filteredChallenges.map(challenge => new ChallengeCard(challenge));

        this.ul.innerHTML = '';
        cards.forEach(card => {
            const li = card.render();
            this.ul.append(li);
        });
    }
}