export class Challenge {
  constructor(data) {
    this.title = data.title;
    this.rating = data.rating;
  }

  render() {
    const li = document.createElement("li");

    const title = document.createElement("span");
    title.className = "title";
    title.innerText = this.title;
    li.append(title);

    const rating = document.createElement("span");
    rating.className = "rating";
    rating.innerText = this.rating;
    li.append(rating);

    return li;
  }
}

export class ChallengeGrid {
  constructor(retriever, container, filter) {
    this.retriever = retriever;
    this.container = container;
    this.filter = filter;
  }

  async run() {
    const allChallenges = await this.retriever.load();

    // Render first time
    this.challenges = this.filter.apply(allChallenges);
    this.render();

    // Render when filter changes
    this.filter.addEventListener("change", () => {
      this.challenges = this.filter.apply(allChallenges);
      this.render();
    });
  }

  render() {
    this.container.innerHTML = '';

    this.challenges.forEach((challengeData) => {
      const challengeInstance = new Challenge(challengeData);
      const li = challengeInstance.render();
      this.container.append(li);
    });
  }
}
