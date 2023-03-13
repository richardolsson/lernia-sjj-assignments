/* Grupp 1:

1. Hitta vad ett ord är genom att kolla om ett ord är efterföljt av ett blanksteg
2. Titta på första ordet, 
    2.1. identifiera första bokstaven i det ordet och 
    2.2. gör den första bokstaven till stor bokstav
    2.3. spara ordet på något sätt
3. titta på andra ordet om det är  
    3.1. om det inte finns något mer ord avsluta det steget
    3.2. "of the in and to" spara ordet utan att göra något
        3.2.1. gå till punkt 3 men titta på nästa ord i strängen
    3.3. om det inte är något av "of the in and to" identifiera första bokstaven i ordet och gör om den till stor bokstav
        3.3.1. spara ordet
        3.3.2. gå till punkt 3 och titta på nästa ord
*/

/* Richards variant (utan undantag):

1. För varje bokstav:
  1.1. Om det är den första bokstaven
    1.1.1. Gör den stor
  1.2. Om förra bokstaven var ett blanksteg
    1.2.1. Gör den stor
*/

function titleCase1_richardsIncompleteVersion(str) {
  let output = '';
  const letters = Array.from(str);

  for (let i=0; i < letters.length; i++) {
    if (i == 0) {
      output += letters[i].toUpperCase();
    } else if (letters[i - 1] == ' ') {
      output += letters[i].toUpperCase();
    } else {
      output += letters[i];
    }
  }

  return output;
}

console.log(titleCase1('the lord of the rings'));

/* Grupp 2:

1. Skapa lista på undantag
2. Gör hela strängen lower case
3. Splitta string på mellanslag för att skapa lista på ord
4. För varje ord:
    4.1. Är ordet med i listan?
        4.1.1 Returnera oförändrat
    4.2. Annars
        4.2.1. Gör första bokstaven stor
5. Sätt ihop strängen med mellanrum mellan orden
6. Gör första bokstaven stor
*/

function titleCase2(str) {
  const exceptions = ['of', 'the', 'in', 'and', 'to'];
  str = str.toLowerCase();

  const words = str.split(' ');
  for (let i=0; i<words.length; i++) {
    const word = words[i];
    if (exceptions.includes(word)) {
      // Do nothing
      // Feedback: This could go away
    } else {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  const output = words.join(' ');
  return output.charAt(0).toUpperCase() + output.slice(1);
}

//console.log(titleCase2('the lord of the rings'));

/* Grupp 3:

1. Gör lista av undantagsord
2. Gör om meningen till lista av ord
3. Ta första ordet och gör om första bokstaven till stor bokstav
4. Gå vidare till nästa ord
    4.1. Om ordet är med i undantagslistan:
        4.1.1. Gå vidare till nästa ord (steg 4)
    4.2. Annars:
        4.2.1. Gör om första bokstaven i ordet till stor bokstav
        4.2.2. Gå vidare till nästa ord (steg 4)
*/

function titleCase3(str) {
  const exceptions = ['of', 'the', 'in', 'and', 'to'];

  const words = str.split(' ');

  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  function doNextWord(index) {
    if (index >= words.length) {
      // Addition to algorithm
      return;
    }

    if (exceptions.includes(words[index])) {
      doNextWord(index + 1);
    } else {
      words[index] = words[index].charAt(0).toUpperCase() + words[index].slice(1);
      doNextWord(index + 1);
    }
  }

  doNextWord(1);

  // Addition to algorithm
  return words.join(' ');
}

//console.log(titleCase3('the lord of the rings'));