import { useState } from 'react';

import './App.css';


function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const numCompleted = items.filter(item => item.completed).length;

  return (
    <div className="container">
      <h1>My Todo</h1>
      <p>{numCompleted} completed</p>
      <form onSubmit={(ev) => {
        setItems([...items, {
          text: text,
          completed: false,
        }]);
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
            <li
              key={index}
              className={ item.completed? 'todo-item completed' : 'todo-item'}
            >
              <span onClick={() => {
                const newItems = items.map((oldItem, oldItemIndex) => {
                  const newItem = {
                    text: oldItem.text,
                    completed: oldItem.completed,
                  };

                  if (oldItemIndex === index) {
                    newItem.completed = !newItem.completed;
                  }

                  return newItem;
                });

                setItems(newItems);
              }}>
                {item.text}
              </span>
              <button className="remove-button">🗑</button>
            </li>
          );
        })}
      </ul>
    </div>
  );

  /* Non-JSX alternative
  return (
    React.createElement('div', { className: 'container' }, [
      React.createElement('h1', {}, 'My Todo'),
      React.createElement('small', {}, '0 completed'),
      …
    ])
  );
  */
}

export default App;
