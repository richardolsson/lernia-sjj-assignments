import { useState } from 'react';

import './App.css';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [items, setItems] = useState([
    {
      label: 'Learn JS',
      completed: true,
    },
    {
      label: 'Learn React',
      completed: false,
    },
  ]);

  function handleCreateItem(newItem) {
    const updatedItems = [
      ...items,
      newItem,
    ];
    setItems(updatedItems);
  }

  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
      <TaskCount />
      <TaskInput onCreateItem={handleCreateItem} />
      <TaskList items={items} />
    </div>
  );
}

export default App;
