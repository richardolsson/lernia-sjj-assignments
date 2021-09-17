// Use DOM API to access the elements in the HTML
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
  // Get text from input
  const text = input.value;

  // Create <li> element and add to DOM
  const item = document.createElement('li');
  item.innerText = text;
  list.appendChild(item);

  // Reset input
  input.value = '';
});
