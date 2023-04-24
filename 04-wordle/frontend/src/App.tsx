import './App.css';
import { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';

function App() {
  const [screen, setScreen] = useState<'start' | 'game'>('start');
  const [gameId, setGameId] = useState<string | null>(null);

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

            setGameId(payload.data.id);
            setScreen('game');
          }}
        />
      )}
      {screen === 'game' && gameId && <GameScreen gameId={gameId} />}
    </div>
  );
}

export default App;
