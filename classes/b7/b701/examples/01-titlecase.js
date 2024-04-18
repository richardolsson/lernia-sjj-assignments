/*
  1. Lista undantagsorden
  2.5 Separera ord
  2. Sätt stor bokstav i första ordet
  3. Kolla nästa ord
  	Om inte i listan, gör stor bokstav
  4. Upprepa från 3
  5. Sätt ihop listan igen
*/

function titleCase(input) {
  const EXCEPTIONS = [
    'of', 'the', 'in', 'and', 'to',
  ];

  const words = input.split(' ');
  const outputArray = [];

  outputArray.push(capitalize(words[0]));
  for (let i = 1; i < words.length; i++) {
    if (EXCEPTIONS.includes(words[i])) {
      outputArray.push(words[i]);
    } else {
      outputArray.push(capitalize(words[i]));
    }
  }

  return outputArray.join(' ');
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


console.log(titleCase('the lord of the rings'));
console.log(titleCase('the two towers'));
console.log(titleCase('of mice and men'));