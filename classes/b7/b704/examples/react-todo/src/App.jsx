import React from 'react';

function App() {
  /*
  return (
    React.createElement('div', {}, [
      React.createElement('h1', { style: { color: 'red' }}, [
        'Hello'
      ]),
      React.createElement('p', {}, [
        'This is ',
        React.createElement('strong', {}, [
          'React'
        ])
      ])
    ])
  );
  */

  return (
    <div>
      <h1 style={{color: 'red'}}>
        Hello
      </h1>
      <p>
        This is <strong>React</strong>
      </p>
    </div>
  )
}

export default App
