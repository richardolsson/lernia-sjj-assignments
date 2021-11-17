export class MinimumRatingFilter extends EventTarget {
  constructor() {
    super();

    this.value = 3.5;
  }

  render(container) {
    this.input = document.createElement('input');
    this.input.type = 'range';
    this.input.min = 0;
    this.input.value = 3.5;
    this.input.step = 0.5;
    this.input.max = 5;
    container.append(this.input);

    this.output = document.createElement('span');
    this.output.innerText = this.input.value;
    container.append(this.output);

    this.input.addEventListener("change", () => {
      this.output.innerText = this.input.value;
      this.setValue(this.input.value);
    });
  }

  setValue(value) {
    this.value = value;
    this.dispatchEvent(new Event("change"));
  }

  apply(challenges) {
    return challenges.filter((challenge) => {
      return challenge.rating >= this.value;
    });
  }
}
