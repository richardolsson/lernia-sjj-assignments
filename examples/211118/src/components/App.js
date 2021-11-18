import React from "react";

import ChallengeGrid from "./ChallengeGrid";
import MinRatingFilter from "./MinRatingFilter";
import { TimeCachedDataRetriever } from "../retrievers";


export default function App() {
  const [challenges, setChallenges] = React.useState([]);
  const [minRating, setMinRating] = React.useState(3.5);

  const onClick = async () => {
    const retriever = new TimeCachedDataRetriever();
    const loadedChallenges = await retriever.load();
    setChallenges(loadedChallenges);
  };

  const onFilterChange = (minRating) => {
    setMinRating(minRating);
  };

  const filteredChallenges = challenges.filter(challenge => challenge.rating >= minRating);

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={ onClick }>Load</button>
      <MinRatingFilter value={ minRating } onChange={ onFilterChange }/>
      <ChallengeGrid challenges={ filteredChallenges }/>
    </div>
  );
}
