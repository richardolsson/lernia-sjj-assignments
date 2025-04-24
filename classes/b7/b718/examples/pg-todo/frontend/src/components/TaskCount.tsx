import { FC } from "react";
import { TaskItem } from "../types";

type Props = {
  items: TaskItem[];
}

const TaskCount: FC<Props> = ({ items }) => {
  return (
    <p className="app__status">{items.filter(item => item.completed).length} completed</p>
  );
}

export default TaskCount;