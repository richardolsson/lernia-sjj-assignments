const teachers = [
  {
    firstName: 'Richard',
    lastName: 'Olsson',
  },
  {
    firstName: 'Andreas',
    lastName: 'Ohlsson',
  },
  {
    firstName: 'Ziggi',
    lastName: 'Källoff',
  }
];

console.log('entire array', teachers);
console.log('first names', teachers.map((teacher) => teacher.firstName));
console.log('with order', teachers.map((teacher, index) => ({
  firstName: teacher.firstName,
  lastName: teacher.lastName,
  order: index + 1
})));

console.log('Richard (found)', teachers.find((teacher) => teacher.firstName == 'Richard'));
console.log('Martin (not found)', teachers.find((teacher) => teacher.firstName == 'Martin'));