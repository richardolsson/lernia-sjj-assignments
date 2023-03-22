import { useState } from 'react';

import './App.css';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <h1>My Todo</h1>
      <TaskCount items={items} />
      <TaskInput />
      <TaskList items={items} />
    </div>
  );

  /* Non-JSX alternative
  return (
    React.createElement('div', { className: 'container' }, [
      React.createElement('h1', {}, 'My Todo'),
      React.createElement('small', {}, '0 completed'),
      React.createElement(TaskCount, { count: 5, myFavoriteColor: 'blue' }),
      …
    ])
  );
  */
}

export default App;
