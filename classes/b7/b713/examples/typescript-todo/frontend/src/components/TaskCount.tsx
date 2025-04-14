export default function TaskCount({ items }) {
  return (
    <p className="app__status">{items.filter(item => item.completed).length} completed</p>
  );
}