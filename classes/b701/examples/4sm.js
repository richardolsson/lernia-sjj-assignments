// ====================================================================
// FYRSTEGSMETODEN - Lös komplexa (sammansatta) problem i fyra steg
// --------------------------------------------------------------------


// --------------------------------------------------------------------
// Steg 1: Definiera problemet
// Skapa en lista över klasskamrater och sortera alfabetiskt på förnamn, A-Ö

// --------------------------------------------------------------------
// Steg 2: Separera i delmoment
// A Skapa en lista med klasskamrater (personobjekt)
// * Sortera listan
//      B Sortera listor generellt
//      C Jämföra namn på något sätt (på svenska)


// --------------------------------------------------------------------
// Steg 3: Experimentera fram lösningar

// A. Skapa en lista med klasskamrater
// En array med objekt, kräver inget experiment (jag kan det!)

// B. Sortera listor generellt
// Array.sort(), ex:
[ 3, 2, 5, 4 ].sort()

// C. Jämföra namn på något sätt (på svenska)
// String.localeCompare()
'anders'.localeCompare('örjan'); // -1


// --------------------------------------------------------------------
// Steg 4: Kombinera till sammansatt lösning

const list = [
    { firstName: 'Anna', lastName: 'Andersson' },
    { firstName: 'Örjan', lastName: 'Bengtsson' },
    { firstName: 'Olof', lastName: 'Ekholm' },
];

list.sort((person1, person2) => person1.firstName.localeCompare(person2.firstName));
