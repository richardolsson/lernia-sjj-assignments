import React from 'react';

export default function App() {
  return (
    React.createElement('div', {},
      React.createElement('button', {}, 'Only A + B'),
      React.createElement('button', {}, 'Only B'),
      React.createElement('button', {}, 'All'),
      React.createElement('p', {}, 'Showing 3'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Challenge A'),
        React.createElement('li', {}, 'Challenge B'),
        React.createElement('li', {}, 'Challenge C'),
      ])
    )
  );
}