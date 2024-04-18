const EXCEPTIONS = ['and', 'in', 'of', 'the', 'to'];

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function titleCase(str) {
  const sentence = str
    .split(' ')
    .map(word => EXCEPTIONS.includes(word) ? word : capitalize(word))
    .join(' ');

  return capitalize(sentence);
}