export default function TaskItem(props) {
  const item = props.item;

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
  );
}