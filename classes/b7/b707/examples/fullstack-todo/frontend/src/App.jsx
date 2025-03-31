import { useEffect, useState } from 'react';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await fetch('/api/tasks');
      const payload = await response.json();
      const tasks = payload.data;
      setItems(tasks);
    }

    loadTasks();
  }, []);

  const handleTaskDelete = (item) => {
    setItems(items.filter(oldItem => oldItem != item));
  };

  return (
    <main className="app">
      <h1 className="app__header">My ToDo</h1>
      <TaskCount items={items} />
      <TaskInput onCreateItem={(newItem) => {
        setItems([...items, newItem]);
      }} />
      <TaskList
        items={items}
        onTaskToggle={(item) => {
          setItems(items.map(oldItem => ({
            ...oldItem,
            completed: oldItem == item ? !oldItem.completed : oldItem.completed,
          })));
        }}
        onTaskDelete={handleTaskDelete}
      />
    </main>
  )
}

export default App
