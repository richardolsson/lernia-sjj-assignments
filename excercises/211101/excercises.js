function ex1(input) {
  if (input === 42) {
    return true;
  }

  return false;
}


function ex2(input) {
  if (input === '42') {
    return true;
  }

  return false;
}


function ex3(input) {
  if (input.value == 42) {
    return true;
  }

  return false;
}


function ex4(input) {
  return ex3(input);
}


function ex5(input) {
  if (input.length == 2) {
    if (input[0] === 42 && input[1] !== 42) {
      return true;
    }
  }

  return false;
}


function ex6(input) {
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


function ex7(input) {
  return ex6(input) && input.length == 4;
}


function ex8(input) {
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


function ex9(input) {
  if (input.length < 2) {
    return false;
  }

  const bools = input.map(x => ex1(x));

  return bools.every(b => b === true);
}


function ex10(input) {
  const returnValue = input();

  return returnValue;
}


function ex11(input) {
  const retWhenTrue = input(true);
  const retWhenFalse = input(false);

  return (retWhenTrue === 10) && (retWhenFalse === -10);
}


const excercises = {
  ex1, ex2, ex3, ex4, ex5,
  ex6, ex7, ex8, ex9, ex10,
  ex11,
}

if (typeof module == 'object') {
  module.exports = excercises;
}
