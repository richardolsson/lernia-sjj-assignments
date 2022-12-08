export default class ChallengeCard {
    constructor(data) {
        this.data = data;
    }

    render() {
        const li = document.createElement('li');
        li.classList.add('challenge-item');

        const typeIcon = document.createElement('div');
        typeIcon.classList.add('challenge-type');
        typeIcon.innerText = this.data.type;
        li.append(typeIcon);

        const img = document.createElement('img');
        img.src = this.data.image;
        img.alt = this.data.title;
        img.classList.add('challenge-image');
        li.append(img);

        const header = document.createElement('h3');
        header.classList.add('challenge-title');
        header.innerText = this.data.title;
        li.append(header);

        const rating = document.createElement('ul');
        rating.role = 'meter';
        rating.ariaLabel = 'rating';
        rating.ariaValueMin = 0;
        rating.ariaValueMax = 5;
        rating.ariaValueNow = this.data.rating;
        rating.ariaValueText = `${this.data.rating} out of 5`;
        rating.classList.add('rating');
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement('li');
            star.classList.add('rating-star');

            if (i <= this.data.rating) {
                star.classList.add('active');
            }

            rating.append(star);
        }
        li.append(rating);

        const meta = document.createElement('small');
        meta.classList.add('challenge-meta');
        meta.innerText = `${this.data.minParticipants}-${this.data.maxParticipants} participants`;
        li.append(meta);

        const desc = document.createElement('p');
        desc.classList.add('challenge-description');
        desc.innerText = this.data.description;
        li.append(desc);

        const button = document.createElement('button');
        button.classList.add('button');
        button.classList.add('primary');
        button.innerText = this.data.type == 'online'? 'Take challenge online' : 'Book this room';
        li.append(button);

        return li;
    }
}