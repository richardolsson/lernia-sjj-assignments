export default class Challenge {
  constructor(data) {
    this.type = data.type;
    this.title = data.title;
    this.description = data.description;
    this.minParticipants = data.minParticipants;
    this.maxParticipants = data.maxParticipants;
    this.rating = data.rating;
    this.image = data.image;
    this.labels = data.labels;
  }

  render() {
    const card = document.createElement('li');
    card.className = 'challenges-item';

    const img = document.createElement('img');
    img.className = 'challenge-picture';
    img.src = this.image;
    card.append(img);

    const header = document.createElement('h3');
    header.className = 'challenge-title';
    header.innerText = this.title;
    card.append(header);

    const meta = document.createElement('div');
    meta.className = 'challenge-meta';
    card.append(meta);

    const stars = document.createElement('ul');
    stars.className = 'challenge-rating';
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('li');
      star.className = 'challenge-rating-star';
      star.classList.add((this.rating > i)? 'on' : 'off');
      stars.append(star);
    }
    meta.append(stars);

    const size = document.createElement('small');
    size.className = 'challenge-size';
    size.innerText = `${this.minParticipants}-${this.maxParticipants} participants`;
    meta.append(size);

    const desc = document.createElement('p');
    desc.className = 'challenge-description';
    desc.innerText = this.description;
    card.append(desc);

    const cta = document.createElement('a');
    cta.className = 'challenge-cta';
    cta.innerText = 'Book this room';
    card.append(cta);

    this.card = card;

    return card;
  }

  show() {
    this.card.classList.toggle('filtered', false);
  }

  hide() {
    this.card.classList.toggle('filtered', true);
  }
}
