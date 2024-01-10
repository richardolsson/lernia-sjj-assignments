export default function getUniqueLabels(challenges) {
  const output = new Set();

  challenges.forEach((challenge) => {
    challenge.labels.forEach((label) => output.add(label));
  });

  return Array.from(output);
}