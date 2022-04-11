import { Guess } from "../types";

type GuessBoxesProps = {
  guess: Guess;
};
const GuessBoxes: React.FC<GuessBoxesProps> = ({ guess }) => {
  return (
    <ul>
      {guess.map((letter, index) => (
        <li key={index} className={letter.result}>
          {letter.letter}
        </li>
      ))}
    </ul>
  );
};

export default GuessBoxes;
