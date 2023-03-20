/*
* Gör om en sträng så forsta bokstaven i varje ord är versal.
* Vissa ord ('of', 'the', 'in', 'and', 'to') undantas, de ska vara gemener.
* Meningen ska alltid börja med stor bokstav.
*/
export default function titleCase(input) {
  return input.split(' ')
    .map((word, index) => {
      if (index > 0 && EXCEPTIONS.includes(word)) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join(' ');
}

const EXCEPTIONS = [
  'of', 'the', 'in', 'and', 'to'
];