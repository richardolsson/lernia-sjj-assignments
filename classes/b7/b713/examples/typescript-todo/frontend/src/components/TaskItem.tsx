import type { ReactNode } from "react";

type Task = {
  label: string;
  completed: boolean;
}

type Props = {
  item: Task;
  onToggle: () => void;
}

type Component = (props: Props) => ReactNode;


//Alt: function TaskItem({ item, onToggle }: Props): ReactNode {
const TaskItem : Component = ({ item, onToggle }) => {
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