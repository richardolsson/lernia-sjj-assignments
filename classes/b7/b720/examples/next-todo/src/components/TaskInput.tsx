'use client';

import { TaskItem } from "@/types";
import { FC, useState } from "react";

type Props = {
  onCreateItem: (itemToCreate: TaskItem) => void;
}

const TaskInput: FC<Props> = ({ onCreateItem }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  let formClass = 'todoForm';
  if (error) {
    formClass += ' todoForm--withError';
  }

  return (
    <form className={formClass} onSubmit={(ev) => {
      ev.preventDefault();
      if (text.length > 0) {
        onCreateItem({
          label: text,
          completed: false,
        });
        setText('');
      } else {
        setError(true);
      }
    }}>
      <input type="text" className="todoForm__input" value={text} onChange={(ev) => {
        if (error) {
          setError(false);
        }
        setText(ev.target.value);
      }} />
      <button type="submit" className="todoForm__okButton">OK</button>
      <small className="todoForm__error">Input must not be empty</small>
    </form>
  );
}

export default TaskInput;