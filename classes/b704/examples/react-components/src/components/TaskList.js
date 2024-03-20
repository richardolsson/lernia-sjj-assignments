import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <ul className="todoList">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  );
}