import { FC } from "react";
import { LetterResult } from "../types";

type LetterProps = {
  letterResult: LetterResult,
}

const BG_COLORS = {
  'incorrect': 'red',
  'misplaced': 'yellow',
  'correct': 'green',
  'empty': 'silver',
} as const;

const Letter: FC<LetterProps> = ({letterResult}) => {
  const color = BG_COLORS[letterResult.result];

  return (
    <li style={{
      backgroundColor: color,
      display: 'flex',
      listStyleType: 'none',
      margin: '0.1em',
      width: '3em',
      height: '3em',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {letterResult.letter.toUpperCase()}
    </li>
  );
}

export default Letter;