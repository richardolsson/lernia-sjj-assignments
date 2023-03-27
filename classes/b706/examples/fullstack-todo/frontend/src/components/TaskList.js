import TaskItem from "./TaskItem";

export default function TaskList({ items, onTaskComplete }) {
  return (
    <ul className="todo-list">
      {items.map((item, index) => {
        return (
          <TaskItem key={index} item={item} onComplete={() => {
            onTaskComplete(index);
          }} />
        );
      })}
    </ul>
  );
}