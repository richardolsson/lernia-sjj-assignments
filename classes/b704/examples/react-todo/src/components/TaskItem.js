export default function TaskItem({ item, onComplete }) {
  return (
    <li
      className={item.completed ? 'todo-item completed' : 'todo-item'}
    >
      <span onClick={() => {
        onComplete();
      }}>
        {item.text}
      </span>
      <button className="remove-button">🗑</button>
    </li>
  );
}