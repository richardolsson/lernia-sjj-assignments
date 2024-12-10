export default function mockChallengeData(overrides) {
  return {
    id: 1,
    title: 'My challenge',
    description: 'This is a challenge',
    rating: 3,
    labels: ['foo', 'bar'],
    image: 'https://example.com/example.png',
    minParticipants: 2,
    maxParticipants: 5,
    type: 'onsite',
    labels: [],
    ...overrides,
  };
}