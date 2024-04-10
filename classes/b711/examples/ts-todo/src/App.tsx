import { useState } from 'react';

import './App.css';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';
import { Task } from './types';

function App() {
  const [items, setItems] = useState<Task[]>([
    {
      label: 'Learn JS',
      completed: true,
    },
    {
      label: 'Learn React',
      completed: false,
    },
  ]);

  function handleCreateItem(newItem: Task) {
    const updatedItems = [
      ...items,
      newItem,
    ];
    setItems(updatedItems);
  }

  function handleToggleItem(index: number) {
    const updatedItems = items.map((oldItem, oldIndex) => {
      return {
        completed: (oldIndex == index) ? !oldItem.completed : oldItem.completed,
        label: oldItem.label,
      };
    });

    setItems(updatedItems);
  }
  
  const completed = items.filter(item => item.completed);

  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
      <TaskCount numComplete={completed.length}/>
      <TaskInput onCreateItem={handleCreateItem} />
      <TaskList items={items} onToggleItem={handleToggleItem} />
      <TaskItem
        item={{
          label: 'Complete all the things',
          completed: items.every(item => item.completed),
        }}
      />
    </div>
  );
}

export default App;
