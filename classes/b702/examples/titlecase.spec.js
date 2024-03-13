import { describe, expect, it } from '@jest/globals';

import titleCase from './titlecase.js';

/*
Gör om sträng så första bokstaven i varje ord i regel är versal.
Vissa ord ("of", "the", "in", "and" och "to") undantas – ska vara gemener.

  Ex 1: "the lord of the rings" → "The Lord of the Rings"
  Ex 2: "the two towers" → "The Two Towers"
  Ex 3: "of mice and men" → "Of Mice and Men"
*/

/*
1. Skriv ett test för funktionalitet du inte byggt än
2. Kör alla tester (som kommer misslyckas)
3. Implementera funktionaliteten
4. Kör alla tester (som bör lyckas, annars gå till steg 3)
5. Börja om från början, med nästa funktionalitet
*/

describe('titleCase()', () => {
  it('does nothing with an empty string', () => {
    const output = titleCase('');
    expect(output).toBe('');
  });

  it('does nothing with string that already is title case', () => {
    const output = titleCase('The Two Towers');
    expect(output).toBe('The Two Towers');
  });

  it('converts "the two towers" to "The Two Towers"', () => {
    const output = titleCase('the two towers');
    expect(output).toBe('The Two Towers');
  });

  // Parameterized tests using each()
  it.each(['of', 'the', 'in', 'and', 'to'])('excepts "%s" from the capitalization rule', (exceptedWord) => {
    const output = titleCase(`fight ${exceptedWord} power`);
    expect(output).toBe(`Fight ${exceptedWord} Power`);
  });
});