const students = [
 // Redacted: Student names
];

const studentsWithNumbers = students.map(name => ({
  name,
  number: Math.random(),
}));

const sorted = studentsWithNumbers.sort((s0, s1) => s0.number - s1.number);

const groups = [
  [],
  [],
  [],
  [],
  [],
  [],
];

const groupSize = students.length / groups.length;

sorted.forEach((student, idx) => {
  const groupIndex = Math.floor(idx / groupSize);
  groups[groupIndex].push(student.name);
});

groups.forEach((group, idx) => {
  console.log(`Group ${idx}`);
  console.log(group.join('\n'));
  console.log('');
});
