/* Grupp 3

1. Ta bort allt som inte är a-z
2. Gör allt till lowercase
3. Om strängarna har samma längd:
  a. Bryt ner hela strängarna till arrays av bokstäver
  b. Sortera alfabetiskt
  c. Jämför arrayerna med varandra
*/

function isAnagram(first, second) {
  const firstClean = first.replace(/\W/g, '').toLowerCase()
  const secondClean = second.replace(/\W/g, '').toLowerCase();

  if (firstClean.length == secondClean.length) {
    const firstArray = firstClean.split('').sort();
    const secondArray = secondClean.split('').sort();
    //return firstArray.join('') == secondArray.join('');

    return firstArray.every((item, index) => secondArray[index] == item);
  }

  return false;
}

console.log(isAnagram('meat', 'team'));
console.log(isAnagram('Clint Eastwood', 'Old West Action'));

/* Grupp 4

1. Ta bort allt som inte är a-z
2. Gör allt till lowercase
3. Bryt ner strängen till array av bokstäver
4. Sortera båda arrayer alfabetiskt
5. Slå samman båda till strängar
6. Jämför strängarna

*/

/* Grupp 1

1. Gör om båda strängarna till lowercase
2. Bryt upp båda strängarna till arrayer av bokstäver
3. Filtrera bort allt som inte är bokstäver
4. Sortera arrayerna i alfabetisk ordning
5. Slå samman båda till strängar
6. Jämför strängarna

*/

/* Grupp 2

1. Ta bort allt icke-alfabetiskt
2. Gör om till små bokstäver
3. Kolla om strängarna är olika långa
4. Sortera bokstäverna i bokstavsordning
5. Jämför om strängarna är identiska

*/