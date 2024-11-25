import { createElement, useState } from 'react'

import ChallengeList from './ChallengeList'

function App() {
  return (
    createElement('div', { className: 'container' }, 
      createElement('button', {}, 'Only A + B'),
      createElement('button', {}, 'Only B'),
      createElement('button', {}, 'All'),
      createElement('p', {}, 'Showing 3'),
      createElement(ChallengeList, {}),
    )
  )
}

export default App
