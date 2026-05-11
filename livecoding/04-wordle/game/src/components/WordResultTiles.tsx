import type { FC } from "react";
import type { WordResult } from "../types";

import './WordResultTiles.css';

type Props = {
  word: WordResult;
}

const WordResultTiles: FC<Props> = ({ word }) => {
  return (
    <ol className="WordResultTiles">
      {word.map((letterResult, index) => {
        let className = 'WordResultTiles__letter WordResultTiles__letter--' + letterResult.result;

        return (
          <li key={index} className={className}>{letterResult.letter}</li>
        );
      })}
    </ol>
  );
}

export default WordResultTiles;