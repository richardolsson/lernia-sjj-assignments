import { useState } from 'react';

export default function TaskInput() {
  const [text, setText] = useState('');

  return (
    <form className="todoForm" onSubmit={(ev) => {
      ev.preventDefault();
    }}>
      <input className="todoForm__input" type="text" value={text} onChange={(ev) => {
        setText(ev.target.value);
      }} />
      <button className="todoForm__submitButton" type="submit">OK</button>
    </form>
  );
}