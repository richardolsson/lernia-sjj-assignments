import './App.css';
import { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import { Game } from './types';

function App() {
  const [screen, setScreen] = useState<'start' | 'game'>('start');
  const [game, setGame] = useState<Game | null>(null);

  return (
    <div className="App">
      {screen === 'start' && (
        <StartScreen
          onStartGame={async (wordLength, allowRepeating) => {
            const res = await fetch('/api/games', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                wordLength,
                allowRepeating,
              }),
            });

            const payload = await res.json();

            setGame(payload.data);
            setScreen('game');
          }}
        />
      )}
      {screen === 'game' && game && <GameScreen game={game} />}
    </div>
  );
}

export default App;
