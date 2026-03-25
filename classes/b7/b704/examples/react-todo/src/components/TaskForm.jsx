import { useState } from 'react';

export default function TaskForm() {
  const [text, setText] = useState('');
  return (
    <form class="taskForm">
      <input
        class="taskForm__input"
        name="taskText"
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button class="taskForm__submitButton" type="submit">OK</button>
      <p class="taskForm__error"></p>
    </form>
  );
}