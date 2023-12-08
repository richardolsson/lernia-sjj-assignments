import Challenge from "../lists/Challenge";

/**
 * Concerns:
 * - "Imitate" an API with fake data
 */
export default class MockAPIFacade {
  async getChallenges() {
    return [
      new Challenge({
        title: 'Challenge 1',
        description: 'This is a challenge',
        type: 'online',
        minParticipants: 2,
        maxParticipants: 5,
        rating: 2,
        image: 'http://placekitten.com/400/240',
        labels: 'web,hacking,foo,bar',
      }),
      new Challenge({
        title: 'Challenge 2',
        description: 'This is another challenge',
        type: 'onsite',
        minParticipants: 2,
        maxParticipants: 5,
        rating: 4,
        image: 'http://placekitten.com/400/240',
        labels: ['web', 'hacking', 'foo', 'bar'],
      }),
      new Challenge({
        title: 'Challenge 3',
        description: 'This is a third challenge',
        type: 'online',
        minParticipants: 2,
        maxParticipants: 5,
        rating: 5,
        image: 'http://placekitten.com/400/240',
        labels: ['web', 'hacking', 'foo', 'bar'],
      }),
      new Challenge({
        title: 'Challenge 4',
        description: 'This is a fourth challenge',
        type: 'online',
        minParticipants: 2,
        maxParticipants: 5,
        rating: 1,
        image: 'http://placekitten.com/400/240',
        labels: ['web', 'hacking', 'foo', 'bar'],
      }),
    ];
  }

  async getTimeSlots(date) {
    console.log('getTimeSlots', date);
    return [
      '13:00',
      '15:00',
    ];
  }

  async submitBooking(bookingData) {
    console.log('submitBooking', bookingData);
    return true;
  }
}