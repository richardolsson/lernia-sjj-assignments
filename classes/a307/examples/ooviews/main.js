class Challenge {
  constructor(data) {
    this.data = data;
  }

  render() {
    const element = document.createElement('div');
    element.textContent = this.data.title;

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

const challengesDiv = document.querySelector('#challenges');

const view = new ChallengeListView();
view.render(challengesDiv);