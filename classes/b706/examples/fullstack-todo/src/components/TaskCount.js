export default function TaskCount({ items }) {
  const count = items.filter(item => item.completed).length
  return (
    <p>{count} completed</p>
  );
}