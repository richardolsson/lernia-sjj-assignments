"use client";

import "./index.css"

import { useEffect, useState, type FC } from "react";

import TaskCounter from './components/TaskCounter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import type { Task } from "./types";

const Todo: FC = () => {
  const [items, setItems] = useState<Task[]>([]);

  useEffect(() => {
    console.log('load tasks');
    fetch('/api/tasks').then(async (response) => {
      const payload = await response.json();
      setItems(payload);
    });
  }, []);

  console.log('render!');


  return (
    <main className="app">
      <h1 className="app__title">My ToDo</h1>
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

export default Todo
