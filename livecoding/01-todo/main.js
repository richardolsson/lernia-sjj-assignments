function updateCounter() {
  const completedItems = document.querySelectorAll('.taskList__item--completed');
  const count = completedItems.length;

  const counterElement = document.querySelector('.app__counter');
  counterElement.textContent = `${count} completed`;
}

const form = document.querySelector('.taskForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const errorElement = document.querySelector('.taskForm__error');
  const inputElement = document.querySelector('.taskForm__input');
  const inputText = inputElement.value;

  if (inputText.length == 0) {
    form.classList.add('taskForm--withError');
    errorElement.textContent = 'Input must not be empty';
    return;
  }

  errorElement.textContent = '';
  form.classList.remove('taskForm--withError');

  const itemElement = document.createElement('li');
  itemElement.className = 'taskList__item';
  itemElement.textContent = inputText;
  itemElement.addEventListener('click', () => {
    itemElement.classList.toggle('taskList__item--completed');
    updateCounter();
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑';
  deleteButton.className = 'taskList__itemDeleteButton';
  deleteButton.addEventListener('click', () => {
    itemElement.remove();
    updateCounter();
  });
  itemElement.append(deleteButton);

  const listElement = document.querySelector('.taskList');
  listElement.append(itemElement);

  inputElement.value = '';
});