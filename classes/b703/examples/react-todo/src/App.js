import './App.css';

function App() {
  return (
    <div className="container">
      <h1>My Todo</h1>
      <small>0 completed</small>
      <form>
        <input type="text" />
        <button type="submit">OK</button>
      </form>
      <ul className="todo-list">
        <li className="todo-item">
          <span>
            Learn JS
          </span>
          <button className="remove-button">🗑</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
