function TaskItem({ label }) {
  return (
    <li>
      <span className="label">{label}</span>
      <span className="trashcan">🗑</span>
    </li>
  );
}

export default TaskItem;
