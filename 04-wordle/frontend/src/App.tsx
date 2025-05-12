import { useState } from 'react';
import './App.css';

import ConfigPage from './components/pages/ConfigPage';
import { type GameInfo } from './types';
import PlayPage from './components/pages/PlayPage';

function App() {
  const [game, setGame] = useState<GameInfo | null>(null);

  return (
    <div>
      {!game && (
        <ConfigPage
          onStart={async (config) => {
            const resp = await fetch('/api/games', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(config),
            });

            const game = await resp.json();
            setGame(game);
          }}
        />
      )}
      {game && !game.endTime && (
        <PlayPage game={game} onWin={(updatedGame) => setGame(updatedGame)} />
      )}
      {game && game.endTime && <h1>You won!</h1>}
    </div>
  );
}

export default App;
