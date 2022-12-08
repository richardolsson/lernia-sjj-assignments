export default class TextFilter extends EventTarget {
    constructor() {
        super();

        this.text = '';
    }

    render() {
        const div = document.createElement('div');

        const input = document.createElement('input');
        input.addEventListener('keyup', () => {
            this.text = input.value.toLowerCase();
            this.dispatchEvent(new Event('change'));
        });

        div.append(input);

        return div;
    }

    filter(challenges) {
        return challenges.filter(challenge => {
            if (challenge.title.toLowerCase().includes(this.text)) {
                return true;
            } else if (challenge.description.toLowerCase().includes(this.text)) {
                return true;
            } else {
                return false;
            }
        });
    }
}