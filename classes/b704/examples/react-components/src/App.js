import './App.css';
import TaskCount from './components/TaskCount';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
      <TaskCount />
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
