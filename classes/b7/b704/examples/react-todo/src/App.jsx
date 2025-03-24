
function App() {
  const items = [
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
  ];

  return (
    <main className="app">
      <h1 className="app__header">My ToDo</h1>
      <p className="app__status">1 completed</p>
      <form className="todoForm">
        <input type="text" className="todoForm__input" />
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
            <li className={className}>
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
