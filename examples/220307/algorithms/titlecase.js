/* Group 1 (Christer, Carola, Mats, Marcus)
  - Force all lower-case
  - Convert string to array
  - Loop over array, create words when space is found
  - Convert first character of each word to uppercase
  - If word is 2 or 3 characters, and it's to or the, make lowercase
  - Reassemble string with spaces between words
*/

function group1Solution(input = "") {
  input = input.toLowerCase();
  const chars = Array.from(input);
  const words = [];
  let lastWordIndex = 0;
  chars.forEach((char, index) => {
    if (char == " ") {
      const word = input.slice(lastWordIndex, index);
      words.push(word[0].toUpperCase() + word.slice(1));
      lastWordIndex = index;
    }
  });

  words.push(input.slice(lastWordIndex));

  // TODO: Finalize algorithm, did not fully implement. Missing some features.

  return words.join(" ");
}

/* Group 2 (Ammar, Emma, Emelie, Haeju)
  - Split sentence into array of words
  - Create array of excluded words
  - First word: capitalize first char
  - All other ords: Loop
    - If word not in array of excluded words
      - Capitalize first char
  - Reassemble string with spaces between words
*/

function group2Solution(input) {
  const words = input.split(" ");
  const excluded = ["of", "the", "in", "to"];

  // Replace string with new one, with first char capitalized
  // Can't just replace first char, strings are immutable
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);

  words.slice(1).forEach((word, index) => {
    const idx = index + 1;
    if (!excluded.includes(word)) {
      words[idx] = words[idx][0].toUpperCase() + words[idx].slice(1);
    }
  });

  return words.join(" ");
}

/* Richard's solution
  - Split into array of words
  - For each word:
    - If first word: Capitalize first char
    - If not amongst excluded words: Capitalize first char
    - Else: nothing
  - Reassemble into string
*/
function richardsSolution(input) {
  const excluded = ["of", "the", "in", "to"];

  return input
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index == 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else if (!excluded.includes(word)) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    })
    .join(" ");
}
