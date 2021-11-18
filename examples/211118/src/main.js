import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";


window.esc = {
  init: () => {
    const container = document.querySelector("ul");

    ReactDOM.render(React.createElement(App), document.querySelector('.container'));
  },
};
