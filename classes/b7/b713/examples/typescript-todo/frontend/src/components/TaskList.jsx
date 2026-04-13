import TaskItem from "./TaskItem.tsx";

export default function TaskList({ items, onToggleItem }) {
  return (
    <ul class="taskList">
      {items.map((item, index) => {
        return (
          <TaskItem
            item={item}
            onToggle={() => {
              onToggleItem(index, !item.completed);
            }}
          />
        )
      })}
    </ul>
  );
}