import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);
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

  let formClass = 'todoForm';
  if (error) {
    formClass += ' todoForm--withError';
  }

  return (
    <main className="app">
      <h1 className="app__header">My ToDo</h1>
      <p className="app__status">{items.filter(item => item.completed).length} completed</p>
      <form className={formClass} onSubmit={(ev) => {
        ev.preventDefault();
        if (text.length > 0) {
          setItems([
            ...items,
            {
              label: text,
              completed: false,
            },
          ]);
          setText('');
        } else {
          setError(true);
        }
      }}>
        <input type="text" className="todoForm__input" value={text} onChange={(ev) => {
          if (error) {
            setError(false);
          }
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
              <button className="todoItem__deleteButton" onClick={(ev) => {
                ev.stopPropagation();
                setItems(items.filter(oldItem => oldItem != item));
              }}>🗑️</button>
            </li>
          );
        })}
      </ul>
    </main>
  )
}

export default App
