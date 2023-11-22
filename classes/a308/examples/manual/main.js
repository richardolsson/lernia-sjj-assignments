class Challenge {
  constructor(data) {
    this.data = data;
  }

  render() {
    const element = document.createElement('div');
    element.style.backgroundColor = 'white';
    element.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
    element.style.marginBottom = '20px';
    element.style.maxWidth = '200px';

    const image = document.createElement('img');
    image.src = this.data.image;
    image.style.maxWidth = '100%';
    element.append(image);

    const headline = document.createElement('h1');
    headline.textContent = this.data.title;
    element.append(headline);

    return element;
  }
}

class APIAdapter {
  async getAllChallenges() {
    const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
    const response = await fetch(url);
    const payload = await response.json();

    return payload.challenges.map((challengeData) => new Challenge(challengeData));
  }
}

// "View role" ---------------------------------------------------
// Played by two classes

class ChallengeListView {
  async render(container) {
    const api = new APIAdapter();
    const challenges = await api.getAllChallenges();
    for (let i = 0; i < challenges.length; i++) {
      const challenge = challenges[i];
      const element = challenge.render();
      container.append(element);
    }
  }
}

class Top3View {
  async render(container) {
    const api = new APIAdapter();
    const challenges = await api.getAllChallenges();

    const sorted = challenges.sort((item0, item1) => item1.data.rating - item0.data.rating);
    for (let i = 0; i < 3; i++) {
      const challenge = sorted[i];
      const element = challenge.render();
      container.append(element);
    }
  }
}

// Entry point --------------------------------------
const challengesDiv = document.querySelector('#challenges');

let view = new ChallengeListView();

let viewMode = 'all';
const button = document.createElement('button');
button.textContent = 'Toggle view';
button.addEventListener('click', () => {
  if (viewMode == 'all') {
    viewMode = 'top3';
    view = new Top3View();
  } else {
    viewMode = 'all';
    view = new ChallengeListView();
  }

  redraw();
});

function redraw() {
  challengesDiv.innerHTML = '';
  document.querySelector('span').textContent = viewMode;
  view.render(challengesDiv);
}

challengesDiv.before(button);

redraw();