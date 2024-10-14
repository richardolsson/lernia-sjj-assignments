const form = document.querySelector('.todoForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('.todoForm__input');
  const text = input.value;

  const todoItem = document.createElement('li');
  todoItem.classList.add('todoItem');

  todoItem.addEventListener('click', () => {
    todoItem.classList.toggle('todoItem--completed');

    updateStatus();
  });

  const label = document.createElement('span');
  label.textContent = text;
  label.classList.add('todoItem__label');
  todoItem.append(label);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('todoItem__deleteButton');
  deleteButton.textContent = '🗑️';
  todoItem.append(deleteButton);

  deleteButton.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    todoItem.remove();

    updateStatus();
  });

  const todoList = document.querySelector('.todoList');
  todoList.append(todoItem);

  // Clear input
  input.value = '';
});

function updateStatus() {
  const completedItems = document.querySelectorAll('.todoItem--completed');
  const completeCount = completedItems.length;

  const statusLabel = document.querySelector('.app__status');
  statusLabel.textContent = `${completeCount} completed`;
}