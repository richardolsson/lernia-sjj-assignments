// Use DOM API to access the elements in the HTML
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const counter = document.querySelector('.counter');

let completedCount = 0;

button.addEventListener('click', function() {
  // Get text from input
  const text = input.value;

  // Validate input to make sure that it's not empty
  if (text.length == 0) {
    document.querySelector('.error').innerText = 'Input must not be empty';
    document.querySelector('.error').classList.add('visible');
    return;
  }
  else {
    document.querySelector('.error').classList.remove('visible');
  }

  // Create <li> element and add to DOM
  const item = document.createElement('li');
  list.appendChild(item);

  const itemLabel = document.createElement('span');
  itemLabel.innerText = text;
  itemLabel.setAttribute('class', 'label');
  item.appendChild(itemLabel);

  const trashcan = document.createElement('span');
  trashcan.innerHTML = '&#x1F5D1;';
  trashcan.setAttribute('class', 'trashcan');
  item.appendChild(trashcan);

  // Toggle "completed" class when an item is clicked
  itemLabel.addEventListener('click', function() {
    if (item.getAttribute('class') == 'completed') {
      item.setAttribute('class', '');
      completedCount--;
    }
    else {
      item.setAttribute('class', 'completed');
      completedCount++;
    }

    counter.innerText = `${completedCount} completed`;
  });

  trashcan.addEventListener('click', function() {
    item.remove();
  });

  // Reset input
  input.value = '';
});
