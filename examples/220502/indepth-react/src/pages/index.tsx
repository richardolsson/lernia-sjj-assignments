import type { NextPage } from "next";
import Headline from "../components/Headline";

const Home: NextPage = () => {
  return (
    <div>
      <Headline>
        Hello <em>from</em> children
      </Headline>
    </div>
  );
};

export default Home;
