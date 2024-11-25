import { createElement, useState } from 'react'

function App() {
  return (
    createElement('div', { className: 'container' }, 
      createElement('button', {}, 'Only A + B'),
      createElement('button', {}, 'Only B'),
      createElement('button', {}, 'All'),
      createElement('p', {}, 'Showing 3'),
      createElement('ul', {},
        createElement('li', {}, 'Challenge A'),
        createElement('li', {}, 'Challenge B'),
        createElement('li', {}, 'Challenge C'),
      )
    )
  )
}

export default App
