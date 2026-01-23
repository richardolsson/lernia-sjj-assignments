export default class Challenge {
  constructor(data) {
    this.data = data;
  }

  render() {
    const card = document.createElement('article');
    card.classList.add('challenge');

    const image = document.createElement('img');
    image.classList.add('challenge__image');
    image.alt = this.data.title;
    image.src = this.data.image;
    card.append(image);

    const title = document.createElement('h3');
    title.classList.add('challenge__title');
    title.textContent = this.data.title;
    card.append(title);

    const subTitle = document.createElement('div');
    subTitle.classList.add('challenge__subtitle');
    card.append(subTitle);

    const rating = renderRatingStars(this.data.rating);
    subTitle.append(rating);

    const { minParticipants, maxParticipants } = this.data;
    const sizeLabel = document.createElement('small');
    sizeLabel.classList.add('challenge__size');
    sizeLabel.textContent = `${minParticipants}-${maxParticipants} participants`;
    subTitle.append(sizeLabel);

    const description = document.createElement('p');
    description.classList.add('challenge__description');
    description.textContent = this.data.description;
    card.append(description);

    const bookButton = document.createElement('button');
    bookButton.classList.add('challenge__bookButton');
    bookButton.textContent = 'Book this room';
    card.append(bookButton);

    return card;
  }
}

function renderRatingStars(rating) {
  const list = document.createElement('ol');
  list.classList.add('challenge__rating');
  list.role = 'img';
  list.ariaLabel = `${rating} of 5 stars`;

  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('li');
    star.classList.add('challenge__ratingStar');

    if (i <= rating) {
      star.classList.add('challenge__ratingStar--filled');
    }

    list.append(star);
  }

  return list;
}