import Rating from "../Rating";

export default class RatingFilter extends EventTarget {
  constructor(min, max) {
    super();

    this.min = min || 0;
    this.max = max || 5;
  }

  doesChallengeMatch(challenge) {
    return challenge.data.rating > this.min && challenge.data.rating < this.max;
  }

  render(elemFactory) {
    const container = elemFactory.createElement('div');

    const header = elemFactory.createElement('h3');
    header.textContent = 'By rating';
    container.append(header);


    const minRating = new Rating(this.min, 'ratingFilter__min', true);
    const minElem = minRating.render(elemFactory);
    container.append(minElem);

    const maxRating = new Rating(this.max, 'ratingFilter__max', true);
    const maxElem = maxRating.render(elemFactory);
    container.append(maxElem);

    minRating.addEventListener('change', () => {
      this.min = minRating.rating;
      this.dispatchEvent(new Event('change'));
    });

    maxRating.addEventListener('change', () => {
      this.max = maxRating.rating;
      this.dispatchEvent(new Event('change'));
    });

    return container;
  }
}