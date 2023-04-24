import { FC } from "react";
import { GuessResult } from "../types";
import Letter from "./Letter";

type GuessProps = {
  result: GuessResult,
}

const Guess: FC<GuessProps> = ({ result }) => {
  return (
    <ul style={{
      display: 'flex',
    }}>
      {result.letters.map((letterResult, index) => (
        <Letter key={index} letterResult={letterResult} />
      ))}
    </ul>
  );
}

export default Guess;