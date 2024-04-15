import { FC, useState } from 'react';
import { Guess } from '../../types';
import GuessFeedback from '../GuessFeedback';

type Props = {
  gameId: string;
};

const GameScreen: FC<Props> = ({ gameId }) => {
  const [text, setText] = useState('');
  const [guesses, setGuesses] = useState<Guess[]>([]);

  return (
    <div>
      <h1>Game</h1>
      {guesses.map((guess, index) => (
        <GuessFeedback key={index} guess={guess} />
      ))}
      <input
        value={text}
        onChange={(ev) => setText(ev.target.value)}
        onKeyUp={async (ev) => {
          if (ev.key == 'Enter') {
            const resp = await fetch(`/api/games/${gameId}/guesses`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                guess: text,
              }),
            });

            const payload = await resp.json();

            setGuesses([...guesses, payload.feedback]);

            setText('');
          }
        }}
      />
    </div>
  );
};

export default GameScreen;
