import { useState, type FC } from 'react';
import type { GameConfig } from '../../types';

type Props = {
  onStart: (config: GameConfig) => void;
};

const ConfigPage: FC<Props> = ({ onStart }) => {
  const [wordLength, setWordLength] = useState(5);
  const [allowRepeat, setAllowRepeat] = useState(true);

  return (
    <div>
      <h1>Configure your game</h1>
      <div>
        <select
          onChange={(ev) => setWordLength(parseInt(ev.target.value))}
          value={wordLength}
        >
          {[3, 4, 5, 6, 7].map((lengthOption) => (
            <option key={lengthOption} value={lengthOption}>
              {lengthOption} letters
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          onChange={(ev) => setAllowRepeat(ev.target.value == 'yes')}
          value={allowRepeat ? 'yes' : 'no'}
        >
          <option value="yes">Allow same letter more than once in word</option>
          <option value="no">All letters must be unique</option>
        </select>
      </div>
      <button
        onClick={() =>
          onStart({
            allowRepeat,
            wordLength,
          })
        }
      >
        Start game
      </button>
    </div>
  );
};

export default ConfigPage;
