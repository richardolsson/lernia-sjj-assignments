import { useState } from 'react';
import './App.css'
import WelcomeScreen from './components/screens/WelcomeScreen';
import GameScreen from './components/screens/GameScreen';
import WonScreen from './components/screens/WonScreen';
import DoneScreen from './components/screens/DoneScreen';
import { startGame } from './api';

type ScreenState = 'welcome' | 'game' | 'won' | 'done';

function App() {
  const [screen, setScreen] = useState<ScreenState>('welcome');
  const [gameId, setGameId] = useState<string>('');

  return (
    <div>
      {screen == 'welcome' && <WelcomeScreen onStart={async (wordLength, allowRepeat) => {
        const id = await startGame(wordLength, allowRepeat);
        setGameId(id);
        setScreen('game');
      }} />}
      {screen == 'game' && <GameScreen />}
      {screen == 'won' && <WonScreen />}
      {screen == 'done' && <DoneScreen />}
    </div>
  );
}

export default App
