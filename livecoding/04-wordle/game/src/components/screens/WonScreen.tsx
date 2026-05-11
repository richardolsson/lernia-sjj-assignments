import { useState, type FC } from "react";

type Props = {
  onSubmit: (name: string) => void;
};

const WonScreen: FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  return (
    <section>
      <h1>Congratulations, you won!</h1>
      <p>Enter your name to make it to the leaderboards</p>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        onSubmit(name);
      }}>
        <input type="text" value={name} onChange={ev => setName(ev.target.value)} />
      </form>
    </section>
  );
}

export default WonScreen;