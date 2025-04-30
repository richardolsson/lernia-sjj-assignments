import { TaskItem } from "@/types";
import { FC } from "react";

type Props = {
  items: TaskItem[];
}

const TaskCount: FC<Props> = ({ items }) => {
  return (
    <p className="app__status">{items.filter(item => item.completed).length} completed</p>
  );
}

export default TaskCount;