import GuessInput from "../components/GuessInput";
import { Game } from "../types";

type GameScreenProps = {
  game: Game;
  onGuess: (guess: string) => void;
};

const GameScreen: React.FC<GameScreenProps> = ({ game, onGuess }) => {
  return (
    <div className="GameScreen">
      <GuessInput onGuess={onGuess} wordLength={game.wordLength} />
    </div>
  );
};

export default GameScreen;
