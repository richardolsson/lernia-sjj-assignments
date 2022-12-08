export default class ChallengeGrid {
    constructor(api, filter) {
        this.api = api;
        this.filter = filter;
    }

    render(element) {
        const ul = document.createElement('ul');
        return ul;
    }

    async init() {
        const challenges = await this.api.loadChallenges();
        // TODO: Render challenges
    }
}