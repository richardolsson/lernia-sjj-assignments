
const people = [
  { id: 1, name: 'Artemis N Folkmore', profession: 'President' },
  { id: 2, name: 'Yev Kassim', profession: 'Restaurateur' },
];

function getPeople() {
  return people;
}

function getPerson(personId) {
  return people.find(person => person.id == personId);
}

function setName(personId, name) {
  const person = getPerson(personId);
  person.name = name;
  return person;
}

export async function handle(method, path, queryString, headers, body) {
  console.log('');
  console.log('= REQUEST =====================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);
}
