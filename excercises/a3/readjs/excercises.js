/**
 * STRUCTURE
 *
 * Series 1: Plain values, arithmetic and string ops
 * Series 2: Basic arrays and loops
 * Series 3: Basic objects and different types of access
 * Series 4: Complex structures (arrays + objects)
 * Series 5: Array/Object methods
 * Series 6: Functions, function references etc
 * Series 7: Exceptions
 * Series 8: Putting it all together
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


function ex1c(input) {
  if (input > 0 && input < 2) {
    return true;
  }

  return false;
}


function ex1d(input) {
  const double = input * 2;

  return (double > 2 && double < 5);
}


function ex1e(input) {
  input++;
  input++;
  return input++ === 42;
}


function ex1f(input) {
  ++input;
  ++input;
  return ++input === 42;
}


function ex1g(input) {
  return (
    input[0] === 'f' &&
    input[1] === 'o' &&
    input[2] === 'o'
  );
}


function ex1h(input) {
  const s = input + '!';
  return s === 'Hello!';
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


function ex3b(input) {
  return (input.x === input.y);
}


function ex3c(input) {
  return input.values.x === 42;
}


function ex3d(input) {
  const field = 'value';
  return input[field] === 42;
}


function ex3e(input) {
  const number = input[input.fieldName];
  return number === 42;
}



/* --------------------------------------------------------------
 * 4: Complex structures
*/


function ex4a(input) {
  return input.values[0] === 42;
}


function ex4b(input) {
  const field = 'foo';
  return input[field][0] === 42;
}


function ex4c(input) {
  let sum = 0;

  for (let i = 0; i < input.fields.length; i++) {
    const fieldName = input.fields[i];
    const val = input.values[fieldName];
    sum += val;
  }

  return input.fields.length > 1 && sum === 42;
}


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


function ex5c(input) {
  return Object.keys(input).length === 3;
}


function ex5d(input) {
  const fields = Object.keys(input);
  const sortedFields = fields.sort();

  return (
    sortedFields[0] === 'a' &&
    sortedFields[2] === 'c'
  );
}



/* --------------------------------------------------------------
 * 6: Functions, function references etc
*/


function ex6a(input) {
  return ex2c(input);
}


function ex6b(input) {
  return ex2c(input) && input.length == 4;
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


function ex6e(input) {
  const func = () => {
    if (input === 42) {
      return 42/2;
    }
    else {
      return 42;
    }
  };

  return func(input) === 42;
}


function ex6f(input) {
  let x = false;

  const func = () => {
    x = true;
  };

  input(func);

  return x;
}


function ex6g(input) {
  let values = [];

  const func = (x) => {
    if (x > 0) {
      values.push(x);
      func(x - 1);
    }
  };

  if (input.length < 3) {
    return false;
  }

  func(input.length);

  for (let i = 0; i < input.length; i++) {
    if (values[i] !== input[i]) {
      return false;
    }
  }

  return true;
}


/* --------------------------------------------------------------
 * 7: Exceptions
*/


function ex7a(input) {
  if (input === 42) {
    throw new Error('42');
  }

  return true;
}


function ex7b(input) {
  try {
    if (input === 42) {
      return true;
    }
    else {
      throw new Error();
    }
  }
  catch (err) {
    return false;
  }
}


function ex7c(input) {
  try {
    if (input === 42) {
      throw new Error('42');
    }

    return true;
  }
  catch (err) {
    return false;
  }
}


function ex7d(input) {
  const func = (x) => {
    if (x === 32) {
      throw new Error('Done');
    }
    else if (x > 1000) {
      return;
    }
    else {
      func(x * 2);
    }
  };

  try {
    func(input * 2);
  }
  catch (err) {
    if (err.message == 'Done') {
      return true;
    }
  }

  return false;
}


/* --------------------------------------------------------------
 * 8: Putting it all together
*/


function ex8a(input) {
  let sum = 0;

  input.fields.forEach(fieldName => {
    sum += input.values[fieldName];
  });

  return input.fields.length > 1 && sum === 42;
}


function ex8b(input) {
  const knownNames = [
    'Chip', 'Dale', 'Jack', 'Gadget', 'Zipper',
  ];

  if (input.length != 3) {
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    const character = input[i];
    if (!knownNames.includes(character.name)) {
      throw new Error('Unknown character');
    }

    if (character.age < 3) {
      return false;
    }
  }

  return true;
}


function ex8c(input) {
  const values = [
    true, false, true, true, true, false, true,
  ];

  try {
    values.forEach((val, idx) => {
      const isEven = (idx % 2) === 0;
      const expected = (idx === 3 || isEven)? val : !val;

      if (input !== expected) {
        throw new Error('Invalid value');
      }
    });

    return true;
  }
  catch (err) {
    return false;
  }
}


const excercises = {
  ex1a, ex1b, ex1c, ex1d, ex1e, ex1f, ex1g, ex1h,
  ex2a, ex2b, ex2c,
  ex3a, ex3b, ex3c, ex3d, ex3e,
  ex4a, ex4b, ex4c,
  ex5a, ex5b, ex5c, ex5d,
  ex6a, ex6b, ex6c, ex6d, ex6e, ex6f, ex6g,
  ex7a, ex7b, ex7c, ex7d,
  ex8a, ex8b, ex8c,
}

if (typeof module == 'object') {
  module.exports = excercises;
}
