
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

// RESTful
/*
export async function handle(method, path, queryString, headers, body) {
  console.log('==================================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);

  if (method == 'GET' && path == '/people') {
    return {
      status: 200,
      body: getPeople(),
    }
  }
  else if (method == 'GET' && path.startsWith('/people/')) {
    const idString = path.slice(8);
    const id = parseInt(idString);
    const person = getPerson(id);

    if (!person) {
      return {
        status: 404,
      }
    }

    return {
      status: 200,
      body: person,
    };
  }
  else if (method == 'PATCH' && path.startsWith('/people/')) {
    const idString = path.slice(8);
    const id = parseInt(idString);
    const data = JSON.parse(body);
    const person = setName(id, data.name);

    return {
      status: 200,
      body: person,
    }
  }
}
//*/

// RPC
//*
export async function handle(method, path, queryString, headers, body) {
  console.log('==================================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);

  if (method == 'POST' && path == '/rpc') {
    const obj = JSON.parse(body);

    if (obj.function == 'getPeople') {
      const returnValue = getPeople();
      return {
        status: 200,
        body: { returnValue },
      }
    }
    else if (obj.function == 'getPerson') {
      const returnValue = getPerson(obj.params[0]);
      return {
        status: 200,
        body: { returnValue },
      }
    }
    else if (obj.function == 'setName') {
      const returnValue = setName(obj.params[0], obj.params[1]);
      return {
        status: 200,
        body: { returnValue },
      }
    }
  }
}
//*/
