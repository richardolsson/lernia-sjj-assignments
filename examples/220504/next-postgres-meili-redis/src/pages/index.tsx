import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Movie } from "../types";

const Home: NextPage = () => {
  const [searchString, setSearchString] = useState("");
  const [matches, setMatches] = useState<Movie[]>([]);

  useEffect(() => {
    async function search(str: string) {
      const res = await fetch("/api/search?q=" + str);
      const data = await res.json();

      if (str == searchString) {
        setMatches(data.hits);
      }
    }

    if (searchString.length > 2) {
      search(searchString);
    }
  }, [searchString]);

  return (
    <div>
      <input
        type="text"
        value={searchString}
        onChange={(ev) => setSearchString(ev.target.value)}
      />
      {searchString && (
        <ul>
          {matches.map((match) => {
            return <li key={match.id}>{match.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
