export default class TextFilter {
  constructor(text) {
    this.config = { text };
  }

  getMatching(challenges) {
    if (!this.config.text) {
      return challenges;
    }

    const text = this.config.text.toLowerCase();

    return challenges.filter((challenge) => {
      const title = challenge.title.toLowerCase();
      const description = challenge.description.toLowerCase();

      return title.includes(text) || description.includes(text);
    });
  }
}