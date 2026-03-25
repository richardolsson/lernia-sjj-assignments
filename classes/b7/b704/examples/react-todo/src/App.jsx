import { useState } from "react";

import TaskCounter from './components/TaskCounter.jsx';
import TaskForm from './components/TaskForm.jsx';
import TaskList  from './components/TaskList.jsx';

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
      <TaskForm />
      <TaskList items={items}/>
    </main>
  );
}

export default App
