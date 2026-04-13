import type { FC } from "react";
import type { Task } from "../types.js";

type Props = {
  items: Task[];
}

const TaskCounter: FC<Props> = ({ items }) => {
  const completedItems = items.filter(item => item.completed);
  return (
    <small className="app__counter">{completedItems.length} completed</small>
  );
}

export default TaskCounter;