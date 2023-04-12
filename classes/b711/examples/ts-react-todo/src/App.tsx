import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    {
      text: 'Learn React',
      completed: false,
    },
    {
      text: 'Learn Typescript',
      completed: false,
    }
  ]);

  return (
    <div className='container'>
      <h1>My ToDo list</h1>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
