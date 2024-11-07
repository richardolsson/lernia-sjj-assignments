const teacherNames = [
  'Andreas',
  'Richard',
  'Ziggi',
];

console.log('entire array', teacherNames);

console.log('- forEach() --------');
function printFirstLetter(name) {
  console.log(name[0]);
}

teacherNames.forEach(printFirstLetter);

console.log('- filter() --------');
function containsAnA(name) {
  if (name.includes('a')) {
    return true;
  } else {
    return false;
  }
}

const filtered = teacherNames.filter(containsAnA);
console.log('filtered', filtered);

console.log('- filter() shorter ---');
const filteredAgain = teacherNames.filter((name) => name.includes('a'));
console.log('filteredAgain', filteredAgain);