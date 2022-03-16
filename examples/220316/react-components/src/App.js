import { useState } from "react";
import "./App.css";
import Count from "./Count";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { completed: false, label: "Learn HTML" },
    { completed: false, label: "Learn CSS" },
    { completed: false, label: "Learn JS" },
  ]);

  return (
    <div className="App">
      <div className="container">
        <h1>My ToDo</h1>
        <Count />
        <TaskInput />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
