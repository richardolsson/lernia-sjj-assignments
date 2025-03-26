import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    {
      label: 'Learn HTML',
      completed: true,
    },
    {
      label: 'Learn JS',
      completed: true,
    },
    {
      label: 'Learn React',
      completed: false,
    }
  ]);

  return (
    <main className="app">
      <h1 className="app__header">My ToDo</h1>
      <p className="app__status">{items.filter(item => item.completed).length} completed</p>
      <form className="todoForm" onSubmit={(ev) => {
        ev.preventDefault();
        setItems([
          ...items,
          {
            label: text,
            completed: false,
          },
        ]);
        setText('');
      }}>
        <input type="text" className="todoForm__input" value={text} onChange={(ev) => {
          setText(ev.target.value);
        }} />
        <button type="submit" className="todoForm__okButton">OK</button>
        <small className="todoForm__error">Input must not be empty</small>
      </form>
      <ul className="todoList">
        {items.map((item) => {
          let className = 'todoItem';
          if (item.completed) {
            className += ' todoItem--completed';
          }

          return (
            <li className={className} onClick={() => {
              setItems(items.map(oldItem => ({
                ...oldItem,
                completed: oldItem == item ? !oldItem.completed : oldItem.completed,
              })));
            }}>
              <span className="todoItem__label">{item.label}</span>
              <button className="todoItem__deleteButton">🗑️</button>
            </li>
          );
        })}
      </ul>
    </main>
  )
}

export default App
