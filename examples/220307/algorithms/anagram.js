/* Group 2 (John, Haeju, Christer, Carola)
  - Iterate over strings and keep only alphabetical characters
  - Sort alphabetically
  - Compare lengths
  - If equal, compare strings
*/

function commonSolution(input0, input1) {
  const alpha0 = Array.from(input0.toLowerCase()).filter((char) =>
    char.match(/[a-z]/)
  );

  const alpha1 = Array.from(input1.toLowerCase()).filter((char) =>
    char.match(/[a-z]/)
  );

  if (alpha0.length != alpha1.length) {
    return false;
  }

  return alpha0.sort().join() === alpha1.sort().join();
}
