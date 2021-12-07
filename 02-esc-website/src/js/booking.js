export default class Booking {
  constructor(api, challenge) {
    this.api = api;
    this.challenge = challenge;
  }

  show() {
    const ctr = document.createElement('div');
    ctr.className = 'modal-container';
    document.body.append(ctr);

    const modal = document.createElement('div');
    modal.className = 'modal';
    ctr.append(modal);

    this.content = document.createElement('div');
    modal.append(this.content);

    this.container = ctr;

    this.renderStep1();
  }

  renderStep1() {
    const header = document.createElement('h1');
    header.innerText = `Book Room "${this.challenge.title}"`;
    this.content.append(header);

    const input = document.createElement('input');
    input.type = 'date';
    this.content.append(input);

    const button = document.createElement('button');
    button.innerText = 'Find available times';
    button.addEventListener('click', async () => {
      const date = input.value;
      const slots = await this.api.loadAvailableTimes(date);
      this.renderStep2(date, slots);
    });
    this.content.append(button);
  }

  renderStep2(date, slots) {
    this.content.innerText = '';

    const header = document.createElement('h1');
    header.innerText = `Book Room "${this.challenge.title}" (step 2)`;
    this.content.append(header);

    const nameInput = document.createElement('input');
    this.content.append(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    this.content.append(emailInput);

    const timeSelect = document.createElement('select');
    slots.forEach(slot => {
      const option = document.createElement('option');
      option.innerText = slot;
      option.value = slot;
      timeSelect.append(option);
    });
    this.content.append(timeSelect);

    const sizeSelect = document.createElement('select');
    const min = this.challenge.minParticipants;
    const max = this.challenge.maxParticipants;
    for (let i = min; i <= max; i++) {
      const option = document.createElement('option');
      option.innerText = (i > 1)? `${i} participants` : `${i} participant`;;
      option.value = i;
      sizeSelect.append(option);
    }
    this.content.append(sizeSelect);

    const button = document.createElement('button');
    button.innerText = 'Submit';
    button.addEventListener('click', async () => {
      await this.api.submitBooking(
        nameInput.value,
        emailInput.value,
        date,
        timeSelect.value,
        parseInt(sizeSelect.value),
      );

      this.renderStep3();
    });
    this.content.append(button);
  }

  renderStep3() {
    this.content.innerHTML = 'Thank you!';

    const button = document.createElement('button');
    button.innerText = 'Back to challenges';
    button.addEventListener('click', () => {
      this.container.remove();
    });
    this.content.append(button);
  }
}
