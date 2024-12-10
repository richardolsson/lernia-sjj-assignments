export default class ChallengeEvent extends Event {
  constructor(type, challenge) {
    super(type);
    this.challenge = challenge;
  }
}