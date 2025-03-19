import { describe, expect, it } from '@jest/globals';

import titlecase from "./titlecase";

/*
Gör om sträng så första bokstaven i varje ord i regel är versal.
Vissa ord ("of", "the", "in", "and", "to") undantas – ska vara gemener.
Första ordet inleds dock alltid med stor bokstav.
Om strängen är tom, så får man tillbaka en tom sträng.

  Ex 1: "lord of the rings" -> "Lord of the Rings"
  Ex 2: "the two towers" -> "The Two Towers"
  Ex 3: "of mice and men" -> "Of Mice and Men"
*/

describe('titlecase()', () => {
  it('does nothing with an empty string', () => {
    const output = titlecase('');
    expect(output).toEqual('');
  });

  it('does nothing with string that alread is title case', () => {
    const output = titlecase('The Lord of the Rings');
    expect(output).toEqual('The Lord of the Rings');
  });

  it('converts "the two towers" to "The Two Towers"', () => {
    const output = titlecase('the two towers');
    expect(output).toEqual('The Two Towers');
  });

  it.each(['of', 'the', 'in', 'and', 'to'])('excepts "%s"', (word) => {
    const output = titlecase(`fight ${word} power`);
    expect(output).toEqual(`Fight ${word} Power`);
  });

  it.each(['of', 'the', 'in', 'and', 'to'])('capitilizes excepted word "%s" when it is the first word', (word) => {
    const output = titlecase(`${word} love`);
    expect(output.charAt(0)).toEqual(word.charAt(0).toUpperCase());
  });
});