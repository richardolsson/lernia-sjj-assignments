import { useState } from "react";

function App() {
  const [items, setItems] = useState([
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
  ]);

  const completedItems = items.filter(item => item.completed);

  console.log('render!');

  return (
    <main class="app">
      <h1 class="app__title">My ToDo</h1>
      <small class="app__counter">{completedItems.length} completed</small>

      <form class="taskForm">
        <input class="taskForm__input" name="taskText" type="text" />
        <button class="taskForm__submitButton" type="submit">OK</button>
        <p class="taskForm__error"></p>
      </form>
      <ul class="taskList">
        {items.map((item, index) => {
          let classes = 'taskList__item';
          if (item.completed) {
            classes += ' taskList__item--completed';
          }

          return (
            <li class={classes} onClick={() => {
              console.log('click!');
              const oldItems = items;
              const newItems = oldItems.map((oldItem, oldIndex) => ({
                label: oldItem.label,
                completed: oldIndex == index ? !oldItem.completed : oldItem.completed,
              }))
              setItems(newItems);
            }}>
              {item.label}<button class="taskList__itemDeleteButton">🗑</button>
            </li>
          )
        })}
      </ul>
    </main>
  );
}

export default App
