import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { label: "Learn HTML" },
    { label: "Learn CSS" },
    { label: "Learn JS" },
  ]);

  const taskElements = tasks.map((task) => {
    return (
      <li key={task.label}>
        <span className="label">{task.label}</span>
        <span className="trashcan">🗑</span>
      </li>
    );
  });

  const onClickOk = () => {
    setTasks([
      ...tasks,
      {
        label: "New task",
      },
    ]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My ToDo</h1>
        <p className="counter">0 completed</p>
        <input type="text" />
        <button onClick={onClickOk}>OK</button>
        <small className="error"></small>
        <ul>{taskElements}</ul>
      </div>
    </div>
  );
}

export default App;
