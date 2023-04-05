let val1 = 0;
let val2 = 0;

const resultSpan = document.querySelector("#result") as HTMLSpanElement | null;
const val1Input = document.querySelector("#value1") as HTMLInputElement | null;
const val2Input = document.querySelector("#value2") as HTMLInputElement | null;

function calculate() {
  if (resultSpan) {
    resultSpan.innerText = (val1 + val2).toString();
  }
}

if (resultSpan && val1Input && val2Input) {
  val1Input.addEventListener("change", (ev) => {
    val1 = parseInt(val1Input.value);
    calculate();
  });

  val2Input.addEventListener("change", (ev) => {
    val2 = parseInt(val2Input.value);
    calculate();
  });

  calculate();
}