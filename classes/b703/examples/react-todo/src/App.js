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
      <h1 class="app__title">My ToDo</h1>
      <p class="todoCounter">2 completed</p>
      <form class="todoForm">
        <input class="todoForm__input" type="text" />
        <button class="todoForm__submitButton" type="submit">OK</button>
      </form>
      <ul class="todoList">
        {
          items.map((item, index) => {
            const className = item.completed
              ? 'todoList__item todoList__item--completed'
              : 'todoList__item';

            return (
              <li key={index} class={className}>
                <span class="todoList__itemLabel">{item.label}</span>
                <button class="todoList__deleteButton">Delete</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default App;
