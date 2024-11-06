const teacherNames = ['Andreas', 'Richard', 'Ziggi'];

console.log(teacherNames[0])
console.log(teacherNames.length);

console.log('- WHILE LOOP ---');

function getRandomBetweenZeroAndCeiling(ceiling) {
  return Math.round(Math.random() * ceiling);
}

let i = 0;
while (i < teacherNames.length) {
  console.log(i, teacherNames[getRandomBetweenZeroAndCeiling(i)]);
  //console.log(i, teacherNames[Math.round(Math.random() * i)]);
  i++; // similar to i = i + 1
}

console.log('- FOR LOOP ---');

for (let i = 0; i < teacherNames.length; i++) {
  console.log(i, teacherNames[i]);
}

console.log('- OTHER FOR LOOP ---');

for (let i = getRandomBetweenZeroAndCeiling(2); i != 0; i = Math.round(Math.random() * 2)) {
  console.log(i, teacherNames[i]);
}