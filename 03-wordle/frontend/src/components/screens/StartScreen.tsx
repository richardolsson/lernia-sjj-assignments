import { FC, useState } from 'react';

type Props = {
  onStart: (letterCount: number, allowDuplicates: boolean) => void;
};

const StartScreen: FC<Props> = ({ onStart }) => {
  const [letterCount, setLetterCount] = useState(5);
  const [allowDuplicates, setAllowDuplicates] = useState(true);

  return (
    <div>
      <h1>Start</h1>
      <div>
        <select
          value={letterCount}
          onChange={(ev) => {
            setLetterCount(parseInt(ev.target.value));
          }}
        >
          <option value="4">4 letters</option>
          <option value="5">5 letters</option>
          <option value="6">6 letters</option>
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={allowDuplicates}
            onChange={(ev) => setAllowDuplicates(ev.target.checked)}
          />
          Allow duplicates
        </label>
      </div>
      <button
        onClick={() => {
          onStart(letterCount, allowDuplicates);
        }}
      >
        Start game
      </button>
    </div>
  );
};

export default StartScreen;
