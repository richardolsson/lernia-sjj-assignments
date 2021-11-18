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

  return React.createElement("div", null,
    React.createElement("h1", null, "Hello"),
    React.createElement("button", { onClick }, "Load"),
    React.createElement(MinRatingFilter, { value: minRating, onChange: onFilterChange }),
    React.createElement(ChallengeGrid, { challenges: filteredChallenges }),
  );
}
