export default class BookingModal {
  constructor(api, challenge) {
    this.api = api;
    this.challenge = challenge;
    this.step = 1;
    this.contentElem = null;
  }

  render() {
    const container = document.createElement('div');
    container.className = 'bookingModal';
    container.textContent = `Book "${this.challenge.data.title}"`;

    this.contentElem = document.createElement('div');
    container.append(this.contentElem);

    this.update();

    return container;
  }

  async update() {
    this.contentElem.innerHTML = '';

    if (this.step == 1) {
      this.contentElem.append(await this.renderStep1());
    } else if (this.step == 2) {
      this.contentElem.append(await this.renderStep2());
    } else if (this.step == 3) {
      this.contentElem.append(await this.renderStep3());
    }
  }

  async renderStep1() {
    const container = document.createElement('div');
    container.textContent = 'This is the form for step 1';

    const input = document.createElement('input');
    input.type = 'date';
    container.append(input);

    const button = document.createElement('button');
    button.textContent = 'Search available times';
    container.append(button);

    button.addEventListener('click', async () => {
      const date = input.value;
      this.timeSlots = await this.api.getTimeSlots(date);
      this.step = 2;
      this.update();
    });

    return container;
  }

  async renderStep2() {
    const container = document.createElement('div');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';
    container.append(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email'
    container.append(emailInput);

    const timeSelect = document.createElement('select');
    this.timeSlots.forEach((timeSlot) => {
      const option = document.createElement('option');
      option.textContent = timeSlot;
      option.value = timeSlot;
      timeSelect.append(option);
    });
    container.append(timeSelect);

    const countSelect = document.createElement('select');
    for (let i = this.challenge.minParticipants; i <= this.challenge.maxParticipants; i++) {
      const option = document.createElement('option');
      option.textContent = i;
      option.value = i;
      countSelect.append(option);
    }
    container.append(countSelect);

    const button = document.createElement('button');
    button.textContent = 'Submit booking';
    button.addEventListener('click', async () => {
      const timeSlot = timeSelect.value;
      const count = countSelect.value;

      await this.api.submitBooking({
        name: nameInput.value,
        email: emailInput.value,
        timeSlot: timeSlot,
        participants: count,
      });

      this.step = 3;
      this.update();
    });
    container.append(button);

    return container;
  }

  async renderStep3() {
    const container = document.createElement('div');
    container.innerText = 'Thank you!';
    return container;
  }
}