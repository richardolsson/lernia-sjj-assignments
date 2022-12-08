export default class TypeFilter extends EventTarget {
    constructor() {
        super();

        this.includeOnline = true;
        this.includeOnsite = true;
    }

    render() {
        const div = document.createElement('div');

        const onlineCheckbox = document.createElement('input');
        onlineCheckbox.type = 'checkbox';
        onlineCheckbox.checked = true;
        onlineCheckbox.addEventListener('change', () => {
            this.includeOnline = onlineCheckbox.checked;
            this.dispatchEvent(new Event('change'));
        });

        const onlineLabel = document.createElement('label');
        onlineLabel.append(onlineCheckbox);
        onlineLabel.append('Include online challenges');
        div.append(onlineLabel);

        const onsiteCheckbox = document.createElement('input');
        onsiteCheckbox.type = 'checkbox';
        onsiteCheckbox.checked = true;
        onsiteCheckbox.addEventListener('change', () => {
            this.includeOnsite = onsiteCheckbox.checked;
            this.dispatchEvent(new Event('change'));
        });

        const onsiteLabel = document.createElement('label');
        onsiteLabel.append(onsiteCheckbox);
        onsiteLabel.append('Include onsite challenges');
        div.append(onsiteLabel);

        return div;
    }

    filter(challenges) {
        return challenges.filter((challenge) => {
            if (challenge.type == 'online' && this.includeOnline) {
                return true;
            } else if (challenge.type == 'onsite' && this.includeOnsite) {
                return true;
            } else {
                return false;
            }
        });
    }
}