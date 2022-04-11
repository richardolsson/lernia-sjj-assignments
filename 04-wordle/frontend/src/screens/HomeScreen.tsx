import { useState } from "react";
import Menu from "../components/Menu";

type HomeScreenProps = {
  onStart: (wordLength: number, unique: boolean) => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onStart }) => {
  const [wordLength, setWordLength] = useState(4);
  const [unique, setUnique] = useState(false);

  const handleStartGame = () => {
    onStart(wordLength, unique);
  };

  return (
    <div className="HomeScreen">
      <h1>Name of game</h1>
      <Menu />
      <h2>Configure game</h2>
      <div>
        <select
          value={wordLength}
          onChange={(ev) => setWordLength(parseInt(ev.target.value))}
        >
          {[3, 4, 5, 6].map((wordLength) => (
            <option value={wordLength}>{wordLength}-letter words</option>
          ))}
        </select>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={unique}
            onChange={(ev) => setUnique(ev.target.checked)}
          />
          Allow unique characters only
        </label>
      </div>
      <button onClick={handleStartGame}>Start game</button>
    </div>
  );
};

export default HomeScreen;
