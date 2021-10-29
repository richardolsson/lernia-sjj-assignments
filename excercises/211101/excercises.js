/**
 * STRUCTURE
 *
 * Series 1: Plain values, arithmetic and string ops
 * Series 2: Basic arrays and loops
 * Series 3: Basic objects and different types of access
 * Series 4: Complex structures (arrays + objects)
 * Series 5: Array/Object methods
 * Series 6: Functions, function references etc
 * Series 7: Putting it all together
*/

/* --------------------------------------------------------------
 * 1: Plain values, arithmetic and string ops
*/

function ex1a(input) {
  if (input === 42) {
    return true;
  }

  return false;
}


function ex1b(input) {
  if (input === '42') {
    return true;
  }

  return false;
}



/* --------------------------------------------------------------
 * 2: Basic arrays and loops
*/


function ex2a(input) {
  if (input[0] == 42) {
    return true;
  }

  return false;
}


function ex2b(input) {
  if (input.length == 2) {
    return (input[0] === 42 && input[1] !== 42);
  }

  return false;
}


function ex2c(input) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }

  if (sum > 5 && sum < 10) {
    return true;
  }
  else {
    return false;
  }
}



/* --------------------------------------------------------------
 * 3: Basic objects and different types of access
*/


function ex3a(input) {
  if (input.value == 42) {
    return true;
  }

  return false;
}



/* --------------------------------------------------------------
 * 4: Complex structures
*/


/* --------------------------------------------------------------
 * 5: Array/Object methods
*/

function ex5a(input) {
  if (input.length < 2) {
    return false;
  }

  return input.includes('42');
}


function ex5b(input) {
  if (input.length < 2) {
    return false;
  }

  const bools = input.map(x => ex1a(x));

  return bools.every(b => b === true);
}



/* --------------------------------------------------------------
 * 6: Functions, function references etc
*/


function ex6a(input) {
  return ex3a(input);
}


function ex6b(input) {
  return ex6(input) && input.length == 4;
}


function ex6c(input) {
  const returnValue = input();

  return returnValue;
}


function ex6d(input) {
  const retWhenTrue = input(true);
  const retWhenFalse = input(false);

  return (retWhenTrue === 10) && (retWhenFalse === -10);
}



/* --------------------------------------------------------------
 * 7: Putting it all together
*/


function ex7a(input) {
  const knownNames = [
    'Chip', 'Dale', 'Jack', 'Gadget', 'Zipper',
  ];

  if (input.length != 3) {
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    const character = input[i];
    if (!knownNames.includes(character.name)) {
      return false;
    }

    if (character.age < 3) {
      return false;
    }
  }

  return true;
}


const excercises = {
  ex1a, ex1b,
  ex2a, ex2b, ex2c,
  ex3a,
  ex5a, ex5b,
  ex6a, ex6b, ex6c, ex6d,
  ex7a,
}

if (typeof module == 'object') {
  module.exports = excercises;
}
