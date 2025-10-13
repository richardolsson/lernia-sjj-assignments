const form = document.querySelector('.taskForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputElement = document.querySelector('.taskForm__input');
  const inputText = inputElement.value;

  const itemElement = document.createElement('li');
  itemElement.className = 'taskList__item';
  itemElement.textContent = inputText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑';
  deleteButton.className = 'taskList__itemDeleteButton';
  itemElement.append(deleteButton);

  const listElement = document.querySelector('.taskList');
  listElement.append(itemElement);

  inputElement.value = '';
});