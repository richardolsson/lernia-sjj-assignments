import { describe, it, jest, expect } from '@jest/globals';
import NextScreeningsResource from './NextScreeningsResource';

describe('NextScreeningsResource', () => {
  describe('retrieve()', () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2023-02-21T13:30:00.000Z'));
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    it('includes only next five days', async () => {
      const resource = new NextScreeningsResource({
        getAllScreenings: async () => [
          mockScreening(1, '2023-02-20T13:37:00.000Z'),
          mockScreening(2, '2023-02-22T13:37:00.000Z'),
          mockScreening(3, '2023-02-28T13:37:00.000Z'),
        ],
      });

      const screenings = await resource.retrieve();

      expect(screenings.length).toBe(1);
      expect(screenings[0].id).toBe(2);
    });

    it('shows at most ten screenings', async () => {
      const resource = new NextScreeningsResource({
        getAllScreenings: async () => [
          // Tomorrow
          mockScreening(1, '2023-02-22T13:37:00.000Z'),
          mockScreening(2, '2023-02-22T13:37:00.000Z'),
          mockScreening(3, '2023-02-22T13:37:00.000Z'),
          mockScreening(4, '2023-02-22T13:37:00.000Z'),
          mockScreening(5, '2023-02-22T13:37:00.000Z'),
          mockScreening(6, '2023-02-22T13:37:00.000Z'),
          mockScreening(7, '2023-02-22T13:37:00.000Z'),

          // Day after tomorrow
          mockScreening(8, '2023-02-23T13:37:00.000Z'),
          mockScreening(9, '2023-02-23T13:37:00.000Z'),
          mockScreening(10, '2023-02-23T13:37:00.000Z'),
          mockScreening(11, '2023-02-23T13:37:00.000Z'),
          mockScreening(12, '2023-02-23T13:37:00.000Z'),
        ]
      })

      const screenings = await resource.retrieve();

      expect(screenings.length).toBe(10);
      expect(screenings[0].id).toBe(1);
      expect(screenings[9].id).toBe(10);
    });
  });
});

function mockScreening(id, startTime) {
  return {
    "id": id,
    "attributes": {
      "start_time": startTime,
      "room": "Stora salongen",
      "createdAt": "2023-01-31T04:27:02.786Z",
      "updatedAt": "2023-01-31T04:27:02.786Z",
      "movie": {
        "data": {
          "id": 3,
          "attributes": {
            "title": "The Shawshank Redemption",
            "imdbId": "tt0111161",
            "intro": "Over the course of several years, **two convicts form a friendship**, seeking consolation and, eventually, redemption through basic compassion.",
            "image": {
              "url": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
            },
            "createdAt": "2023-01-23T07:17:34.923Z",
            "updatedAt": "2023-01-27T07:12:24.582Z",
            "publishedAt": "2023-01-23T07:17:39.384Z"
          }
        }
      }
    }
  }
}