import { useState } from "react";

function TaskInput({ onSubmit }) {
  const [text, setText] = useState("");

  const onClickOk = () => {
    setText("");
    onSubmit(text);
  };

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  // Return two elements in a React "fragment"
  return (
    <>
      <input type="text" value={text} onChange={onTextChange} />
      <button onClick={onClickOk}>OK</button>
    </>
  );
}

export default TaskInput;
