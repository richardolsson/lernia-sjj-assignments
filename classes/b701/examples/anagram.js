/* Grupp 1

1. spara alla bokstäver från sträng 1 i en ny sträng
2. spara alla bokstäver från sträng 2 i en ny sträng
3. gör om både strängarna till lowercase
4. sortera både strängarna alfabetiskt
5. kolla om strängarna är identiska
*/

/* Grupp 2

1. Gör båda strängarna till lowercase
2. Sortera ut allt som inte är bokstäver (ex regex)
3. Gör en lista för alla bokstäver för båda strängarna
4. Sortera listorna i bokstavsordning
5. Gör om listorna till sträng igen
6. Returnera huruvida strängarna är identiska
*/

function anagram2(first, second) {
    const letters0 = first.toLowerCase().match(/[\p{L}]/ug);
    const letters1 = second.toLowerCase().match(/[\p{L}]/ug);

    letters0.sort();
    letters1.sort();

    return letters0.join('') == letters1.join('');
}

/*
console.log('foo', 'bar', anagram2('foo', 'bar'));
console.log('team', 'meat', anagram2('team', 'meat'));
console.log('Clint Eastwood', 'Old West Action',
    anagram2('Clint Eastwood', 'Old West Action'));
    */

/* Grupp 2 (alt)

1. Gör båda strängarna till lowercase
2. Sortera ut allt som inte är bokstäver (ex regex)
3. För varje bokstav i sträng A:
    3.1. Om den förekommer i sträng B:
        3.1.1. Ta bort den från sträng B
    3.2. Annars:
        3.2.1. Returnera false
4. Returnera huruvida sträng B är tom
*/

function anagram2alt(first, second) {
    const letters0 = first.toLowerCase().match(/[\p{L}]/ug);
    let letters1 = second.toLowerCase().match(/[\p{L}]/ug);

    for (const letter of letters0) {
        const index = letters1.indexOf(letter);
        if (index >= 0) {
            // Remove letter from letters1
            letters1 = letters1.slice(0, index).concat(letters1.slice(index + 1));
        } else if (index < 0) {
            return false;
        }
    }

    return letters1.length == 0;
}

/*
console.log('foo', 'bar', anagram2alt('foo', 'bar'));
console.log('team', 'meat', anagram2alt('team', 'meat'));
console.log('Clint Eastwood', 'Old West Action',
    anagram2alt('Clint Eastwood', 'Old West Action'));
    */


// Maybe faster?
function anagram2alt_optimized(first, second) {
    const letters0 = first.toLowerCase().match(/[\p{L}]/ug);
    let letters1 = second.toLowerCase().match(/[\p{L}]/ug);

    const letterMap = {};

    letters1.forEach(letter => {
        letterMap[letter] = letterMap[letter] || 0;
        letterMap[letter]++;
    });

    for (const letter of letters0) {
        letterMap[letter]--;

        if (letterMap[letter] < 0) {
            return false;
        }
    }

    return Object.values(letterMap).reduce((sum, value) => sum + value) == 0;
}

console.log('foo', 'bar', anagram2alt_optimized('foo', 'bar'));
console.log('team', 'meat', anagram2alt_optimized('team', 'meat'));
console.log('Clint Eastwood', 'Old West Action',
    anagram2alt_optimized('Clint Eastwood', 'Old West Action'));

/* Grupp 3

1. Om någon av strängarna är tomma
    1.2. returnera felmeddelande.
2. annars.
    2.1. för varje bokstav i sträng 1
        2.1.1. om det inte är alfabetiskt ta bort 
        2.1.2. annars gå vidare till nästa bokstav
    2.2. för varje bokstav i sträng 2
        2.2.1. om det inte är alfabetiskt ta bort 
        2.2.2. annars gå vidare till nästa bokstav 
3. jämför längden på sträng1 och sträng2
    3.1. om inte lika returnera false
    3.2. annars
        3.2.1. gör om sträng1 till lowercase och sorta i bokstavordning 
        3.2.2. gör om sträng2 till lowercase och sorta i bokstavordning 
        3.2.3. jämför om sträng1 har sammavärde som sträng2
            3.2.3.1 om sant returnera sant + vettigt console.log meddelande
            3.2.3.2 om falsk returnera falsk + vettigt console.log meddelande
*/