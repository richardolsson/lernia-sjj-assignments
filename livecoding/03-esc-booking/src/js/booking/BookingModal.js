export default class BookingModal extends EventTarget {
  constructor(backend, challenge) {
    super();
    this.backend = backend;
    this.challenge = challenge;
  }

  render() {
    const dialog = document.createElement('dialog');

    this.renderPage1(dialog);

    return dialog;
  }

  renderPage1(container) {
    const page = document.createElement('div');

    const form = document.createElement('form');
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();

      this.date = dateInput.value;

      const { slots } = await this.backend.getAvailableTimes(this.challenge.data.id, dateInput.value)
      this.renderPage2(container, slots);
    });
    page.append(form);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    form.append(dateInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.append(submitButton);

    container.append(page);
  }

  renderPage2(container, slots) {

    const page = document.createElement('div');

    const form = document.createElement('form');
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();

      await this.backend.submitBooking(
        this.challenge.data.id,
        nameInput.value,
        emailInput.value,
        this.date,
        slotSelect.value,
        parseInt(participantsSelect.value),
      );

      this.renderPage3(container);
    });
    page.append(form);

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';
    form.append(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Email';
    form.append(emailInput);

    const slotSelect = document.createElement('select');
    slots.forEach((slot) => {
      const option = document.createElement('option');
      option.textContent = slot;
      option.value = slot;
      slotSelect.append(option);
    });
    form.append(slotSelect);

    const participantsSelect = document.createElement('select');
    const min = this.challenge.data.minParticipants;
    const max = this.challenge.data.maxParticipants;
    for (let i = min; i <= max; i++) {
      const option = document.createElement('option');
      option.textContent = i;
      option.value = i;
      participantsSelect.append(option);
    }
    form.append(participantsSelect);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.append(submitButton);

    container.innerHTML = '';
    container.append(page);
  }

  renderPage3(container) {
    const page = document.createElement('div');
    page.textContent = 'Done!';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
      this.dispatchEvent(new Event('close'));
    });
    page.append(closeButton);

    container.innerHTML = '';
    container.append(page);
  }
}
