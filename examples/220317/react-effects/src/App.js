import { useEffect, useState } from "react";
import "./App.css";
import Count from "./Count";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Every render
  /*
  useEffect(() => {
    console.log("Effect 1");
  });
  */

  // First render only
  useEffect(() => {
    console.log("Loading");
    const loadedJson = localStorage.getItem("storedTasks");
    if (loadedJson) {
      setTasks(JSON.parse(loadedJson));
    } else {
      setTasks([]);
    }
  }, []);

  // Every render when tasks have changed
  useEffect(() => {
    console.log("Saving");
    localStorage.setItem("storedTasks", JSON.stringify(tasks));
  }, [tasks]);

  const onSubmit = (label) => {
    setTasks([
      ...tasks,
      {
        label,
        completed: false,
      },
    ]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My ToDo</h1>
        <Count />
        <TaskInput onSubmit={onSubmit} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
