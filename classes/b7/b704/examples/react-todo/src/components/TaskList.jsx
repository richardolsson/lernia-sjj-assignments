import TaskItem from "./TaskItem.jsx";

export default function TaskList(props) {
  const items = props.items;
  return (
    <ul class="taskList">
      {items.map((item, index) => {
        return (
          <TaskItem item={item} />
        )
      })}
    </ul>
  );
}