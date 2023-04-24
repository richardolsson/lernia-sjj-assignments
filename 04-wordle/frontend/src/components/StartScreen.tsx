import { FC, useState } from "react";

type StartScreenProps = {
  onStartGame: (wordLength: number, allowRepeating: boolean) => void;
};

const StartScreen: FC<StartScreenProps> = ({ onStartGame }) => {
  const [wordLength, setWordLength] = useState(5);
  const [allowRepeating, setAllowRepeating] = useState(true);

  return (
    <div>
      <h1>Wordle Clone</h1>
      <div>
        <label>
          Word length
          <input
            type="number"
            min="2"
            max="7"
            value={wordLength}
            onChange={(ev) => setWordLength(parseInt(ev.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Allow repeating characters
          <input
            type="checkbox"
            checked={allowRepeating}
            onChange={(ev) => {
              setAllowRepeating(ev.currentTarget.checked);
            }}
          />
        </label>
      </div>
      <button onClick={() => onStartGame(wordLength, allowRepeating)}>Start game</button>
    </div>
  );
};

export default StartScreen;