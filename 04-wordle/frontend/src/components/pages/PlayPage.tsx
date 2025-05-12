import { useState, type FC } from 'react';
import type { GameInfo, GuessResponse, GuessResult } from '../../types';
import GuessList from '../GuessList';

type Props = {
  game: GameInfo;
  onWin: (game: GameInfo) => void;
};

const PlayPage: FC<Props> = ({ game, onWin }) => {
  const [text, setText] = useState('');
  const [guesses, setGuesses] = useState<GuessResult[]>([]);

  return (
    <div>
      <form
        onSubmit={async (ev) => {
          ev.preventDefault();

          const resp = await fetch(`/api/games/${game.id}/guesses`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              guess: text,
            }),
          });

          const payload = (await resp.json()) as GuessResponse;

          if (payload.guess.correct) {
            onWin(payload.game);
          } else {
            setGuesses([...guesses, payload.guess]);
            setText('');
          }
        }}
      >
        <input
          value={text}
          onChange={(ev) => setText(ev.target.value)}
          maxLength={game.config.wordLength}
          minLength={game.config.wordLength}
        />
        <button type="submit">OK</button>
      </form>
      <GuessList guesses={guesses} />
    </div>
  );
};

export default PlayPage;
