import BookingModal from "./BookingModal";

export default class BookingModalManager {
  constructor(api, list) {
    this.api = api;
    this.list = list;
    this.modal = null;
  }

  init(container) {
    this.list.addEventListener('bookChallenge', (event) => {
      if (!this.modal) {
        this.modal = new BookingModal(this.api, event.challenge);
        const modalElem = this.modal.render();

        this.modal.addEventListener('close', () => {
          modalElem.remove();
          this.modal = null;
        });

        container.append(modalElem);
      }
    });
  }
}