export default function TaskInput() {
  return (
    <form className="todoForm" onSubmit={(ev) => {
      ev.preventDefault();
    }}>
      <input className="todoForm__input" type="text" onChange={(ev) => { }} />
      <button className="todoForm__submitButton" type="submit">OK</button>
    </form>
  );
}