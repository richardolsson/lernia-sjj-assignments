import { useState } from "react";

type TaskInputProps = {
  onSubmit: (label: string) => void;
};

const TaskInput: React.FC<TaskInputProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(ev) => setText(ev.target.value)}
        value={text}
      />
      <button onClick={() => onSubmit(text)}>Add</button>
    </div>
  );
};

export default TaskInput;
