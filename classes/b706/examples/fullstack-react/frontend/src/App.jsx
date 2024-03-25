import { useEffect, useState } from 'react';

import './App.css';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const response = await fetch('/api/items');
      const payload = await response.json();
      setItems(payload.items);
    }

    loadItems();
  }, []);

  function handleCreateItem(newItem) {
    const updatedItems = [
      ...items,
      newItem,
    ];

    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem)
    });

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

  const numCompleted = items.filter(item => item.completed).length;

  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
      <TaskCount completed={numCompleted} />
      <TaskInput onCreateItem={handleCreateItem} />
      <TaskList items={items} onToggleItem={handleToggleItem} />
    </div>
  );
}

export default App;
