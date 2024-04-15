import { FC } from 'react';
import { Guess } from '../types';

import './GuessFeedback.css';

type Props = {
  guess: Guess;
};

const GuessFeedback: FC<Props> = ({ guess }) => {
  return (
    <ul className="GuessFeedback">
      {guess.map((letterData, index) => (
        <li className={letterData.result} key={index}>
          {letterData.letter}
        </li>
      ))}
    </ul>
  );
};

export default GuessFeedback;
