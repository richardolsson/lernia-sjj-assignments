const form = document.querySelector('.taskForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const errorElement = document.querySelector('.taskForm__error');
  const inputElement = document.querySelector('.taskForm__input');
  const inputText = inputElement.value;

  if (inputText.length == 0) {
    errorElement.textContent = 'Input must not be empty';
    return;
  }

  errorElement.textContent = '';

  const itemElement = document.createElement('li');
  itemElement.className = 'taskList__item';
  itemElement.textContent = inputText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑';
  deleteButton.className = 'taskList__itemDeleteButton';
  deleteButton.addEventListener('click', () => {
    itemElement.remove();
  });
  itemElement.append(deleteButton);

  const listElement = document.querySelector('.taskList');
  listElement.append(itemElement);

  inputElement.value = '';
});