import RatingWidget from "../widgets/rating.js";

export default class RatingFilter extends EventTarget {
  constructor() {
    super();

    this.config = {
      min: 0,
      max: 5,
    };
  }

  render() {
    const minWidget = new RatingWidget(this.config.min);
    minWidget.addEventListener('change', () => {
      this.config.min = minWidget.rating;
      maxWidget.min = minWidget.rating;
      this.dispatchEvent(new Event('change'));
    });

    const maxWidget = new RatingWidget(this.config.max);
    maxWidget.addEventListener('change', () => {
      this.config.max = maxWidget.rating;
      minWidget.max = maxWidget.rating;
      this.dispatchEvent(new Event('change'));
    });

    const ctr = document.createElement('div');
    const header = document.createElement('h4');
    header.innerText = 'By rating';
    ctr.append(header);
    ctr.append(minWidget.render());
    ctr.append(maxWidget.render());

    return ctr;
  }

  matches(challenge) {
    return challenge.rating >= this.config.min && challenge.rating <= this.config.max;
  }

  setConfig(config) {
    this.config = {
      ...this.config,
      ...config,
    };
  }
}
