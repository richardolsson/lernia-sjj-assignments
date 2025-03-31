export default function TaskList({ items, onTaskDelete, onTaskToggle }) {
  return (
    <ul className="todoList">
      {items.map((item) => {
        let className = 'todoItem';
        if (item.completed) {
          className += ' todoItem--completed';
        }

        return (
          <li className={className} onClick={() => {
            onTaskToggle(item);
          }}>
            <span className="todoItem__label">{item.label}</span>
            <button className="todoItem__deleteButton" onClick={(ev) => {
              ev.stopPropagation();
              onTaskDelete(item);
            }}>🗑️</button>
          </li>
        );
      })}
    </ul>
  );
}