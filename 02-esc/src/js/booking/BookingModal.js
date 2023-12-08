export default class BookingModal {
  constructor(api, challenge) {
    this.api = api;
    this.challenge = challenge;
  }

  render() {
    const elem = document.createElement('div');
    elem.className = 'bookingModal';
    elem.textContent = `Book "${this.challenge.data.title}"`;
    return elem;
  }
}