import React from "react";

export default function ChallengeGrid(props) {
  const items = props.challenges.map((challenge, key) => {
    return (
      <li key={ key }>
        <span>{ challenge.title }</span>
        <span className="rating">{ challenge.rating }</span>
      </li>
    );
  });

  return React.createElement("ul", null, ...items);
}
