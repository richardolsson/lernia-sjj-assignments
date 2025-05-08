'use client';

import { FC, useState } from 'react';
import TaskCount from './TaskCount';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { TaskItem } from '../types';
import { createTask } from '@/action';

type Props = {
  tasks: TaskItem[];
}

const Todo: FC<Props> = ({ tasks }) => {
  const [items, setItems] = useState<TaskItem[]>(tasks);

  console.log('Todo render!');

  const handleTaskDelete = (item: TaskItem) => {
    setItems(items.filter(oldItem => oldItem != item));
  };

  return (
    <main className="app">
      <h1 className="app__header">My ToDo</h1>
      <TaskCount items={items} />
      <TaskInput onCreateItem={async (newItem) => {
        console.log('onCreateItem');
        const createdTask = await createTask(newItem.label);
        setItems([...items, createdTask]);
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

export default Todo;
