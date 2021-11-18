import React from "react";

export default function ChallengeGrid(props) {
  const items = props.challenges.map((challenge, key) => {
    return React.createElement("li", { key },
      React.createElement("span", null, challenge.title),
      React.createElement("span", { className: "rating" }, challenge.rating)
    );
  });

  return React.createElement("ul", null, ...items);
}
