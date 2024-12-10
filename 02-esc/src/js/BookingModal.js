export default class BookingModal {
  constructor(backend, challenge) {
    this.backend = backend;
    this.challenge = challenge;
  }

  render(elemFactory) {
    this.container = elemFactory.createElement('div');

    this.container.className = 'bookingModal';

    this.step1 = this.renderStep1(elemFactory);
    this.container.append(this.step1);

    return this.container;
  }

  renderStep1(elemFactory) {
    const container = elemFactory.createElement('div');

    const headline = elemFactory.createElement('h1');
    headline.textContent = `Book room '${this.challenge.data.title}' (step 1)`;
    container.append(headline);

    const text = elemFactory.createElement('p');
    text.textContent = 'What date would you like to come?';
    container.append(text);

    const label = elemFactory.createElement('label');
    label.textContent = 'Date';
    container.append(label);

    const input = elemFactory.createElement('input');
    input.type = 'date';
    label.append(input);

    const button = elemFactory.createElement('button');
    button.textContent = 'Search available times';
    button.addEventListener('click', async () => {
      this.date = input.value;
      this.slots = await this.backend.loadAvailableTimes(this.challenge, this.date);

      this.step2 = this.renderStep2(elemFactory);
      this.step1.replaceWith(this.step2);
    });
    container.append(button);

    return container;
  }

  renderStep2(elemFactory) {
    const container = elemFactory.createElement('div');

    const headline = elemFactory.createElement('h1');
    headline.textContent = `Book room '${this.challenge.data.title}' (step 2)`;
    container.append(headline);

    const nameLabel = elemFactory.createElement('label');
    nameLabel.textContent = 'Name';
    container.append(nameLabel);

    const nameInput = elemFactory.createElement('input');
    nameInput.type = 'text';
    nameLabel.append(nameInput);

    const emailLabel = elemFactory.createElement('label');
    emailLabel.textContent = 'Email';
    container.append(emailLabel);

    const emailInput = elemFactory.createElement('input');
    emailInput.type = 'email';
    emailLabel.append(emailInput);

    const slotsLabel = elemFactory.createElement('label');
    slotsLabel.textContent = 'What time?';
    container.append(slotsLabel);

    const slotsSelect = elemFactory.createElement('select');
    this.slots.forEach(slot => {
      const option = elemFactory.createElement('option');
      option.textContent = slot;
      option.value = slot;
      slotsSelect.append(option);
    });
    slotsLabel.append(slotsSelect);

    const participantsLabel = elemFactory.createElement('label');
    participantsLabel.textContent = 'How many participants?'
    container.append(participantsLabel);

    const participantsSelect = elemFactory.createElement('select');
    const { minParticipants, maxParticipants } = this.challenge.data;
    for (let i = minParticipants; i <= maxParticipants; i++) {
      const option = elemFactory.createElement('option');
      option.value = i;
      option.textContent = `${i} participants`;
      participantsSelect.append(option);
    }
    participantsLabel.append(participantsSelect);

    const button = elemFactory.createElement('button');
    button.textContent = 'Submit booking';
    button.addEventListener('click', async () => {
      await this.backend.submitBooking({
        challenge: this.challenge.data.id,
        name: nameInput.value,
        email: emailInput.value,
        date: this.date,
        time: slotsSelect.value,
        participants: parseInt(participantsSelect.value),
      });

      this.step3 = this.renderStep3(elemFactory);
      this.step2.replaceWith(this.step3);
    });
    container.append(button);

    return container;
  }

  renderStep3(elemFactory) {
    const container = elemFactory.createElement('div');

    const header = elemFactory.createElement('h1');
    header.textContent = 'Thank you!';
    container.append(header);

    const link = elemFactory.createElement('a');
    link.href = '#';
    link.textContent = 'Back to challenges';
    link.addEventListener('click', () => {
      this.container.remove();
    });
    container.append(link);

    return container;
  }
}