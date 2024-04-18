import { FC, useState } from 'react';
import { Task } from '../types';

type Props = {
  onCreateItem: (item: Task) => void;
}

const TaskInput: FC<Props> = ({ onCreateItem }) => {
  const [text, setText] = useState('');

  return (
    <form className="todoForm" onSubmit={(ev) => {
      ev.preventDefault();

      const newItem = {
        completed: false,
        label: text,
      };

      onCreateItem(newItem);
    }}>
      <input className="todoForm__input" type="text" value={text} onChange={(ev) => {
        setText(ev.target.value);
      }} />
      <button className="todoForm__submitButton" type="submit">OK</button>
    </form>
  );
}

export default TaskInput;