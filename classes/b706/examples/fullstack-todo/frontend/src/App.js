import { useEffect, useState } from 'react';

import './App.css';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await fetch('/tasks');
      const payload = await res.json();
      setItems(payload.data);
    }

    loadTasks();
  }, []);

  return (
    <div className="container">
      <h1>My Todo</h1>
      <TaskCount items={items} />
      <TaskInput onCreateItem={(label) => {
        setItems([...items, {
          text: label,
          completed: false,
        }]);
      }} />
      <TaskList items={items} onTaskComplete={(index) => {
        const newItems = items.map((oldItem, oldItemIndex) => {
          const newItem = {
            text: oldItem.text,
            completed: oldItem.completed,
          };

          if (oldItemIndex === index) {
            newItem.completed = !newItem.completed;
          }

          return newItem;
        });

        setItems(newItems);
      }} />
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
