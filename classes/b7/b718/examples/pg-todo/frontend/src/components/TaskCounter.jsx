export default function TaskCounter({ items }) {
  const completedItems = items.filter(item => item.completed);
  return (
    <small class="app__counter">{completedItems.length} completed</small>
  );
}