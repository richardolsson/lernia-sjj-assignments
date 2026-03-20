export default function titlecase(input) {
  /*
  let output = '';
  for (let i = 0; i < input.length; i++) {
    const curLetter = input.charAt(i);
    const prevLetter = output.charAt(i-1);
    if (prevLetter == ' ' || !prevLetter) {
      output += curLetter.toUpperCase();
    } else {
      output += curLetter.toLowerCase();
    }
  }

  return output;
  */

  const EXCEPTIONS = ['the', 'and', 'of', 'in', 'to'];

  return input.split(' ').map((word, index) => {
    const isException = EXCEPTIONS.includes(word);
    const isFirst = index == 0;
    const isMeaningfulWord = !isException;
    if (isFirst || isMeaningfulWord) {
      return capitalize(word);
    }

    return word;
  }).join(' ');
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}