import { useState } from 'react';

import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  return (
    <div className="container">
      <h1>My Todo</h1>
      <small>0 completed</small>
      <form onSubmit={(ev) => {
        setItems([...items, text]);
        ev.preventDefault();
      }}>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">OK</button>
      </form>
      <ul className="todo-list">
        {items.map((item, index) => {
          return (
            <li className="todo-item" key={index}>
              <span>
                {item}
              </span>
              <button className="remove-button">🗑</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
