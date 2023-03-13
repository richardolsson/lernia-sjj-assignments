/* Grupp 1
1. spara alla bokstäver från strängen i en ny sträng
2. gör om både strängarna till lowercase
3. vänd den ena strängen baklänges
4. jämför om strängarna är identiska
*/

/* Grupp 2
1. Gör om strängen till lower case
2. Sortera ut icke-bokstäver (ex regex)
3. Spara splittade, reversad, joinad sträng i ny variabel
4. Returnera huruvida båda strängarna är likadana
*/

/* Grupp 3
1. Gör om till lower case och inga konstiga tecken
2. Gör om strängen till array
3. Vänd på arrayen
4. Returnera huruvida original och vänd array är identiska
*/

function palindrome3(str) {
    const letters = str.toLowerCase().match(/[\p{L}]/ug);
    const reverse = letters.concat().reverse();
    return letters.join('') == reverse.join('');
}

//console.log(palindrome3('Eva, can I see bees in a cave?'))

/* Grupp 3 alt
1. Gör om till lower case och inga konstiga tecken
2. Loopa över siffrorna 0..strängens längd - 1
    2.1. Om karaktären i != L-1-i
        2.1.1 Returnera false
    2.2. Om i > L/2:
        2.2.1 returnera true
*/

/* Original:
function palindrome3alt(str) {
    const letters = str.toLowerCase().match(/[\p{L}]/ug);
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] != letters[letters.length - 1 - i]) {
            return false;
        }
        if (i > letters.length / 2) {
            return true;
        }
    }
}
*/

function palindrome3alt(str) {
    const letters = str.toLowerCase().match(/[\p{L}]/ug);
    for (let i = 0; i < letters.length/2; i++) {
        if (letters[i] != letters[letters.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome3alt('Eva, can I see bees in a cave?'))