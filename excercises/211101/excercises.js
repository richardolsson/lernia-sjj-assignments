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


if (typeof module == 'object') {
  module.exports = {
    ex1, ex2, ex3, ex4, ex5,
  };
}
