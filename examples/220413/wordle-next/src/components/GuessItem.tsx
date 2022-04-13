import { Guess } from "../types";

import classes from "./GuessItem.module.css";

const RESULT_CLASSES = {
  correct: classes.correct,
  incorrect: classes.incorrect,
  misplaced: classes.misplaced,
};

type GuessItemProps = {
  guess: Guess;
};
const GuessItem: React.FC<GuessItemProps> = ({ guess }) => {
  return (
    <ul className={classes.container}>
      {guess.map((letter, index) => (
        <li key={index} className={RESULT_CLASSES[letter.result]}>
          {letter.letter}
        </li>
      ))}
    </ul>
  );
};

export default GuessItem;
