import { useState, type FC } from 'react';

type Props = {
  onCreateItem: (text: string) => void;
}

const TaskForm: FC<Props> = ({ onCreateItem }) => {
  const [text, setText] = useState('');
  return (
    <form className="taskForm"
      onSubmit={(ev) => {
        ev.preventDefault();
        console.log('CLICK', text);
        onCreateItem(text);
      }}
    >
      <input
        className="taskForm__input"
        name="taskText"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button className="taskForm__submitButton" type="submit">OK</button>
      <p className="taskForm__error"></p>
    </form>
  );
}

export default TaskForm;