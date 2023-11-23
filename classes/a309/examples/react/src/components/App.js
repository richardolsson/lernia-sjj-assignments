import React from 'react';

const challenges = [
  {
    id: 'a',
    title: 'Challenge A',
  },
  {
    id: 'b',
    title: 'Challenge B',
  },
  {
    id: 'c',
    title: 'Challenge C',
  },
];

export default function App() {
  return (
    React.createElement('div', {},
      React.createElement('button', {}, 'Only A + B'),
      React.createElement('button', {}, 'Only B'),
      React.createElement('button', {}, 'All'),
      React.createElement('p', {}, 'Showing 3'),
      React.createElement('ul', {}, challenges.map((challenge) => {
        return (
          React.createElement('li', {}, challenge.title)
        );
      }))
    )
  );
}