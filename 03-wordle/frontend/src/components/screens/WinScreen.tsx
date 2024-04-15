import { FC, useState } from 'react';

type Props = {
  gameId: string;
};

const WinScreen: FC<Props> = ({ gameId }) => {
  const [name, setName] = useState('');
  return (
    <div>
      <h1>WIN!</h1>
      <p>You won! Fill out your name to submit highscore</p>
      <input value={name} onChange={(ev) => setName(ev.target.value)} />
      <button
        onClick={async () => {
          await fetch(`/api/games/${gameId}/highscore`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
            }),
          });
        }}
      >
        Submit highscore
      </button>
    </div>
  );
};

export default WinScreen;
