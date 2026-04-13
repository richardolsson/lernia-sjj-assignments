import type { ReactNode } from "react";
import TaskItem from "./TaskItem.js";
import type { Task } from "../types.js";

type Props = {
  items: Task[];
  onToggleItem: (index: number, completed: boolean) => void;
}

type Component = (props: Props) => ReactNode;

const TaskList : Component = ({ items, onToggleItem }) => {
  return (
    <ul className="taskList">
      {items.map((item, index) => {
        return (
          <TaskItem
            item={item}
            onToggle={() => {
              onToggleItem(index, !item.completed);
            }}
          />
        )
      })}
    </ul>
  );
}

export default TaskList;