import { FC, useState } from "react";
import { Game, GuessResult } from "../types";
import GuessInput from "./GuessInput";

type GameScreenProps = {
  game: Game;
}

const GameScreen: FC<GameScreenProps> = ({ game }) => {
  const [guesses, setGuesses] = useState<GuessResult[]>([]);

  return (
    <div>
      <h1>GAME</h1>
      <ul>
        {guesses.map((guess, index) => {
          return (
            <li key={index}>
              {JSON.stringify(guess)}
            </li>
          );
        })}
      </ul>
      <GuessInput
        onSubmit={async (guess) => {
          const res = await fetch(`/api/games/${game.id}/guesses`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              guess
            })
          });

          const payload = await res.json();
          const allGuesses = guesses.concat([payload.data]);
          setGuesses(allGuesses);
        }}
        wordLength={game.wordLength}
      />
    </div>
  );
}

export default GameScreen;