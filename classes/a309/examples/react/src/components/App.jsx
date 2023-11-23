import React, { useState } from 'react';
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
  /* Long version
  const returnValues = useState(['a', 'b', 'c']);
  const activeIds = returnValues[0];
  const setActiveIds = returnValues[1];
  */
  // Short version
  const [activeIds, setActiveIds] = useState(['a', 'b', 'c']);

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
      <button onClick={() => setActiveIds(['a', 'b']) }>Only A + B</button>
      <button onClick={() => setActiveIds(['b'])}>Only B</button>
      <button onClick={() => setActiveIds(['a', 'b', 'c'])}>All</button>
      <p>Showing {activeIds.length}</p>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}