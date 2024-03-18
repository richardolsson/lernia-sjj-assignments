import './App.css';

function App() {
  return (
    <div className="app">
      <h1 class="app__title">My ToDo</h1>
      <p class="todoCounter">2 completed</p>
      <form class="todoForm">
        <input class="todoForm__input" type="text" />
        <button class="todoForm__submitButton" type="submit">OK</button>
      </form>
      <ul class="todoList">
        <li class="todoList__item todoList__item--completed" id="item-1">
          <span class="todoList__itemLabel">Learn HTML</span>
          <button class="todoList__deleteButton">Delete</button>
        </li>
        <li class="todoList__item todoList__item--completed" id="item-2">
          <span class="todoList__itemLabel">Learn JS</span>
          <button class="todoList__deleteButton">Delete</button>
        </li>
        <li class="todoList__item" id="item-3">
          <span class="todoList__itemLabel">Learn React</span>
          <button class="todoList__deleteButton">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
