import { useState } from "react";

function Game({ correctWord }) {
  const [startTime] = useState(new Date());
  const [gameState, setGameState] = useState("playing");
  const [endTime, setEndtime] = useState(null);
  const [inputText, setInputText] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [name, setName] = useState("");

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

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const highscore = {
      correctWord,
      endTime,
      guesses,
      name,
      startTime,
    };

    await fetch("/api/highscores", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(highscore),
    });

    setGameState("end");
  };

  if (gameState === "won") {
    const duration = Math.round((endTime - startTime) / 1000);
    return (
      <div className="Game">
        <h1>You won!</h1>
        <p>The correct word was {guesses.at(-1)}</p>
        <p>Guesses: {guesses.length}</p>
        <p>Duration: {duration}s</p>
        <h2>Add to highscore</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder="Your name"
          />
          <input type="submit" />
        </form>
      </div>
    );
  } else if (gameState === "end") {
    return (
      <div className="Game">
        <h1>Done!</h1>
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
