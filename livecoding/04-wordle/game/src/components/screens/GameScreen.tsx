import { useState, type FC } from "react";
import { submitGuess } from "../../api";
import { type WordResult } from "../../types";
import WordResultTiles from "../WordResultTiles";
import isCorrect from "../../utils/isCorrect";

type Props = {
  gameId: string;
  onWin: () => void;
}

const GameScreen: FC<Props> = ({ gameId, onWin }) => {
  const [text, setText] = useState('');
  const [guesses, setGuesses] = useState<WordResult[]>([]);

  return (
    <section>
      <form onSubmit={async ev => {
        ev.preventDefault();
        const result = await submitGuess(gameId, text);
        setGuesses(existing => [...existing, result]);

        if (isCorrect(result)) {
          onWin();
        }
      }}>
        <input type="text" value={text} onChange={(ev) => setText(ev.target.value)} />
      </form>
      <div>
        <ul>
          {guesses.toReversed().map((guess, index) => (
            <WordResultTiles key={index} word={guess} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GameScreen;