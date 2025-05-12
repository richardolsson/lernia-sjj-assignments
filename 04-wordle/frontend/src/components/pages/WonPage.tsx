import { useState, type FC } from 'react';
import type { GameInfo } from '../../types';

type Props = {
  game: GameInfo;
  onReset: () => void;
};

const WonPage: FC<Props> = ({ game, onReset }) => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!game.endTime) {
    return null;
  }

  const startTime = new Date(game.startTime);
  const endTime = new Date(game.endTime);
  const duration = endTime.getTime() - startTime.getTime();

  return (
    <div>
      <h1>YOU WON</h1>
      <p>
        It took <strong>{duration / 1000} seconds</strong>
      </p>
      <h2>Submit highscore</h2>

      {!submitted && (
        <form
          onSubmit={async (ev) => {
            ev.preventDefault();
            await fetch(`/api/games/${game.id}/highscore`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: name,
              }),
            });

            setSubmitted(true);
          }}
        >
          <label>
            Name
            <input onChange={(ev) => setName(ev.target.value)} value={name} />
          </label>
          <button type="submit">Submit highscore</button>
        </form>
      )}
      {submitted && <div>Done!</div>}
      <div>
        <ul>
          <li>
            <a href="/highscore">All highscore</a>
          </li>
          <li>
            <a
              href="/"
              onClick={(ev) => {
                ev.preventDefault();
                onReset();
              }}
            >
              Play again
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WonPage;
