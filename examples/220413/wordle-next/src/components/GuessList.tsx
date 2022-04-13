import { Guess } from "../types";
import GuessItem from "./GuessItem";

type GuessListProps = {
  guesses: Guess[];
};

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  return (
    <ul className="GuessList">
      {guesses.map((guess, index) => (
        <li key={index}>
          <GuessItem guess={guess} />
        </li>
      ))}
    </ul>
  );
};

export default GuessList;
