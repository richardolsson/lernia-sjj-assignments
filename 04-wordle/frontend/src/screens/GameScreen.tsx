import GuessBoxes from "../components/GuessBoxes";
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
      <ul>
        {game.guesses.map((guess, index) => (
          <li key={index}>
            <GuessBoxes guess={guess} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameScreen;
