"use client";

import "./index.css"

import { useEffect, useState, type FC } from "react";

import TaskCounter from './components/TaskCounter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import type { Task } from "./types";
import { createTask } from "./app/actions";

type Props = {
  tasks: Task[];
}

const Todo: FC<Props> = ({tasks}) => {
  const [items, setItems] = useState<Task[]>(tasks);

  console.log('render!');

  return (
    <main className="app">
      <h1 className="app__title">My ToDo</h1>
      <TaskCounter items={items} />
      <TaskForm onCreateItem={async (text) => {
        const taskData = {
          label: text,
          completed: false,
        };

        const newItem = await createTask(taskData);

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
