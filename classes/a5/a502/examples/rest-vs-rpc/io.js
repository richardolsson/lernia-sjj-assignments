const people = [
  { id: 1, name: 'Artemis N Folkmore', profession: 'President' },
  { id: 2, name: 'Yev Kassim', profession: 'Restaurateur' },
];
function getPeople() {
  return people;
}
function getPersonById(personId) {
  return people.find(person => person.id == personId);
}
function setName(personId, name) {
  const person = getPersonById(personId);
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

  //*
  if (method == 'GET' && path == '/people') {
    const people = getPeople();

    return {
      status: 200,
      body: people,
    }
  } else if (path.startsWith('/people/')) {
    const personId = path.slice(8);
    const person = getPersonById(personId);

    if (method == 'GET') {
      return {
        status: 200,
        body: person,
      }
    } else if (method == 'PATCH') {
      const newName = body.name;
      const person = setName(personId, newName);

      return {
        status: 200,
        body: person,
      }
    }
  }
  //*/

  /*
  if (method == 'POST') {
    if (body.funcName == 'getPeople') {
      const people = getPeople();
      return {
        status: 200,
        body: {
          result: people,
        }
      }
    } else if (body.funcName == 'getPerson') {
      const personId = body.params[0];
      const person = getPersonById(personId);
      return {
        status: 200,
        body: {
          result: person
        }
      }
    } else if (body.funcName == 'setPersonName') {
      const personId = body.params[0];
      const newName = body.params[1];
      setName(personId, newName);

      return {
        status: 200,
        body: {
          result: true
        }
      }
    }
  }
    //*/
}