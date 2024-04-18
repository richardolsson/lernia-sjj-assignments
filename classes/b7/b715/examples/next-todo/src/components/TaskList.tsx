import { FC } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

type Props = {
  items: Task[],
  onToggleItem: (index: number) => void,
};

const TaskList: FC<Props> = ({ items, onToggleItem }) => {
  return (
    <ul className="todoList" data-testid="task-list">
      {items.map((item, index) => {
        return (
          <TaskItem key={index} item={item} onClick={() => {
            onToggleItem(index);
          }} />
        );
      })}
    </ul>
  );
}

export default TaskList;