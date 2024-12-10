import Rating from "./Rating";

export default class Challenge {
  constructor(data) {
    this.data = data;
  }

  render(elemFactory) {
    const container = elemFactory.createElement('article');
    container.className = 'challenge';

    const img = elemFactory.createElement('img');
    img.className = 'challenge__image';
    img.src = this.data.image;
    container.append(img);

    const h3 = elemFactory.createElement('h3');
    h3.className = 'challenge__title';
    h3.textContent = this.data.title;
    container.append(h3);

    const rating = new Rating(this.data.rating, 'challenge__rating');
    const ratingElem = rating.render(elemFactory);
    container.append(ratingElem);

    const groupSize = elemFactory.createElement('span');
    groupSize.className = 'challenge__groupSize';
    groupSize.textContent = `${this.data.minParticipants}-${this.data.maxParticipants} participants`;
    container.append(groupSize);

    const description = elemFactory.createElement('p');
    description.className = 'challenge__description';
    description.textContent = this.data.description;
    container.append(description);

    const button = elemFactory.createElement('button');
    button.className = 'challenge__bookButton';
    button.textContent = this.data.type == 'online' ? 'Take challenge online' : 'Book this room';
    container.append(button);

    return container;
  }
}