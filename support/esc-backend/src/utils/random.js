export function initState(seed, prefixes) {
  const state = {};
  const seedNumbers = seed
    .split("")
    .map((s, idx) => (idx * parseInt(s) + parseInt(s)) % 10);
  let nextIdx = seedNumbers[seedNumbers.length - 1] % seedNumbers.length;

  function getNext() {
    const n = seedNumbers[nextIdx++];
    nextIdx = nextIdx % seedNumbers.length;
    return n;
  }

  for (const prefix of prefixes) {
    state[`${prefix}Index`] = getNext();
    state[`${prefix}Delta`] = getNext() + 1;
  }

  return state;
}

export function createDateSeed(d) {
  return d.getFullYear().toString() +
    (d.getMonth() + 1).toString().padStart(2, "0") +
    d.getDate().toString().padStart(2, "0");
}
