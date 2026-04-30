import type { FC } from "react";
import type { Task } from "../types";

type Props = {
  item: Task;
  onToggle: () => void;
}

//Alt: function TaskItem({ item, onToggle }: Props): ReactNode {
const TaskItem : FC<Props> = ({ item, onToggle }) => {
  let classes = 'taskList__item';
  if (item.completed) {
    classes += ' taskList__item--completed';
  }

  return (
    <li className={classes} onClick={() => onToggle()}>
      {item.label}<button className="taskList__itemDeleteButton">🗑</button>
    </li>
  );
}

export default TaskItem;