import { useState } from 'react';
import './App.css'
import WelcomeScreen from './components/screens/WelcomeScreen';
import GameScreen from './components/screens/GameScreen';
import WonScreen from './components/screens/WonScreen';
import DoneScreen from './components/screens/DoneScreen';
import { startGame, submitHighscore } from './api';

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
      {screen == 'game' && <GameScreen gameId={gameId} onWin={() => {
        setScreen('won');
      }} />}
      {screen == 'won' && <WonScreen onSubmit={async (name) => {
        await submitHighscore(gameId, name);
        setScreen('done');
      }} />}
      {screen == 'done' && <DoneScreen />}
    </div>
  );
}

export default App
