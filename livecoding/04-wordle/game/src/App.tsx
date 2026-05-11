import { useState } from 'react';
import './App.css'
import WelcomeScreen from './components/screens/WelcomeScreen';
import GameScreen from './components/screens/GameScreen';
import WonScreen from './components/screens/WonScreen';
import DoneScreen from './components/screens/DoneScreen';

type ScreenState = 'welcome' | 'game' | 'won' | 'done';

function App() {
  const [screen, setScreen] = useState<ScreenState>('welcome');

  return (
    <div>
      {screen == 'welcome' && <WelcomeScreen/>}
      {screen == 'game' && <GameScreen/>}
      {screen == 'won' && <WonScreen/>}
      {screen == 'done' && <DoneScreen/>}
    </div>
  );
}

export default App
