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
}
