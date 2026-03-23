import React from 'react';

function App() {
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
        <li class="taskList__item taskList__item--completed">
          Learn HTML<button class="taskList__itemDeleteButton">🗑</button>
        </li>
        <li class="taskList__item taskList__item--completed">
          Learn CSS<button class="taskList__itemDeleteButton">🗑</button>
        </li>
        <li class="taskList__item">
          Learn React<button class="taskList__itemDeleteButton">🗑</button>
        </li>
      </ul>
    </main>
  );
}

export default App
