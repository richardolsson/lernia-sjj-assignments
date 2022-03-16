import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  const taskElements = tasks.map((task) => {
    return <TaskItem key={task.label} label={task.label} />;
  });

  return <ul>{taskElements}</ul>;
}

export default TaskList;
