import type { FC } from 'react';
import type { GuessResult, LetterResult } from '../types';

import classes from './GuessList.module.css';

type Props = {
  guesses: GuessResult[];
};

const COLORS: Record<LetterResult['result'], string> = {
  correct: '#8f8',
  incorrect: '#f88',
  misplaced: '#fd8',
};

const GuessList: FC<Props> = ({ guesses }) => {
  return (
    <ul>
      {guesses.map((guess, guessIndex) => {
        return (
          <li key={guessIndex} className={classes.guess}>
            {guess.letters.map((letterItem, letterIndex) => (
              <span
                key={letterIndex}
                className={classes.letter}
                style={{
                  backgroundColor: COLORS[letterItem.result],
                }}
              >
                {letterItem.letter}
              </span>
            ))}
          </li>
        );
      })}
    </ul>
  );
};

export default GuessList;
