import ChallengeCard from './ChallengeCard';
import ChallengeEvent from './ChallengeEvent';

export default class ChallengeGrid extends EventTarget {
    constructor(api, filter) {
        super();

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

        this.ul.innerHTML = '';

        if (filteredChallenges.length == 0) {
            this.ul.innerText = 'No matching challenges';
            return;
        }

        const cards = filteredChallenges.map(challenge => {
            const card = new ChallengeCard(challenge)
            card.addEventListener('select', (event) => {
                this.dispatchEvent(new ChallengeEvent('select', event.challenge));
            });
            return card;
        });

        cards.forEach(card => {
            const li = card.render();
            this.ul.append(li);
        });
    }
}