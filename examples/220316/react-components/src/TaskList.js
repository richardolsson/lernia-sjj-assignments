import TaskItem from "./TaskItem";

function TaskList() {
  return (
    <ul>
      <TaskItem label="Learn HTML" />
      <TaskItem label="Learn CSS" />
      <TaskItem label="Learn JS" />
    </ul>
  );
}

export default TaskList;
