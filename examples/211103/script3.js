function output(str) {
  const line = document.createElement('div');
  line.innerText = str;
  document.querySelector('#output').append(line);
}
