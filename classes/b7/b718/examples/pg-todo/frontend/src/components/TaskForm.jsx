import { useState } from 'react';

export default function TaskForm({ onCreateItem }) {
  const [text, setText] = useState('');
  return (
    <form class="taskForm"
      onSubmit={(ev) => {
        ev.preventDefault();
        console.log('CLICK', text);
        onCreateItem(text);
      }}
    >
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