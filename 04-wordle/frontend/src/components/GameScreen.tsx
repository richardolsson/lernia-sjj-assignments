import { FC } from "react";

type GameScreenProps = {
  gameId: string;
}

const GameScreen: FC<GameScreenProps> = ({ gameId }) => {
  return (
    <div>
      <h1>GAME</h1>
      {gameId}
    </div>
  );
}

export default GameScreen;