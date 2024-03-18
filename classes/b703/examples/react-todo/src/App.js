import { useState } from 'react';

import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {
      completed: true,
      label: 'Learn HTML',
    },
    {
      completed: true,
      label: 'Learn Javascript',
    },
    {
      completed: false,
      label: 'Learn React',
    },
  ]);

  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
      <p className="todoCounter">2 completed</p>
      <form className="todoForm" onSubmit={(ev) => {
        ev.preventDefault();

        const updatedItems = [
          ...items,
          {
            completed: false,
            label: value,
          }
        ];

        setItems(updatedItems);
      }}>
        <input className="todoForm__input" type="text" value={value} onChange={(ev) => {
          setValue(ev.target.value);
        }} />
        <button className="todoForm__submitButton" type="submit">OK</button>
      </form>
      <ul className="todoList">
        {
          items.map((item, index) => {
            const className = item.completed
              ? 'todoList__item todoList__item--completed'
              : 'todoList__item';

            return (
              <li key={index} className={className} onClick={() => {
                const updatedItems = items.map((oldItem, oldIndex) => {
                  return {
                    completed: (oldIndex == index) ? !oldItem.completed : oldItem.completed,
                    label: oldItem.label,
                  };
                });

                setItems(updatedItems);
              }}>
                <span className="todoList__itemLabel">{item.label}</span>
                <button className="todoList__deleteButton">Delete</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
