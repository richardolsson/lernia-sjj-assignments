import TaskItem from "./TaskItem";

export default function TaskList({ items, onToggleItem }) {
  return (
    <ul className="todoList">
      {items.map((item, index) => {
        return (
          <TaskItem key={index} item={item} onClick={() => {
            onToggleItem(index);
          }} />
        );
      })}
    </ul>
  );
}