
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

//*
// RPC version
export async function handle(method, path, queryString, headers, body) {
  console.log('');
  console.log('= REQUEST =====================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);

  if (method == 'POST' && path == '/rpc') {
    if (body.func == 'getPeople') {
      return {
        status: 200,
        body: JSON.stringify({
          returnValue: getPeople(),
        }),
      };
    } else if (body.func == 'getPerson') {
      const personId = body.parameters[0];
      return {
        status: 200,
        body: JSON.stringify({
          returnValue: getPerson(personId),
        }),
      }
    } else if (body.func == 'setName') {
      const personId = body.parameters[0];
      const newName = body.parameters[1];
      return {
        status: 200,
        body: JSON.stringify({
          returnValue: setName(personId, newName),
        })
      }
    }
  }
}

/*/
// REST version
export async function handle(method, path, queryString, headers, body) {
  console.log('');
  console.log('= REQUEST =====================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);

  if (method == 'GET' && path == '/people') {
    const allPeople = getPeople();

    return {
      status: 200,
      body: JSON.stringify(allPeople),
    }
  } else if (path.startsWith('/people/')) {
    const personId = path.slice(8);
    const person = getPerson(personId);

    if (person) {
      if (method == 'GET') {
        return {
          status: 200,
          body: JSON.stringify(person),
        }
      } else if (method == 'PATCH') {
        const person = setName(personId, body.name);
        return {
          status: 200,
          body: JSON.stringify(person),
        }
      }
    } else {
      return {
        status: 404,
      }
    }
  }
}
//*/