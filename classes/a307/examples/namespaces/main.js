esc.initAll = function () {
  document.querySelector("button").addEventListener("click", () => {
    esc.first.init();
    esc.second.init();
  });
};
