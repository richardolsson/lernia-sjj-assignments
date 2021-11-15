import { createDateSeed, initState } from "../../../utils/random";
import { initCorsMiddleware } from "../../../utils/cors";

const cors = initCorsMiddleware(["GET", "OPTIONS"]);

const TIME_SLOTS = [
  "11:00",
  "12:30",
  "14:00",
  "15:30",
  "17:00",
  "18:30",
  "20:00",
];

const COUNTS = [1, 3, 5, 7];
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function createRandomTimeSlots(seed) {
  const state = initState(seed, [
    "count",
    "slot",
  ]);

  function getNext(collection, statePrefix) {
    const idxProp = statePrefix + "Index";
    const deltaProp = statePrefix + "Delta";

    const idx = state[idxProp] % collection.length;
    const delta = state[deltaProp];
    const value = collection[idx];

    state[idxProp] = idx + delta;
    state[deltaProp] = NUMBERS[idx % NUMBERS.length];

    return value;
  }

  const slots = [];
  const count = getNext(COUNTS, "count");

  for (let i = 0; i < count; i++) {
    slots.push(getNext(TIME_SLOTS, "slot"));
  }

  return slots.sort();
}

export default async function handler(req, res) {
  await cors(req, res);

  if (!req.query.date) {
    return res
      .status(400)
      .json({ error: "Invalid date. Use ?date=2021-05-01 format" });
  }

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const nextYear = new Date(
    now.getFullYear(),
    now.getMonth() + 12,
    now.getDate()
  );
  const date = new Date(req.query.date);
  if (date < today || date > nextYear) {
    return res.status(400).json({
      error:
        "Invalid date. Must be within next year. Use ?date=2021-05-01 format",
    });
  }

  const seedStr = createDateSeed(date);
  const slots = createRandomTimeSlots(seedStr);

  res.setHeader("content-type", "application/json");
  res.status(200).send(JSON.stringify({ date, slots }, null, 2));
}
