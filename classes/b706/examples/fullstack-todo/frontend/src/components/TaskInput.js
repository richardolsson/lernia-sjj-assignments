import { useState } from 'react';

export default function TaskInput({ onCreateItem }) {
  const [text, setText] = useState('');

  return (
    <form onSubmit={(ev) => {
      onCreateItem(text);
      ev.preventDefault();
    }}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">OK</button>
    </form>
  )
}