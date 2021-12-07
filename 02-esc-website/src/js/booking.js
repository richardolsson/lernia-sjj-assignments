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
      console.log(input.value);
      const slots = await this.api.loadAvailableTimes(input.value);
      this.renderStep2(slots);
    });
    this.content.append(button);
  }

  renderStep2(slots) {
    console.log(slots);
  }
}
