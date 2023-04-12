import { FC } from 'react';
import { Task } from '../types';

type TaskListProps = {
  tasks: Task[];
}

//export default function TaskList({ tasks }: { tasks: Task[] }): JSX.Element {
const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task.text}</li>
      ))}
    </ul>
  );
}

export default TaskList;