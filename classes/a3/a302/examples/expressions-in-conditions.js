console.log('is 27 > 40?');
if (27 > 40) {
  console.log('yes');
} else {
  console.log('no');
}

console.log('is age > 40?');
const age = 38;
if (age > 40) {
  console.log('yes');
} else {
  console.log('no');
}


function getAgeOf(name) {
  if (name == 'richard') {
    return 38;
  } else {
    return undefined;
  }
}

console.log('is getAgeOf("richard") > 40?')
if (getAgeOf('richard') > 40) {
  console.log('yes');
} else {
  console.log('no');
}

const teacher = {
  firstName: 'Richard',
  lastName: 'Olsson',
  getAge: () => 38,
};

console.log('is teacher.getAge() > 40');
if (teacher.getAge() > 40) {
  console.log('yes');
} else {
  console.log('no');
}