import { useState } from "react";
import { Game, GameState } from "../types";
import HomeScreen from "../screens/HomeScreen";
import GameScreen from "../screens/GameScreen";
import WonScreen from "../screens/WonScreen";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.HOME);
  const [game, setGame] = useState<Game | null>(null);

  if (gameState === GameState.HOME) {
    return (
      <HomeScreen
        onStart={async (wordLength, unique) => {
          setGameState(GameState.GAME);

          const res = await fetch("/api/games", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              wordLength: wordLength,
              unique: unique,
            }),
          });
          const data = (await res.json()) as Game;

          setGame({
            ...data,
            guesses: [],
          });
        }}
      />
    );
  } else if (gameState === GameState.GAME) {
    if (game) {
      return (
        <GameScreen
          game={game}
          onGuess={async (guess) => {
            const res = await fetch(`/api/games/${game.id}/guesses`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                guess,
              }),
            });
            const data = await res.json();

            setGame({
              ...game,
              guesses: data.guesses,
            });

            if (data.correct) {
              setGameState(GameState.WON);
            }
          }}
        />
      );
    } else {
      return <h1>Loading...</h1>;
    }
  } else if (gameState === GameState.WON) {
    return (
      <WonScreen
        game={game!}
        onSubmit={async (name) => {
          await fetch(`/api/games/${game!.id}/highscore`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
            }),
          });
          window.location.href = "/highscore";
        }}
      />
    );
  } else {
    return <></>;
  }
};

export default HomePage;
