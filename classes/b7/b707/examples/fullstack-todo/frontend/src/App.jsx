import { useState } from 'react';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [items, setItems] = useState([
    {
      label: 'Learn HTML',
      completed: true,
    },
    {
      label: 'Learn JS',
      completed: true,
    },
    {
      label: 'Learn React',
      completed: false,
    }
  ]);

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
