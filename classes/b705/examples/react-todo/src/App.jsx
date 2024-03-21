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

  function handleToggleItem(index) {
    const updatedItems = items.map((oldItem, oldIndex) => {
      return {
        completed: (oldIndex == index) ? !oldItem.completed : oldItem.completed,
        label: oldItem.label,
      };
    });

    setItems(updatedItems);
  }

  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
      <TaskCount />
      <TaskInput onCreateItem={handleCreateItem} />
      <TaskList items={items} onToggleItem={handleToggleItem} />
    </div>
  );
}

export default App;
