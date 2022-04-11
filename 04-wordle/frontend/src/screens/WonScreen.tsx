import { useState } from "react";
import GuessList from "../components/GuessList";
import { Game } from "../types";

type WonScreenProps = {
  game: Game;
  onSubmit: (name: string) => void;
};

const WonScreen: React.FC<WonScreenProps> = ({ game, onSubmit }) => {
  const [name, setName] = useState("");

  return (
    <div className="WonScreen">
      <h1>You won!</h1>
      <input
        value={name}
        onChange={(ev) => setName(ev.target.value)}
        type="text"
        placeholder="Your name"
      />
      <button onClick={() => onSubmit(name)}>Submit to highscore</button>
      <GuessList guesses={game.guesses} />
    </div>
  );
};

export default WonScreen;
