export default class BookingModal {
    constructor(api) {
        this.api = api;
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

            const input = document.createElement('input');
            input.type = 'date';
            input.value = new Date().toISOString().slice(0, 10);
            this.dialog.append(input);

            const button = document.createElement('button');
            button.innerText = 'continue';
            button.addEventListener('click', async () => {
                this.selectedDate = input.value;
                this.timeSlots = await this.api.loadTimeSlots(this.challenge, this.selectedDate);
                this.step = 2;
                this.update();
            });

            this.dialog.append(button);
        } else if (this.step == 2) {
            this.dialog.innerText = 'step 2';

            const timeSelect = document.createElement('select');
            this.timeSlots.forEach(time => {
                const option = document.createElement('option');
                option.value = time;
                option.innerText = time;
                timeSelect.append(option);
            });
            this.dialog.append(timeSelect);

            const countSelect = document.createElement('select');
            const { minParticipants, maxParticipants } = this.challenge;
            for (let i = minParticipants; i <= maxParticipants; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.innerText = `${i} participants`;
                countSelect.append(option);
            }
            this.dialog.append(countSelect);

            const nameInput = document.createElement('input');
            nameInput.placeholder = 'Name';
            this.dialog.append(nameInput);

            const emailInput = document.createElement('input');
            emailInput.placeholder = 'E-mail';
            this.dialog.append(emailInput);

            const button = document.createElement('button');
            button.innerText = 'continue';
            button.addEventListener('click', () => {
                this.step = 3;
                this.update();
            });
            this.dialog.append(button);

            button.addEventListener('click', async () => {
                await this.api.createBooking(
                    this.challenge,
                    nameInput.value,
                    emailInput.value,
                    this.selectedDate,
                    timeSelect.value,
                    countSelect.value
                );

                this.step = 3;
                this.update();
            });

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