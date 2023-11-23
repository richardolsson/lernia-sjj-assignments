import React from 'react';
import ChallengeList from './ChallengeList';

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
  /* Without JSX
  return (
    React.createElement('div', {},
      React.createElement('button', {}, 'Only A + B'),
      React.createElement('button', {}, 'Only B'),
      React.createElement('button', {}, 'All'),
      React.createElement('p', {}, 'Showing 3'),
      React.createElement(ChallengeList, { challenges: challenges }),
    )
  );
  */

  // With JSX
  return (
    <div>
      <button>Only A + B</button>
      <button>Only B</button>
      <button>All</button>
      <p>Showing 3</p>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}