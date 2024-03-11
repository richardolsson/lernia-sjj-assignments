/*
1. Förbered för jämförelse:
    Ta bort alla icke-alfabetiska tecken (hur???)
    Gör lowercase
    Gör till array
    Sortera listorna
2. Jämför bokstäverna (case insensitive)
*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzåäö';

/*
function prepareString(str) {
  const characters = [];

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i).toLowerCase();

    if (ALPHABET.includes(char)) {
      characters.push(char);
    }
  }

  return characters.sort().join('');
}

function isAnagram(firstString, secondString) {
  const str1 = prepareString(firstString);
  const str2 = prepareString(secondString);

  return str1 == str2;
}
*/

function isAnagram(firstString, secondString) {
  for (let i = 0; i < firstString.length; i++) {
    const char = firstString.charAt(i).toLowerCase();

    if (!ALPHABET.includes(char)) {
      continue;
    }

    const index = secondString.toLowerCase().indexOf(char);
    if (index == -1) {
      return false;
    } else {
      secondString =
        secondString.slice(0, index)
        + secondString.slice(index + 1);
    }
  }

  return true;
}

console.log('Meat', 'team', isAnagram('Meat', 'team'));
console.log('Clint Eastwood', 'Old West Action', isAnagram('Clint Eastwood', 'Old West Action'));