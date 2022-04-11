import { useState } from "react";
import "./App.css";
import { GameState } from "./types";
import HomeScreen from "./screens/HomeScreen";

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.HOME);
  const [gameId, setGameId] = useState<string | null>(null);

  if (gameState === GameState.HOME) {
    return (
      <HomeScreen
        onStart={async (wordLength, unique) => {
          const res = await fetch("http://localhost:5080/api/games", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              wordLength: wordLength,
              unique: unique,
            }),
          });
          const data = await res.json();
          setGameId(data.id);
          setGameState(GameState.GAME);
        }}
      />
    );
  } else if (gameState === GameState.GAME) {
    return <h1>GAME {gameId}</h1>;
  } else {
    return <></>;
  }
};

export default App;
