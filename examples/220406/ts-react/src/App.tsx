import { useState } from "react";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (userText: string) => {
    const newTask: Task = { label: userText, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <TaskList tasks={tasks} />
      <TaskInput onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
