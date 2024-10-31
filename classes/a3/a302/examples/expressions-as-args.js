function add(a, b) {
  console.log('');
  console.log('adding', a, 'and', b);

  const result = a + b;
  console.log('  result:', result);

  return result;
}

console.log(add(1, 2));
// Same as console.log(3) because:
// add(1, 2) is the same as 1 + 2, which is 3

add('rich', 'ard');


const firstHalf = 'foo';
add(firstHalf, 'bar');


add(add('ri', 'ch'), add('ar', 'd'));


const teacher = {
  firstName: 'Richard',
  lastName: 'Olsson',
};

add(teacher.firstName, teacher.lastName);