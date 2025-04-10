function bug2() {
  function add100(x: number) {
    return x + 100;
  }

  const str = 'What is 50 + 100?';
  const words = str.split(' ');
  const val = words[2];
  const numVal = parseFloat(val);
  const result = add100(numVal);
  console.log('Result is ' + result);
}