import { useState } from 'react';
import './App.css';
import StartScreen from './components/screens/StartScreen';
import GameScreen from './components/screens/GameScreen';
import WinScreen from './components/screens/WinScreen';
import EndScreen from './components/screens/EndScreen';

function App() {
  const [gameId, setGameId] = useState<string | null>(null);
  const [screen, setScreen] = useState<'start' | 'game' | 'win' | 'end'>(
    'start'
  );

  return (
    <div>
      {screen == 'start' && (
        <StartScreen
          onStart={async (letterCount, allowDuplicates) => {
            const resp = await fetch('/api/games', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                wordLength: letterCount,
                allowDuplicates,
              }),
            });

            const payload = await resp.json();
            setGameId(payload.id);

            setScreen('game');
          }}
        />
      )}
      {screen == 'game' && gameId && <GameScreen gameId={gameId} />}
      {screen == 'win' && <WinScreen />}
      {screen == 'end' && <EndScreen />}
    </div>
  );
}

export default App;
