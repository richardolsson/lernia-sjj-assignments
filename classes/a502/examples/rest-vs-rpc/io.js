
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

/*
// RESTful
export async function handle(method, path, queryString, headers, body) {
  console.log('==================================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);

  if (method === 'GET' && path === '/people') {
    // GET /people
    const people = getPeople();

    return {
      status: 200,
      body: JSON.stringify(people)
    }
  } else if (path.startsWith('/people/')) {
    const idStr = path.slice(8);

    if (method === 'GET') {
      // GET /people/ID
      const person = getPerson(idStr);
      if (!person) {
        return {
          status: 404,
        };
      }

      return {
        status: 200,
        body: JSON.stringify(person),
      }
    } else if (method === 'PATCH') {
      // PATCH /people/ID (name in body)
      const person = setName(idStr, body.name);
      return {
        status: 200,
        body: JSON.stringify(person),
      }
    }
  }
}
/*/

// RPC
export async function handle(method, path, queryString, headers, body) {
  console.log('==================================');
  console.log('method:  ', method);
  console.log('path:    ', path);
  console.log('query:   ', queryString);
  console.log('headers: ', headers);
  console.log('body:    ', body);

  if (method == 'POST' && path == '/rpc') {
    if (body.func == 'getPeople') {
      // getPeople()
      return {
        status: 200,
        body: JSON.stringify({
          returnValue: getPeople(),
        })
      };
    } else if (body.func == 'getPerson') {
      // getPerson(id)
      const id = body.params[0];
      return {
        status: 200,
        body: JSON.stringify({
          returnValue: getPerson(id),
        }),
      };
    } else if (body.func == 'setName') {
      // setName(id, name)
      const id = body.params[0];
      const name = body.params[1];
      const person = setName(id, name);
      return {
        status: 200,
        body: JSON.stringify({
          returnValue: person,
        })
      };
    }
  }
}
//*/
