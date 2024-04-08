const WORDS = [
  "CYCLE",
  "HELLO",
  "GRANT",
  "STYLE",
  "FRONT",
  "CHAIR",
  "ROOMS",
  "HOUSE",
  "CHEAT",
];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * WORDS.length);
  return WORDS[randomIndex];
}
