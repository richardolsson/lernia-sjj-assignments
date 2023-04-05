"use strict";
let val1 = 0;
let val2 = 0;
const resultSpan = document.querySelector("#result");
const val1Input = document.querySelector("#value1");
const val2Input = document.querySelector("#value2");
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
