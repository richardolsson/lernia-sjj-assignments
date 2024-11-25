import { createElement, useState } from 'react'

import ChallengeList from './ChallengeList'

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

function App() {
  /*
  Longer JS-only version
  return (
    createElement('div', { className: 'container' }, 
      createElement('button', {}, 'Only A + B'),
      createElement('button', {}, 'Only B'),
      createElement('button', {}, 'All'),
      createElement('p', {}, 'Showing 3'),
      createElement(ChallengeList, { challenges: challenges }),
    )
  )
  */

  // JSX version
  return (
    <div className="container">
      <button>Only A + B</button>
      <button>Only B</button>
      <button>All</button>
      <p>Showing 3</p>
      <ChallengeList challenges={challenges}/>
    </div>
  );
}

export default App
