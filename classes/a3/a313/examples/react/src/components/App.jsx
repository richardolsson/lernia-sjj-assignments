import { createElement, useState } from 'react'

import ChallengeList from './ChallengeList'

function App() {
  /*
  Longer JS-only version
  return (
    createElement('div', { className: 'container' }, 
      createElement('button', {}, 'Only A + B'),
      createElement('button', {}, 'Only B'),
      createElement('button', {}, 'All'),
      createElement('p', {}, 'Showing 3'),
      createElement(ChallengeList, {}),
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
      <ChallengeList/>
    </div>
  );
}

export default App
