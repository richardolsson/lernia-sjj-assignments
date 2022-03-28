import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Game from "./Game.js";

function App() {
  const [correctWord, setCorrectWord] = useState(null);

  useEffect(() => {
    const loadWord = async () => {
      const res = await fetch("http://localhost:5080/api/random_word");
      const data = await res.json();
      setCorrectWord(data.word);
    };

    loadWord();
  }, []);

  if (correctWord) {
    return (
      <div className="App">
        <Game correctWord={correctWord} />
      </div>
    );
  } else {
    return <div className="App">Loading...</div>;
  }
}

export default App;
