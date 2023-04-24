import { FC, useState } from "react";

type GuessInputProps = {
  onSubmit: (guess: string) => void;
  wordLength: number;
};

const GuessInput: FC<GuessInputProps> = ({ onSubmit, wordLength }) => {
  const [value, setValue] = useState('');

  const isValid = value.length == wordLength;

  return (
    <div>
      <form onSubmit={(ev) => {
        ev.preventDefault();
        if (isValid) {
          onSubmit(value);
          setValue('');
        }
      }}>
        <input
          value={value}
          onChange={ev => {
            setValue(ev.currentTarget.value);
          }}
        />
        <button type="submit" disabled={!isValid}>Submit</button>
      </form>
    </div>
  );
}

export default GuessInput;