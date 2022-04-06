import { Task } from "../types";

type TaskListProps = {
  tasks: Task[];
};

// Synonyms:
//function TaskList(): JSX.Element | null {
//const TaskList: () => JSX.Element | null = () => {
//const TaskList: React.FunctionComponent = () => {

// Pass in TaskListProps using Typescript "Generics"
const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li
            key={task.label}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.label}
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
