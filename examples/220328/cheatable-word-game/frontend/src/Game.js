import { useState } from "react";

function Game({ correctWord }) {
  const [inputText, setInputText] = useState("");
  const [guesses, setGuesses] = useState([]);

  const handleKeyUp = (keyCode) => {
    if (keyCode === "Enter") {
      setGuesses([...guesses, inputText]);
      setInputText("");
    }
  };

  return (
    <div className="Game">
      <input
        value={inputText}
        onChange={(ev) => setInputText(ev.target.value)}
        onKeyUp={(ev) => handleKeyUp(ev.code)}
      />
      <ul>
        {guesses.map((guess, index) => (
          <li key={index}>{guess}</li>
        ))}
      </ul>
    </div>
  );
}

export default Game;
