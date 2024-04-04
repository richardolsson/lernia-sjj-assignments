import { useEffect, useState } from "react";

import "./App.css";
import Game from "./Game.js";

function App() {
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
    const startGame = async () => {
      const res = await fetch("http://localhost:5080/api/games", {
        method: "post",
      });
      const data = await res.json();
      setGameId(data.id);
    };

    startGame();
  }, []);

  if (gameId) {
    return (
      <div className="App">
        <Game gameId={gameId} />
      </div>
    );
  } else {
    return <div className="App">Loading...</div>;
  }
}

export default App;
