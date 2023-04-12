import { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div className='container'>
      <h1>My ToDo list</h1>
      <TaskInput onCreateTask={(text) => {
        setTasks([
          ...tasks,
          {
            text: text,
            completed: false,
          }
        ]);
      }}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
