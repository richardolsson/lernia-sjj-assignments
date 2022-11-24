import React from "react";
import ReactDOM from "react-dom";
import ChallengeItem from "./components/ChallengeItem";

window.esc = {
  init: () => {
    const container = document.querySelector(".container");

    ReactDOM.render(
      React.createElement('ul', { id: 'challenges', "aria-label": "Challenges" }, [
        React.createElement(ChallengeItem, { title: 'Network in the night', rating: 2.5, }),
        React.createElement(ChallengeItem, { title: 'Project X: online', rating: 1.0 }),
      ]),
      container
    );
  },
};
