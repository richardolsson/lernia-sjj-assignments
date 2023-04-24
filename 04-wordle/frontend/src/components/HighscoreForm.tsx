import { FC, useState } from "react";

type HighscoreFormProps = {
  onSubmit: (name: string) => void;
};

const HighscoreForm: FC<HighscoreFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const isValid = name.length > 0;

  return (
    <div>
      <h1>Submit highscore?</h1>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        if (isValid) {
          onSubmit(name);
        }
      }}>
        <input
          value={name}
          onChange={ev => {
            setName(ev.currentTarget.value);
          }}
        />
        <button type="submit" disabled={!isValid}>Submit highscore</button>
      </form>
    </div>
  );
};

export default HighscoreForm;