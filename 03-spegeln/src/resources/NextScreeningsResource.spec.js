import { describe, it, jest, expect } from '@jest/globals';
import NextScreeningsResource from './NextScreeningsResource';
import mockScreening from '../testing/mockScreening';

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
          mockScreening(1, { startTime: '2023-02-20T13:37:00.000Z'}),
          mockScreening(2, { startTime: '2023-02-22T13:37:00.000Z'}),
          mockScreening(3, { startTime: '2023-02-28T13:37:00.000Z'}),
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
          mockScreening(1, { startTime: '2023-02-22T13:37:00.000Z'}),
          mockScreening(2, { startTime: '2023-02-22T13:37:00.000Z'}),
          mockScreening(3, { startTime: '2023-02-22T13:37:00.000Z'}),
          mockScreening(4, { startTime: '2023-02-22T13:37:00.000Z'}),
          mockScreening(5, { startTime: '2023-02-22T13:37:00.000Z'}),
          mockScreening(6, { startTime: '2023-02-22T13:37:00.000Z'}),
          mockScreening(7, { startTime: '2023-02-22T13:37:00.000Z'}),

          // Day after tomorrow
          mockScreening(8, { startTime: '2023-02-23T13:37:00.000Z'}),
          mockScreening(9, { startTime: '2023-02-23T13:37:00.000Z'}),
          mockScreening(10, { startTime: '2023-02-23T13:37:00.000Z'}),
          mockScreening(11, { startTime: '2023-02-23T13:37:00.000Z'}),
          mockScreening(12, { startTime: '2023-02-23T13:37:00.000Z'}),
        ]
      })

      const screenings = await resource.retrieve();

      expect(screenings.length).toBe(10);
      expect(screenings[0].id).toBe(1);
      expect(screenings[9].id).toBe(10);
    });
  });
});