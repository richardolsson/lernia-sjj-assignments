export default function TaskItem({ item }) {
  const className = item.completed
    ? 'todoList__item todoList__item--completed'
    : 'todoList__item';

  return (
    <li className={className} onClick={() => { }}>
      <span className="todoList__itemLabel">{item.label}</span>
      <button className="todoList__deleteButton">Delete</button>
    </li>
  );
}