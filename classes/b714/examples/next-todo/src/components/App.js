"use client";

import { useState } from "react";
import TaskCount from "./TaskCount";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <h1>My Todo</h1>
      <TaskCount items={items} />
      <TaskInput onCreateItem={(label) => {
        setItems([...items, {
          text: label,
          completed: false,
        }]);
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