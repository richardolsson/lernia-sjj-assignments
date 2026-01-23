export default function mockChallengeData(overrides) {
  return {
    "id": 1,
    "type": "online",
    "title": "Challenge in the machine",
    "description": "Hackers of the world, unite",
    "minParticipants": 1,
    "maxParticipants": 2,
    "rating": 2,
    "image": "https://placecats.com/640/480",
    "labels": [
      "bash",
      "ssh"
    ],
    ...overrides,
  };
}