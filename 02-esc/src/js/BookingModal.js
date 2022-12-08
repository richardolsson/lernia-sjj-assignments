export default class BookingModal {
    constructor() {
        this.step = 1;
    }

    render() {
        this.dialog = document.createElement('div');
        this.dialog.classList.add('modal');
        this.dialog.innerText = 'modal';
        return this.dialog;
    }

    open(challenge) {
        this.step = 1;
        this.challenge = challenge;

        this.dialog.classList.add('open');
        this.update();
    }

    update() {
        this.dialog.innerHTML = '';

        if (this.step == 1) {
            this.dialog.innerText = 'step 1';
            const button = document.createElement('button');
            button.innerText = 'continue';
            button.addEventListener('click', () => {
                this.step = 2;
                this.update();
            });
            this.dialog.append(button);
        } else if (this.step == 2) {
            this.dialog.innerText = 'step 2';
            const button = document.createElement('button');
            button.innerText = 'continue';
            button.addEventListener('click', () => {
                this.step = 3;
                this.update();
            });
            this.dialog.append(button);
        } else if (this.step == 3) {
            this.dialog.innerText = 'Thank you!';
            const button = document.createElement('button');
            button.innerText = 'close';
            button.addEventListener('click', () => {
                this.dialog.classList.remove('open');
            });
            this.dialog.append(button);
        }
    }
}