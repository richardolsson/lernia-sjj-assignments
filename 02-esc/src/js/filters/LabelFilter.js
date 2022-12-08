export default class LabelFilter extends EventTarget {
    init(challenges) {
        this.includedLabels = [];

        const labels = [];
        challenges.forEach(challenge => {
            challenge.labels.forEach(label => {
                if (!labels.includes(label)) {
                    labels.push(label);
                }
            });
        });

        this.div.innerHTML = '';

        labels.forEach(label => {
            const labelElem = document.createElement('span');
            labelElem.innerText = label;
            labelElem.classList.add('filter-label');
            labelElem.addEventListener('click', () => {
                if (this.includedLabels.includes(label)) {
                    labelElem.classList.remove('active');
                    this.includedLabels = this.includedLabels
                        .filter(candidate => label !== candidate);
                } else {
                    labelElem.classList.add('active');
                    this.includedLabels.push(label);
                }

                this.dispatchEvent(new Event('change'));
            });

            this.div.append(labelElem);
        });
    }

    render() {
        this.div = document.createElement('div');

        this.div.innerText = 'foo';

        return this.div;
    }

    filter(challenges) {
        return challenges.filter(challenge => {
            return this.includedLabels
                .every(label => challenge.labels.includes(label));
        });
    }
}