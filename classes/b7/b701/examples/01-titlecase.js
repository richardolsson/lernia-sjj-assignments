/* Grupp 1

1. Gör alla bokstäver lowercase
2. Gör första bokstaven versal
3. Gör alla undantagsord lowercase om det inte är första ordet

*/

/* Grupp 2

1. Gör om första bokstaven i alla ord till en versal
2. Gör om resterande bokstäver i varje ord till gemener
3. Om undantagsord finns med, gör om till endast gemener
4. Gör om första bokstagen till versal

*/

/* Grupp 3

1. Gör en array av ord
2. För varje ord
  a. Om första ordet, gör första bokstaven stor
  b. Om det är ett undantag, hoppa över
  c. Annars, gör bokstaven versal
3. Konvertera tillbaka till string

*/

/* Grupp 4

1. Dela upp texten i ord
2. Gör om första ordets första bokstav till stor bokstav
3. För varje ord, efter första ordet
  a. Om det är ett undantag, gör alla bokstäver små
  b. Om inte undantag, gör första stor och övriga små
4. Slå ihop orden till sträng med mellanslag

*/

/* Richard

1. Gör alla bokstäver lowercase
2. Bryt isär strängen i ord
3. För varje ord
  a. Om första ordet, gör versal
  b. Om inte undantag, gör versal
4. Slå samman
*/

function toTitleCase(str) {
  const EXCEPTIONS = [
    'of', 'the', 'in', 'and', 'to',
  ];

  const lowerWords = str.toLowerCase().split(' ');
  const titleWords = lowerWords.map((word, index) => {
    if (index == 0 || !EXCEPTIONS.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  return titleWords.join(' ');
}

console.log(toTitleCase('the lord of the rings'));
console.log(toTitleCase('the two towers'));
console.log(toTitleCase('of mice and men'));