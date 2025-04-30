import { TaskItem } from "@/types";
import { FC } from "react";


type Props = {
  items: TaskItem[],
  onTaskDelete: (itemToDelete: TaskItem) => void;
  onTaskToggle: (taskToToggle: TaskItem) => void;
}

//export default function TaskList({ items, onTaskDelete, onTaskToggle }: Props) : ReactNode {
//const TaskList: FunctionComponent<Props> = ({ items, onTaskDelete, onTaskToggle }) => {

const TaskList: FC<Props> = ({ items, onTaskDelete, onTaskToggle }) => {
  return (
    <ul className="todoList">
      {items.map((item, index) => {
        let className = 'todoItem';
        if (item.completed) {
          className += ' todoItem--completed';
        }

        return (
          <li key={index} className={className} onClick={() => {
            onTaskToggle(item);
          }}>
            <span className="todoItem__label">{item.label}</span>
            <button className="todoItem__deleteButton" onClick={(ev) => {
              ev.stopPropagation();
              onTaskDelete(item);
            }}>🗑️</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;