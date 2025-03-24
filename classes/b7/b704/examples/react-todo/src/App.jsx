
function App() {
  return (
    <main class="app">
      <h1 class="app__header">My ToDo</h1>
      <p class="app__status">1 completed</p>
      <form class="todoForm">
        <input type="text" class="todoForm__input" />
        <button type="submit" class="todoForm__okButton">OK</button>
        <small class="todoForm__error">Input must not be empty</small>
      </form>
      <ul class="todoList">
        <li class="todoItem todoItem--completed">
          <span class="todoItem__label">Learn HTML</span>
          <button class="todoItem__deleteButton">🗑️</button>
        </li>
        <li class="todoItem">
          <span class="todoItem__label">Learn JS</span>
          <button class="todoItem__deleteButton">🗑️</button>
        </li>
        <li class="todoItem">
          <span class="todoItem__label">Learn React</span>
          <button class="todoItem__deleteButton">🗑️</button>
        </li>
      </ul>
    </main>
  )
}

export default App
