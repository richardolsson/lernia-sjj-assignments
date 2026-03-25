export default function TaskItem({ item, onToggle }) {
  let classes = 'taskList__item';
  if (item.completed) {
    classes += ' taskList__item--completed';
  }

  return (
    <li class={classes} onClick={() => onToggle()}>
      {item.label}<button class="taskList__itemDeleteButton">🗑</button>
    </li>
  );
}