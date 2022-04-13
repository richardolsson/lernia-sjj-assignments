import { Guess } from "../types";
import GuessItem from "./GuessItem";

import classes from "./GuessList.module.css";

type GuessListProps = {
  guesses: Guess[];
};

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  return (
    <ul className={classes.container}>
      {guesses.map((guess, index) => (
        <li key={index}>
          <GuessItem guess={guess} />
        </li>
      ))}
    </ul>
  );
};

export default GuessList;
