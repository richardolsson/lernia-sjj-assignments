export default function TaskItem() {
  return (
    <li className="todoList__item" onClick={() => { }}>
      <span className="todoList__itemLabel">Learn React Components</span>
      <button className="todoList__deleteButton">Delete</button>
    </li>
  );
}