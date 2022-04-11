import { Guess } from "../types";

type GuessItemProps = {
  guess: Guess;
};
const GuessItem: React.FC<GuessItemProps> = ({ guess }) => {
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

export default GuessItem;
