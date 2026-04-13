import { useEffect, useState } from "react";

import TaskCounter from './components/TaskCounter.jsx';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.js';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('load tasks');
    fetch('/api/tasks').then(async (response) => {
      const payload = await response.json();
      setItems(payload);
    });
  }, []);

  console.log('render!');


  return (
    <main class="app">
      <h1 class="app__title">My ToDo</h1>
      <TaskCounter items={items} />
      <TaskForm onCreateItem={async (text) => {
        const newItem = {
          label: text,
          completed: false,
        };

        await fetch('/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItem),
        });

        setItems([...items, newItem]);
      }} />
      <TaskList
        items={items}
        onToggleItem={(index, completed) => {
          const oldItems = items;
          const newItems = oldItems.map((oldItem, oldIndex) => ({
            label: oldItem.label,
            completed: oldIndex == index ? completed : oldItem.completed,
          }))
          setItems(newItems);
        }}
      />
    </main>
  );
}

export default App
