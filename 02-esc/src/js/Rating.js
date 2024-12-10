export default class Rating {
  constructor(rating, className) {
    this.rating = rating;
    this.className = className;
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
      if (i < this.rating) {
        star.classList.add('rating__star--filled');
      }
      container.append(star);
    }

    return container;
  }
}