import { FC } from "react";
import { Task } from "../types";

type Props = {
  item: Task,
  onClick?: () => void,
}

const TaskItem: FC<Props> = ({ item, onClick }) => {
  const className = item.completed
    ? 'todoList__item todoList__item--completed'
    : 'todoList__item';

  return (
    <li className={className} onClick={() => {
      if (onClick) {
        onClick();
      }
    }}>
      <span className="todoList__itemLabel">{item.label}</span>
      <button className="todoList__deleteButton">Delete</button>
    </li>
  );
}

export default TaskItem;