export default class BookingModal {
    render() {
        this.dialog = document.createElement('div');
        this.dialog.classList.add('modal');
        this.dialog.innerText = 'modal';
        return this.dialog;
    }

    open(challenge) {
        this.dialog.classList.add('open');
        this.dialog.innerText = challenge.title;
    }
}