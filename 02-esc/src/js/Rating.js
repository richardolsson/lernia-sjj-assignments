export default class Rating extends EventTarget {
  constructor(rating, className, interactive) {
    super();

    this.rating = rating;
    this.className = className;
    this.interactive = interactive;
    this.stars = [];
  }

  render(elemFactory) {
    const container = elemFactory.createElement('span');
    container.className = 'rating';
    container.classList.add(this.className);
    container.role = 'img';
    container.ariaLabel = `${this.rating} of 5 stars`;

    for (let i = 0; i < 5; i++) {
      const star = elemFactory.createElement('span');
      star.className = 'rating__star';
      container.append(star);

      if (this.interactive) {
        star.addEventListener('click', () => {
          this.rating = i + 1;
          this.update();
          this.dispatchEvent(new Event('change'));
        });
      }

      this.stars[i] = star;
    }

    this.update();

    return container;
  }

  update() {
    this.stars.forEach((star, index) => {
      const isBelowRating = index < this.rating;
      star.classList.toggle('rating__star--filled', isBelowRating);
    });
  }
}