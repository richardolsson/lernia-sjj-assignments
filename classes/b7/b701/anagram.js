/*
1. Kolla om det finns kommatecken/mellanslag
2. För varje ord i ena strängen
  2.1. För varje bokstav
    2.1.1 Finns den INTE i den andra strängen?
      Säg NEJ!
3. Säg JA!
*/

/*

function anagram(str1, str2) {
  const words1 = str1.toLowerCase().split(' ');

  if (str1.length != str2.length) {
    return false;
  }

  for (let i = 0; i < words1.length; i++) {
    const word = words1[i];
    for (let j = 0; j < word.length; j++) {
      const character = word.charAt(j);
      if (!str2.toLowerCase().includes(character)) {
        return false;
      }
    }
  }

  return true;
}
*/

/*
1. Kolla så att strängarna är lika långa, annars avbryt
2. Gå igenom första strängen bokstav för bokstav
  2.1. Kolla om bokstaven finns i andra ordet
    2.1.1. Om JA: Ta bort den ur andra ordet
    2.1.2. Om NEJ: Avbryt
3. Säg JA
*/

/*
function anagram(str1, str2) {
  str1 = str1.replaceAll(' ', '');
  str2 = str2.replaceAll(' ', '');

  if (str1.length != str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    const character = str1.charAt(i);
    if (str2.includes(character)) {
      str2 = str2.replace(character, '');
    } else {
      return false;
    }
  }

  return true;
}
*/

/*
1. Ta bort alla mellanslag
2. Sortera båda strängarna alfabetiskt
3. Jämför strängarna
*/

function anagram(str1, str2) {
  const letters1 = Array.from(str1.replaceAll(' ', ''));
  const letters2 = Array.from(str2.replaceAll(' ', ''));

  const sorted1 = letters1.sort().join('');
  const sorted2 = letters2.sort().join('');

  return sorted1 == sorted2;
}

console.log(anagram('clint eastwood', 'old west action'));