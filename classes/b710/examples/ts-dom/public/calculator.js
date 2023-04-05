let val1 = 0;
let val2 = 0;

const resultSpan = document.querySelector("#result");
const val1Input = document.querySelector("#value1");
const val2Input = document.querySelector("#value2");

function calculate() {
  resultSpan.innerText = val1 + val2;
}

val1Input.addEventListener("change", (ev) => {
  val1 = val1Input.value;
  calculate();
});

val2Input.addEventListener("change", (ev) => {
  val2 = val2Input.value;
  calculate();
});

calculate();
