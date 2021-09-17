// Use DOM API to access the elements in the HTML
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
  // Get text from input
  const text = input.value;

  // Validate input to make sure that it's not empty
  if (text.length == 0) {
    document.querySelector('small').innerText = 'Input must not be empty';
    return;
  }
  else {
    document.querySelector('small').innerText = '';
  }

  // Create <li> element and add to DOM
  const item = document.createElement('li');
  item.innerText = text;
  list.appendChild(item);

  // Reset input
  input.value = '';
});
