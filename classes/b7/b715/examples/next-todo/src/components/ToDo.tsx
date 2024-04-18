'use client';

import { useEffect, useState } from 'react';

import './ToDo.css';
import TaskCount from './TaskCount';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskItem from './TaskItem';
import { Task } from '../types';

function ToDo() {
  const [items, setItems] = useState<Task[]>([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await fetch('/api/tasks');
      const payload = await res.json();
      setItems(payload.tasks);
    }

    loadTasks();
  }, []);

  function handleCreateItem(newItem: Task) {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);

    fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
  }

  function handleToggleItem(index: number) {
    const updatedItems = items.map((oldItem, oldIndex) => {
      return {
        completed: oldIndex == index ? !oldItem.completed : oldItem.completed,
        label: oldItem.label,
      };
    });

    setItems(updatedItems);
  }

  const completed = items.filter((item) => item.completed);

  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
      <TaskCount numComplete={completed.length} />
      <TaskInput onCreateItem={handleCreateItem} />
      <TaskList items={items} onToggleItem={handleToggleItem} />
      <TaskItem
        item={{
          label: 'Complete all the things',
          completed: items.every((item) => item.completed),
        }}
      />
    </div>
  );
}

export default ToDo;
