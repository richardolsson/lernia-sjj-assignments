import GuessInput from "../components/GuessInput";
import { Game } from "../types";
import GuessList from "../components/GuessList";
import Timer from "../components/Timer";

type GameScreenProps = {
  game: Game;
  onGuess: (guess: string) => void;
};

const GameScreen: React.FC<GameScreenProps> = ({ game, onGuess }) => {
  return (
    <div className="GameScreen">
      <Timer />
      <GuessInput onGuess={onGuess} wordLength={game.wordLength} />
      <GuessList guesses={game.guesses} />
    </div>
  );
};

export default GameScreen;
