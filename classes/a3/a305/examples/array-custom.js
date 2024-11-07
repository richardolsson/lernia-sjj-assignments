const teacherNames = [
  'Andreas',
  'Richard',
  'Ziggi',
];

function printFirstLetter(name) {
  console.log(name[0]);
}

Array.prototype.forEachReverse = function (func) {
  const array = this;
  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];
    func(element);
  }
}

//teacherNames.forEach(printFirstLetter);

teacherNames.forEachReverse(printFirstLetter);
[24, 27, 29].forEachReverse((number) => console.log(number));