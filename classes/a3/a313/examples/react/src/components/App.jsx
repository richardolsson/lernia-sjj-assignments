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

  /* Longer, explicit code
  const returnValue = useState(['a', 'b', 'c']);
  const visibleIds = returnValue[0];
  const setVisibleIds = returnValue[1];
  */

  const [visibleIds, setVisibleIds] = useState(['a', 'b', 'c']);

  const filteredChallenges = challenges.filter(challenge => visibleIds.includes(challenge.id));

  // JSX version
  return (
    <div className="container">
      <button onClick={() => setVisibleIds(['a', 'b'])}>Only A + B</button>
      <button onClick={() => setVisibleIds(['b'])}>Only B</button>
      <button onClick={() => setVisibleIds(['a', 'b', 'c'])}>All</button>
      <p>Showing {filteredChallenges.length}</p>
      <ChallengeList challenges={filteredChallenges} />
    </div>
  );
}

export default App
