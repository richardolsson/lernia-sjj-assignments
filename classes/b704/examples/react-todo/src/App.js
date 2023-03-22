import { useState } from 'react';

import './App.css';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const numCompleted = items.filter(item => item.completed).length;

  return (
    <div className="container">
      <h1>My Todo</h1>
      <TaskCount />
      <TaskInput />
      <TaskList />
    </div>
  );

  /* Non-JSX alternative
  return (
    React.createElement('div', { className: 'container' }, [
      React.createElement('h1', {}, 'My Todo'),
      React.createElement('small', {}, '0 completed'),
      …
    ])
  );
  */
}

export default App;
