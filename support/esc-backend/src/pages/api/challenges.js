import { initCorsMiddleware } from "../../utils/cors";
import { createDateSeed, initState } from "../../utils/random";


const TITLES_FIRST = [
  "Challenge",
  "Room",
  "Hacking",
  "Mystery",
  "Game",
  "Shell",
  "Network",
  "Project: X",
  "Intelligence",
  "Linux",
  "Code",
  "Binary dreams",
  "Revolution",
];

const TITLES_SECOND = [
  "of Doom",
  "in the night",
  "in space",
  "demystified",
  "for hackers",
  "from satellite to satellite",
  "on Windows",
  "in the machine",
  "online",
  "in binary",
  "1994",
  "2000",
  "3000",
  "2.0",
];

const DESCRIPTIONS = [
  "This room is a lot of fun",
  "Take the ultimate challenge in this ultimate challenge",
  "Try your hardest and succeed. Or fail",
  "Do you have the skills to survive?",
  "Hackers of the world, unite",
  "Bring back the skills of the past",
  "Go out into space and back without leaving your computer",
  "Take over the world with code",
];

const LABELS = [
  "hacking",
  "ssh",
  "web",
  "coding",
  "ctf",
  "linux",
  "bash",
  "javascript",
  "electronics",
  "phreaking",
];

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function createRandomChallenges(count) {
  const d = new Date();
  const seedStr = createDateSeed(d);

  const state = initState(seedStr, [
    "title",
    "desc",
    "type",
    "participants",
    "type",
    "rating",
    "labelCount",
    "labelName",
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

  const challenges = [];

  for (let i = 0; i < count; i++) {
    const labels = [];
    const labelCount = getNext(NUMBERS, "labelCount") / 4 + 1;
    for (let l = 0; l < labelCount; l++) {
      labels.push(getNext(LABELS, "labelName"));
    }

    const minParticipants = (getNext(NUMBERS, "participants") % 2) + 1;

    challenges.push({
      id: i + 1,
      type: getNext(NUMBERS, "type") > 3 ? "onsite" : "online",
      title:
        getNext(TITLES_FIRST, "title") + " " + getNext(TITLES_SECOND, "title"),
      description: getNext(DESCRIPTIONS, "desc"),
      minParticipants: minParticipants,
      maxParticipants: minParticipants + getNext(NUMBERS, "participants"),
      rating: getNext(NUMBERS, "rating") / 2,
      image: "https://placecats.com/640/480",
      labels: labels,
    });
  }

  return challenges;
}

const cors = initCorsMiddleware(["GET", "OPTIONS"]);

export default async function handler(req, res) {
  await cors(req, res);

  const challenges = createRandomChallenges(30);
  res.setHeader("content-type", "application/json");
  res.status(200).send(JSON.stringify({ challenges }, null, 2));
}
