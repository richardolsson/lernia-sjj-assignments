import { useState } from "react";

function Game({ correctWord }) {
  const [startTime] = useState(new Date());
  const [gameState, setGameState] = useState("playing");
  const [endTime, setEndtime] = useState(null);
  const [inputText, setInputText] = useState("");
  const [guesses, setGuesses] = useState([]);

  const handleKeyUp = (keyCode) => {
    if (keyCode === "Enter") {
      setGuesses([...guesses, inputText]);
      setInputText("");
      if (inputText === correctWord) {
        setGameState("won");
        setEndtime(new Date());
      }
    }
  };

  const duration = Math.round((endTime - startTime) / 1000);

  if (gameState === "won") {
    return (
      <div className="Game">
        <h1>You won!</h1>
        <p>The correct word was {guesses.at(-1)}</p>
        <p>Guesses: {guesses.length}</p>
        <p>Duration: {duration}s</p>
      </div>
    );
  }

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
