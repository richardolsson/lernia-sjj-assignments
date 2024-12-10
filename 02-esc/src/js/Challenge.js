import Rating from "./Rating";

export default class Challenge extends EventTarget {
  constructor(data) {
    super();
    this.data = data;
  }

  render(elemFactory) {
    this.container = elemFactory.createElement('article');
    this.container.className = 'challenge';

    const img = elemFactory.createElement('img');
    img.className = 'challenge__image';
    img.src = this.data.image;
    this.container.append(img);

    const h3 = elemFactory.createElement('h3');
    h3.className = 'challenge__title';
    h3.textContent = this.data.title;
    this.container.append(h3);

    const rating = new Rating(this.data.rating, 'challenge__rating');
    const ratingElem = rating.render(elemFactory);
    this.container.append(ratingElem);

    const groupSize = elemFactory.createElement('span');
    groupSize.className = 'challenge__groupSize';
    groupSize.textContent = `${this.data.minParticipants}-${this.data.maxParticipants} participants`;
    this.container.append(groupSize);

    const description = elemFactory.createElement('p');
    description.className = 'challenge__description';
    description.textContent = this.data.description;
    this.container.append(description);

    const button = elemFactory.createElement('button');
    button.className = 'challenge__bookButton';
    button.textContent = this.data.type == 'online' ? 'Take challenge online' : 'Book this room';
    button.addEventListener('click', () => {
      this.dispatchEvent(new Event('book'));
    });
    this.container.append(button);

    return this.container;
  }

  toggleVisibility(visible) {
    this.container.style.opacity = visible ? 1 : 0.5;
  }
}