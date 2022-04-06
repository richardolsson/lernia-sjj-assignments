import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { label: "Learn HTML", completed: true },
    { label: "Learn CSS", completed: true },
    { label: "Learn JS", completed: true },
    { label: "Learn React", completed: true },
    { label: "Learn Typescript", completed: false },
  ]);

  return (
    <div className="App">
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
