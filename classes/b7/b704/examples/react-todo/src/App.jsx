function App() {
  const items = [
    {
      label: 'Learn HTML',
      completed: true,
    },
    {
      label: 'Learn CSS',
      completed: true,
    },
    {
      label: 'Learn React',
      completed: false,
    }
  ];

  console.log('render!');

  return (
    <main class="app">
      <h1 class="app__title">My ToDo</h1>
      <small class="app__counter">2 completed</small>

      <form class="taskForm">
        <input class="taskForm__input" name="taskText" type="text" />
        <button class="taskForm__submitButton" type="submit">OK</button>
        <p class="taskForm__error"></p>
      </form>
      <ul class="taskList">
        {items.map(item => {
          let classes = 'taskList__item';
          if (item.completed) {
            classes += ' taskList__item--completed';
          }

          return (
            <li class={classes}>
              {item.label}<button class="taskList__itemDeleteButton">🗑</button>
            </li>
          )
        })}
      </ul>
    </main>
  );
}

export default App
