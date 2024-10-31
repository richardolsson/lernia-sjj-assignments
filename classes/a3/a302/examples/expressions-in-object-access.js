const teacher = {
  firstName: 'Richard',
  lastName: 'Olsson',
}

console.log('teacher.firstName', teacher.firstName);
console.log('teacher["firstName"]', teacher['firstName']);

const nameField = 'firstName';
console.log('teacher[nameField]', teacher[nameField]);

function whichName() {
  return 'firstName';
}
console.log('teacher[whichName()]', teacher[whichName()]);

function whichPrefix(num) {
  if (num == 1) {
    return 'first';
  } else {
    return 'last';
  }
}
console.log('teacher[whichPrefix(1) + "Name"]', teacher[whichPrefix(1) + "Name"]);

function whichTeacher() {
  return teacher;
}
const richard = whichTeacher();
console.log('richard.firstName', richard.firstName);
console.log('whichTeacher().firstName', whichTeacher().firstName);
console.log('whichTeacher()[whichPrefix(1) + "Name"]',
  whichTeacher()[whichPrefix(1) + "Name"]);