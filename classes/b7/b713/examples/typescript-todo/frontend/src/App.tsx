import { useEffect, useState } from 'react';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { TaskItem } from './types';

function App() {
  const [items, setItems] = useState<TaskItem[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await fetch('/api/tasks');
      const payload = await response.json();
      const tasks = payload.data;
      setItems(tasks);
    }

    loadTasks();
  }, []);

  const handleTaskDelete = (item: TaskItem) => {
    setItems(items.filter(oldItem => oldItem != item));
  };

  return (
    <main className="app">
      <h1 className="app__header">My ToDo</h1>
      <TaskCount items={items} />
      <TaskInput onCreateItem={async (newItem) => {
        const response = await fetch('/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newItem),
        });

        if (response.status == 201) {
          const payload = await response.json();
          const createdTask = payload.data;
          setItems([...items, createdTask]);
        } else {
          console.log('error');
        }
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
