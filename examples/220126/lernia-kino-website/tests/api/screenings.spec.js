import { getScreenings } from "../../src/screenings.js";

test("Correct response format", async () => {
  const payload = await getScreenings();

  expect(payload.data.length).toBeGreaterThan(0);
  expect(payload.data[0].time).toBeTruthy();
  expect(payload.data[0].room).toBeTruthy();
  expect(payload.data[0].movie.title).toBeTruthy();
  expect(payload.data[0].movie.id).toBeGreaterThan(0);
});
