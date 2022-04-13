import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    async function loadRandomNumber() {
      const res = await fetch("http://localhost:3000/api/random");
      const data = await res.json();
      setRandomNumber(data.random);
    }

    loadRandomNumber();
  }, []);

  return (
    <div>
      <h1>{randomNumber}</h1>
    </div>
  );
};

export default Home;
