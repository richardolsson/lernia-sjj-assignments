/*
1. Gör allt lowercase
2. Ta bort alla icke-alfabetiska tecken
3. Gör en kopia
4. Vänd kopian
5. Jämför om de är identiska
*/

const ALPHABET = 'abcdefghijklmnopqrstuvwxyzåäö';

function isPalindrome(str) {
  const original = [];
  const copy = [];

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i).toLowerCase();
    if (ALPHABET.includes(char)) {
      original.push(char);
      copy.push(char);
    }
  }

  return original.join('') == copy.reverse().join('');
}

console.log('Anna', isPalindrome('Anna'));
console.log('Eva, can I see bees in a cave', isPalindrome('Eva, can I see bees in a cave'));