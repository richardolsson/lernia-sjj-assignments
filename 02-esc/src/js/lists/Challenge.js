/**
 * Concerns:
 * - Render a single challenge card
 */
export default class Challenge {
  constructor(data) {
    this.data = data;
  }

  render() {
    const elem = document.createElement('div');
    elem.innerText = this.data.title;
    return elem;
  }
}