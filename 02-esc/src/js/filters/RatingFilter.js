export default class RatingFilter extends EventTarget {
  constructor(minRating, maxRating) {
    super();

    this.config = {
      minRating, maxRating,
    };
  }

  getMatching(challenges) {
    return challenges.filter((challenge) => {
      const maxMatches = (this.config.maxRating !== undefined) ?
        challenge.rating <= this.config.maxRating : true;

      const minMatches = (this.config.minRating !== undefined) ?
        challenge.rating >= this.config.minRating : true;

      return maxMatches && minMatches;
    });
  }

  render() {
    const container = document.createElement('div');

    const header = document.createElement('h2');
    header.textContent = 'Filter by rating';
    container.append(header);

    const minInput = document.createElement('input')
    minInput.type = 'number';
    minInput.min = 0;
    minInput.max = 5;
    minInput.value = 0;
    container.append(minInput);

    minInput.addEventListener('change', () => {
      this.config.minRating = minInput.value;
      this.dispatchEvent(new Event('update'));
    });

    const maxInput = document.createElement('input');
    maxInput.type = 'number';
    maxInput.min = 0;
    maxInput.max = 5;
    maxInput.value = 5;
    container.append(maxInput);

    maxInput.addEventListener('change', () => {
      this.config.maxRating = maxInput.value;
      this.dispatchEvent(new Event('update'));
    });

    return container;
  }
}