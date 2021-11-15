console.log(esc);

esc.initAll = function () {
  document.querySelector("button").addEventListener("click", () => {
    esc.doFirst();
    esc.doSecond();
  });
};
