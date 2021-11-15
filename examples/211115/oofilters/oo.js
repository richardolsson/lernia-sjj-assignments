class DataRetriever {
  constructor() {
    this.challenges = null;
  }

  async load() {
    if (!this.challenges) {
      const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
      const response = await fetch(url);
      const data = await response.json();
      this.challenges = data.challenges;
    }

    return this.challenges;
  }
}

class TimeCachedDataRetriever {
  constructor() {
    this.challenges = null;
    this.lastLoad = null;
  }

  async load() {
    const timeSinceLastLoad = this.lastLoad?
      (new Date() - this.lastLoad) : Number.POSITIVE_INFINITY;

    if (!this.challenges || timeSinceLastLoad > 2000) {
      const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
      const response = await fetch(url);
      const data = await response.json();

      this.lastLoad = new Date();
      this.challenges = data.challenges;
    }

    return this.challenges;
  }
}

class Challenge {
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
