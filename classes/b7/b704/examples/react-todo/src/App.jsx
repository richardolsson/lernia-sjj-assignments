import { useState } from "react";

import TaskCounter from './components/TaskCounter.jsx';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';

function App() {
  const [items, setItems] = useState([
    {
      label: 'Learn HTML',
      completed: true,
    },
    {
      label: 'Learn CSS',
      completed: true,
    },
    {
      label: 'Learn React',
      completed: false,
    }
  ]);

  console.log('render!');


  return (
    <main class="app">
      <h1 class="app__title">My ToDo</h1>
      <TaskCounter items={items} />
      <TaskForm onCreateItem={(text) => {
        const newItem = {
          label: text,
          completed: false,
        };

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

export default App
