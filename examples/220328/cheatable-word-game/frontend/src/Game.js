import { useState } from "react";

function Game({ correctWord }) {
  const [inputText, setInputText] = useState("");
  return (
    <div className="Game">
      <input
        value={inputText}
        onChange={(ev) => setInputText(ev.target.value)}
      />
    </div>
  );
}

export default Game;
