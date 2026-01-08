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
  return handleREST(method, path, queryString, headers, body);
  /*/
  return handleRPC(method, path, queryString, headers, body);
  //*/
}

async function handleREST(method, path, queryString, headers, body) {
  if (method == 'GET' && path == '/people') {
    const result = getPeople();

    return {
      status: 200,
      body: { result },
    }
  } else if (path.startsWith('/people/')) {
    const personId = path.slice(8);

    if (method == 'GET') {
      const result = getPersonById(personId);

      return {
        status: 200,
        body: { result },
      }
    } else if (method == 'PATCH') {
      const newName = body.name;
      const result = setName(personId, newName);

      return {
        status: 200,
        body: { result },
      }
    }
  }
}

async function handleRPC(method, path, queryString, headers, body) {
  if (method == 'POST' && path == '/') {
    const { funcName, params } = body;

    if (funcName == 'getPeople') {
      const result = getPeople();

      return {
        status: 200,
        body: {
          result,
        }
      };
    } else if (funcName == 'getPerson') {
      const personId = params[0];
      const result = getPersonById(personId);

      return {
        status: 200,
        body: {
          result,
        }
      };
    } else if (funcName == 'setPersonName') {
      const [personId, newName] = params;
      const result = setName(personId, newName);

      return {
        status: 200,
        body: {
          result,
        }
      };
    }
  }
}