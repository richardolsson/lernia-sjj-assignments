import { describe, expect, it } from '@jest/globals';

import titlecase from "./titlecase";

/*
En funktion som tar en sträng som input.
Gör om första bokstaven i varje ord så att den i regel är versal.
Vissa ord ("of", "the", "in", "to", "and") udantas – ska vara gemener.
Första ordet i meningen inleds dock alltid med stor bokstav.
Om strängen är tom, så får man tillbaka tom sträng.

  Ex 1: "lord of the rings" -> "Lord of the Rings"
  Ex 2: "the two towers" -> "The Two Towers"
  Ex 3: "of mice and men" -> "Of Mice and Men"
*/

describe('titlecase()', () => {
  it('returns empty string if argument is empty string', () => {
    const output = titlecase('');
    expect(output).toBe('');
  });

  it('does nothing when first letter is already upper-case', () => {
    const output = titlecase('Hello');
    expect(output).toBe('Hello');
  });

  it('converts "the two towers" to "The Two Towers"', () => {
    const output = titlecase('the two towers');
    expect(output).toBe('The Two Towers');
  });

  // Parameterized tests
  it.each(['of', 'the', 'in', 'and', 'to'])('treats "%s" as exception', (word) => {
    const output = titlecase(`fight ${word} power`);
    expect(output).toBe(`Fight ${word} Power`);
  });
});