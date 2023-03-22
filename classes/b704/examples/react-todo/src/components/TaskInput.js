export default function TaskInput() {
  return (
    <form onSubmit={(ev) => {
      // TODO: Set items here
      ev.preventDefault();
    }}>
      <input
        type="text"
        /*
        value={text}
        onChange={(event) => setText(event.target.value)}
        */
      />
      <button type="submit">OK</button>
    </form>
  )
}