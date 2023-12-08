import ChallengeEvent from '../events/ChallengeEvent';

/**
 * Concerns:
 * - Render a single challenge card
 */
export default class Challenge extends EventTarget {
  constructor(data) {
    super();

    this.data = data;
  }

  render() {
    const container = document.createElement('article');

    container.className = 'challengeCard';

    const img = document.createElement('img');
    img.className = 'challengeCard__image';
    img.src = this.data.image;
    container.append(img);

    const content = document.createElement('div');
    content.className = 'challengeCard__content';
    container.append(content);

    const title = document.createElement('h3');
    title.className = 'challengeCard__title';
    title.textContent = this.data.title;
    content.append(title);

    const subtitle = document.createElement('div');
    subtitle.className = 'challengeCard__subtitle';
    content.append(subtitle);

    const rating = document.createElement('div');
    rating.className = 'challengeCard__rating';
    rating.ariaLabel = 'Rating';
    rating.ariaRoleDescription = 'meter';
    rating.ariaValueMin = 0;
    rating.ariaValueMax = 5;
    rating.ariaValueNow = Math.round(this.data.rating);
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('span');
      star.ariaHidden = true;
      rating.append(star);
    }
    subtitle.append(rating);

    const { minParticipants, maxParticipants } = this.data;
    const details = document.createElement('span');
    details.className = 'challengeCard__deatils';
    details.textContent = `${minParticipants}-${maxParticipants} participants`;
    subtitle.append(details);

    const description = document.createElement('p');
    description.className = 'challengeCard__description';
    description.textContent = this.data.description;
    content.append(description);

    const button = document.createElement('button');
    button.className = 'challengeCard__bookButton';
    button.textContent = 'Book this room';
    content.append(button);

    button.addEventListener('click', () => {
      this.dispatchEvent(new ChallengeEvent('bookChallenge', this));
    });

    return container;
  }

  get maxParticipants() {
    return this.data.maxParticipants;
  }

  get minParticipants() {
    return this.data.minParticipants;
  }

  get rating() {
    return this.data.rating;
  }

  get type() {
    return this.data.type;
  }

  get title() {
    return this.data.title;
  }

  get description() {
    return this.data.description;
  }

  get labels() {
    return this.data.labels;
  }
}