import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

window.esc = {
  init: () => {
    const container = document.querySelector(".container");

    ReactDOM.render(React.createElement(App), container);
  },
};
