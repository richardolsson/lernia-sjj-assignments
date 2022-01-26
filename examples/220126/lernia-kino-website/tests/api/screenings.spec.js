import { getScreenings } from "../../src/screenings.js";

test("Correct response format", async () => {
  const payload = await getScreenings();

  expect(payload.data.length).toBeGreaterThan(0);
  expect(payload.data[0].time).toBeTruthy();
  expect(payload.data[0].room).toBeTruthy();
  expect(payload.data[0].movie.title).toBeTruthy();
  expect(payload.data[0].movie.id).toBeGreaterThan(0);
});

test("Upcoming screenings only", async () => {
  const payload = await getScreenings();
  const now = new Date();

  expect(payload.data.length).toBeGreaterThan(0);
  payload.data.forEach(screening => {
    const screeningTime = new Date(screening.time);
    expect(screeningTime > now).toBeTruthy();
  });
});

test("At most ten screenings", async () => {
  const payload = await getScreenings();

  expect(payload.data.length).toBeLessThan(11);
});
