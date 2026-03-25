export default function TaskCounter(props) {
  const items = props.items;

  const completedItems = items.filter(item => item.completed);
  return (
    <small class="app__counter">{completedItems.length} completed</small>
  );
}