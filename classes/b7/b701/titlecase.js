/*
1. Spara undentagsorden
2. Bryta ned meningen i ord
3. Sätt stor bokstav på första ordet
4. För varje ord:
  4.1. Sätt stor bokstav (om inte ett undantagsord)
5. Sätt ihop ordsamlingen till en mening igen
*/

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function titleCase(sentence) {
  const exceptions = ['of', 'the', 'in', 'and', 'to'];
  const words = sentence.toLowerCase().split(' ');
  words[0] = capitalize(words[0]);

  for (let i = 1; i < words.length; i++) {
    if (!exceptions.includes(words[i])) {
      words[i] = capitalize(words[i]);
    }
  }

  return words.join(' ');
}

console.log(titleCase('THE LORD OF THE RINGS'));