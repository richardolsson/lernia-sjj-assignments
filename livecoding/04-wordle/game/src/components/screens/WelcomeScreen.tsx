import { useState, type FC } from "react";

type Props = {
  onStart: (wordLength: number, allowRepeat: boolean) => void;
}

const WelcomeScreen: FC<Props> = ({ onStart }) => {
  const [wordLength, setWordLength] = useState(5);
  const [allowRepeat, setAllowRepeat] = useState(true);

  return (
    <section>
      <h1>Welcome to this game</h1>
      <div>
        <label>
          Word length
          <select
            value={wordLength}
            onChange={ev => setWordLength(parseInt(ev.target.value))}
          >
            <option value={4}>4 letters</option>
            <option value={5}>5 letters</option>
            <option value={6}>6 letters</option>
          </select>
        </label>
      </div>
      <div>

        <label>
          Restrictions
          <select
            value={allowRepeat ? 'repeat' : 'unique'}
            onChange={ev => setAllowRepeat(ev.target.value == 'repeat')}
          >
            <option value="unique">Require letters to be unique</option>
            <option value="repeat">Allow letters to repeat</option>
          </select>
        </label>
      </div>
      <button onClick={() => onStart(wordLength, allowRepeat)}>
        Start game
      </button>
    </section>
  );
}

export default WelcomeScreen;