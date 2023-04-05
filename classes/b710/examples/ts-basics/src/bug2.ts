export default function bug2() {
  function add100(x: number): number {
    return x + 100;
  }

  const str = "What is 50 + 100?";
  const words = str.split(" ");
  const val = parseInt(words[2]);
  const result = add100(val);
  console.log("Result is " + result);
}

bug2();