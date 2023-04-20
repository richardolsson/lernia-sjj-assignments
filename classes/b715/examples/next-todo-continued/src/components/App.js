"use client";

import { useEffect, useState } from "react";
import TaskCount from "./TaskCount";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await fetch('/api/tasks');
      const payload = await res.json();
      setItems(payload);
    };

    loadTasks();
  }, []);

  return (
    <div className="container">
      <h1>My Todo</h1>
      <TaskCount items={items} />
      <TaskInput onCreateItem={(label) => {
        const task = {
          text: label,
          completed: false,
        };
        fetch('/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        });
        setItems([...items, task]);
      }} />
      <TaskList items={items} onTaskComplete={(index) => {
        const newItems = items.map((oldItem, oldItemIndex) => {
          const newItem = {
            text: oldItem.text,
            completed: oldItem.completed,
          };

          if (oldItemIndex === index) {
            newItem.completed = !newItem.completed;
          }

          return newItem;
        });

        setItems(newItems);
      }} />
    </div>
  );
}