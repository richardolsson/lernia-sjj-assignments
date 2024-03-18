import './App.css';

function App() {
  const items = [
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
  ];

  return (
    <div className="app">
      <h1 className="app__title">My ToDo</h1>
      <p className="todoCounter">2 completed</p>
      <form className="todoForm">
        <input className="todoForm__input" type="text" />
        <button className="todoForm__submitButton" type="submit">OK</button>
      </form>
      <ul className="todoList">
        {
          items.map((item, index) => {
            const className = item.completed
              ? 'todoList__item todoList__item--completed'
              : 'todoList__item';

            return (
              <li key={index} className={className}>
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
