import GuessInput from "../components/GuessInput";
import { Game } from "../types";
import GuessList from "../components/GuessList";

type GameScreenProps = {
  game: Game;
  onGuess: (guess: string) => void;
};

const GameScreen: React.FC<GameScreenProps> = ({ game, onGuess }) => {
  return (
    <div className="GameScreen">
      <GuessInput onGuess={onGuess} wordLength={game.wordLength} />
      <GuessList guesses={game.guesses} />
    </div>
  );
};

export default GameScreen;
