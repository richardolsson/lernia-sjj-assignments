export default class RatingWidget extends EventTarget {
  constructor(rating) {
    super();

    this.min = -Infinity;
    this.max = Infinity;

    this.rating = rating;
    this.stars = [];
  }

  render() {
    this.starList = document.createElement('ul');
    this.starList.className = 'challenge-rating';
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('li');
      star.className = 'challenge-rating-star';

      star.addEventListener('click', () => {
        this.rating = Math.max(this.min, Math.min(this.max, i + 1));
        this.update();
        this.dispatchEvent(new Event('change'));
      });

      this.starList.append(star);
      this.stars.push(star);
    }

    this.update();

    return this.starList;
  }

  update() {
    this.stars.forEach((star, idx) => {
      star.classList.toggle('on', (this.rating > idx));
      star.classList.toggle('off', (this.rating <= idx));
    });
  }
}
