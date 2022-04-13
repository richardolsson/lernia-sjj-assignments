import { useState } from "react";

import classes from "./GuessInput.module.css";

type GuessInputProps = {
  wordLength: number;
  onGuess: (guess: string) => void;
};

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, wordLength }) => {
  const [text, setText] = useState("");

  return (
    <div className={classes.container}>
      <ul>
        {Array.from(new Array(wordLength)).map((_, index) => (
          <li key={index} />
        ))}
      </ul>
      <input
        value={text}
        onChange={(ev) => setText(ev.target.value)}
        type="text"
        placeholder="Enter guess"
      />
      <button onClick={() => onGuess(text)}>Guess</button>
    </div>
  );
};

export default GuessInput;
