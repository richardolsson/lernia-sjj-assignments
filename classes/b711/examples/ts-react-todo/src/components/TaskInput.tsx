import { FC, useState } from "react";

type TaskInputProps = {
  onCreateTask: (text: string) => void;
};

const TaskInput: FC<TaskInputProps> = ({ onCreateTask }) => {
  const [text, setText] = useState('');

  return (
    <form onSubmit={(ev) => {
      ev.preventDefault();
      onCreateTask(text);
    }}>
      <input
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button type="submit">OK</button>
    </form>
  );
};

export default TaskInput;