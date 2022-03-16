import "./App.css";
import Count from "./Count";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>My ToDo</h1>
        <Count />
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
