import { connect } from "mongoose";
import { GetServerSideProps, NextPage } from "next";
import { GameHighscore } from "../server/models";

type Highscore = {
  name: string;
  wordLength: number;
  unique: boolean;
  duration: number;
};

type HighscorePageProps = {
  highscores: Highscore[];
};

export const getServerSideProps: GetServerSideProps<
  HighscorePageProps
> = async (context) => {
  const wordLength = context.query.wordLength
    ? parseInt(context.query.wordLength as string)
    : undefined;

  const unique = context.query.unique as "true" | "false" | undefined;

  await connect("mongodb://localhost:27017/test");

  const highscores = await GameHighscore.find();
  const filtered = highscores.filter((hs) => {
    if (wordLength && hs.wordLength != wordLength) {
      return false;
    }

    if (unique == "true" && !hs.unique) {
      return false;
    } else if (unique == "false" && hs.unique) {
      return false;
    }

    return true;
  });

  return {
    props: {
      highscores: filtered.map((hs) => ({
        name: hs.name,
        wordLength: hs.wordLength,
        unique: hs.unique,
        duration: (hs.endTime.getTime() - hs.startTime.getTime()) / 1000,
      })),
    },
  };
};

const HighscorePage: NextPage<HighscorePageProps> = ({ highscores }) => {
  return (
    <div>
      <h1>Highscore</h1>
      <ul>
        {highscores.map((hs, index) => {
          return (
            <li key={index}>
              {hs.name} {hs.duration}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HighscorePage;
